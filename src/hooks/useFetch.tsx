/* eslint-disable react-hooks/rules-of-hooks */
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { Alert, ToastAndroid } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import { fetchPoints, fetchPointsAll } from '../services/api';

type Props = {
  children: ReactNode;
};

type FetchContext = {
  times: IntervalTime[];
  packages: InitialStateProps;
  dispatch: React.Dispatch<ActionProps>;
  toggleSelectedTime: (id: string) => void;
  findTimeSelected: () => IntervalTime;
};

export type Point = {
  id: string;
  latitude: number;
  longitude: number;
  speed: number;
  time: string;
};

type ActionProps = {
  type: string;
  payload: any;
};

type IntervalTime = {
  time: '10s' | '5s' | '3s' | '1s';
  delay: 10 | 5 | 3 | 1;
  selected: boolean;
};

const dataTimes: IntervalTime[] = [
  { time: '10s', selected: true, delay: 10 },
  { time: '5s', selected: false, delay: 5 },
  { time: '3s', selected: false, delay: 3 },
  { time: '1s', selected: false, delay: 1 },
];

// eslint-disable-next-line no-shadow
export enum StatePoints {
  TAKE_CURRENT_LOCAL = 'TAKE_CURRENT_LOCAL',
  SEARCH_PACKAGE_POINT = 'SEARCH_PACKAGE_POINT',
  SYNCHRONIZE_PACKAGE_ALL = 'SYNCHRONIZE_PACKAGE_ALL',
  SYNCHRONIZE_PACKAGE = 'SYNCHRONIZE_PACKAGE',
}

type RequestKey = {
  keys: string[];
};

export type KeyProps = {
  id: string;
  date: string;
  synchronize: boolean;
};

export type Packages = {
  id: string;
  points: Point[];
};

type InitialStateProps = {
  points: Point[];
  packages: Packages[];
  keys: KeyProps[];
};

const initialState: InitialStateProps = {
  points: [],
  packages: [],
  keys: [],
};

function reducer(state: InitialStateProps = initialState, action: ActionProps) {
  switch (action.type) {
    case StatePoints.TAKE_CURRENT_LOCAL: {
      const point = Object.assign(action.payload, { id: uuidv4() });
      const newPoints = [...state.points, point];

      if (newPoints.length >= 5) {
        const id = uuidv4();

        const newPackage: Packages = {
          id,
          points: newPoints,
        };

        const NewKey = {
          id,
          date: new Date().toTimeString().split(' ')[0],
          synchronize: false,
        };

        return {
          keys: [...state.keys, NewKey],
          points: [],
          packages: [...state.packages, newPackage],
        };
      }

      return {
        keys: state.keys,
        points: newPoints,
        packages: state.packages,
      };
    }
    case StatePoints.SEARCH_PACKAGE_POINT: {
      async function search() {
        const request = (await fetchPointsAll()) as unknown as RequestKey;
        console.log(request);
      }
      search();

      return state;
    }
    case StatePoints.SYNCHRONIZE_PACKAGE: {
      async function synchronizePackage() {
        const findPackage = state.packages.find(k => k.id === action.payload);

        if (findPackage) {
          const keys = state.keys.map(async k => {
            if (k.id === findPackage.id) {
              console.log(k);
              await fetchPoints(findPackage.id, findPackage.points);

              Alert.alert('Atualizado', 'Pacote foi sincornizado!');
              return Object.assign(k, { synchronize: true });
            }
            return k;
          });

          return {
            keys,
            points: state.points,
            packages: state.packages,
          };
        }
      }

      synchronizePackage();
      return state;
    }
    case StatePoints.SYNCHRONIZE_PACKAGE_ALL: {
      let newKeys: KeyProps[];

      // const filterKeys = state.keys.filter(k => !k.synchronize);
      newKeys = state.keys.map(k => {
        console.log('keys: ', k);
        state.packages.forEach(async p => {
          if (p.id === k.id) {
            await fetchPoints(p.id, p.points);
            return Object.assign(k, { synchronize: true });
          }
          return p;
        });
        return k;
      });

      return {
        points: state.points,
        packages: state.packages,
        keys: newKeys,
      };
    }
    default: {
      return state;
    }
  }
}

const FetchContext = createContext<FetchContext>({} as FetchContext);

function FetchProvider({ children }: Props) {
  const netInfo = useNetInfo();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [times, setTimes] = useState<IntervalTime[]>([] as IntervalTime[]);

  useEffect(() => setTimes(dataTimes), []);
  useEffect(() => {
    if (netInfo.isConnected === true && state.packages.length > 0) {
      return Alert.alert(
        'Conectado',
        'Deseja sincronizar os pacotes pendentes?',
        [
          {
            text: 'Sincronizar',
            onPress: () => {
              dispatch({
                type: StatePoints.SYNCHRONIZE_PACKAGE_ALL,
                payload: undefined,
              });
              return ToastAndroid.show('Sincronizando...', ToastAndroid.BOTTOM);
            },
            style: 'default',
          },
          {
            text: 'Cancelar',
            onPress: () =>
              ToastAndroid.show('Operação cancelada', ToastAndroid.BOTTOM),
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
          onDismiss: () => ToastAndroid.show('Saindo...', ToastAndroid.BOTTOM),
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [netInfo.isConnected]);

  // useEffect(() => console.table(state), [state]);

  const toggleSelectedTime = useCallback((id: string) => {
    setTimes(props =>
      props.map(time =>
        time.time === id
          ? { ...time, selected: true }
          : { ...time, selected: false },
      ),
    );
  }, []);

  function findTimeSelected() {
    const selectedTime = times.find(time => time.selected);
    if (!selectedTime) {
      return times[0];
    }
    return selectedTime;
  }

  return (
    <FetchContext.Provider
      value={{
        packages: state,
        dispatch,
        times,
        toggleSelectedTime,
        findTimeSelected,
      }}>
      {children}
    </FetchContext.Provider>
  );
}

function useFetch() {
  const context = useContext(FetchContext);

  if (!context) {
    throw Error('userAuth must be used within an AuthProvider');
  }

  return context;
}

export { FetchProvider, useFetch };
