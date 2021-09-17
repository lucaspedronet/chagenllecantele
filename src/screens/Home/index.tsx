/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';
import { HeaderBase } from '../../components/HeaderBase';
import { StatusBarBase } from '../../components/StatusBarBase';

import { fetchPointsId, fetchPointsAll, fetchPoints } from '../../services/api';

import {
  Container,
  SpecialWallpaper,
  Icon,
  TitleMain,
  StatusText,
  StatusServiceContainer,
  StatusServiceText,
  StatusServiceActiveText,
  IconStatusServiceToggle,
  // interval communication
  CommunicationInterval,
  TitleCommunicationInterval,
  IntervalTimeBox,
  IntervalTimeText,
} from './styles';

type IntervalTime = {
  time: '10s' | '5s' | '3s' | '1s';
  selected: boolean;
};

const dataTimes: IntervalTime[] = [
  { time: '10s', selected: false },
  { time: '5s', selected: false },
  { time: '3s', selected: false },
  { time: '1s', selected: false },
];

function Home() {
  const { statusBar } = useTheme();

  const [times, setTimes] = useState<IntervalTime[]>([] as IntervalTime[]);
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => setTimes(dataTimes), []);

  useEffect(() => {
    async function loading(): Promise<void> {
      try {
        // await fetchPointsAll();
        // await fetchPoints('jkl-123', [
        //   {
        //     id: '123',
        //     latitude: -23.2213123,
        //     longitude: -45.2313213,
        //     speed: 120,
        //     time: '2020-01-01',
        //   },
        // ]);
        await fetchPointsId('123');
      } catch (error) {
        console.log(error);
      }
    }

    loading();
  }, []);

  const toggleSelectedTime = useCallback((id: string) => {
    setTimes(props =>
      props.map(time =>
        time.time === id
          ? { ...time, selected: true }
          : { ...time, selected: false },
      ),
    );
  }, []);

  function toggleStatus() {
    setStatus(props => !props);
  }

  return (
    <>
      <StatusBarBase
        barStyle="light-content"
        backgroundColor={statusBar.backgroundDefault}
        animated
        translucent={false}
      />
      <Container>
        <HeaderBase
          titleLeft="Olá, bem-vindo"
          icon={true}
          titleRight="Status"
        />
        <SpecialWallpaper>
          <Icon name="find" />
          <TitleMain>
            My GPS - Tranking{'\n'} {status && <StatusText>oline</StatusText>}
          </TitleMain>
        </SpecialWallpaper>
        <StatusServiceContainer>
          <View>
            <StatusServiceText>Status do serviço</StatusServiceText>
            <StatusServiceActiveText>Serviço ativo</StatusServiceActiveText>
          </View>
          <TouchableOpacity onPress={toggleStatus}>
            <IconStatusServiceToggle
              name={status ? 'toggle-on' : 'toggle-off'}
              size={30}
            />
          </TouchableOpacity>
        </StatusServiceContainer>
        <CommunicationInterval>
          <TitleCommunicationInterval>
            Intervalo de comunicação
          </TitleCommunicationInterval>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            {times.map(time => (
              <IntervalTimeBox
                key={time.time}
                selected={time.selected}
                onPress={() => toggleSelectedTime(time.time)}>
                <IntervalTimeText selected={time.selected}>
                  {time.time}
                </IntervalTimeText>
              </IntervalTimeBox>
            ))}
          </View>
        </CommunicationInterval>
      </Container>
    </>
  );
}

export { Home };
