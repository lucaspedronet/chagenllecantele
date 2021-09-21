/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import * as Location from 'expo-location';

import { useFetch, StatePoints, Point } from '../../hooks/useFetch';

import { HeaderBase } from '../../components/HeaderBase';
import { StatusBarBase } from '../../components/StatusBarBase';

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

function Home() {
  const { statusBar } = useTheme();
  const { times, toggleSelectedTime, dispatch, findTimeSelected, packages } =
    useFetch();

  const [status, setStatus] = useState<boolean>(false);

  const locationPosition = useCallback(async () => {
    let permission = await Location.requestForegroundPermissionsAsync();

    if (permission.status !== 'granted') {
      return;
    }

    let location = await Location.getLastKnownPositionAsync({});

    if (location?.coords && status) {
      const formattedDate = new Date(location.timestamp)
        .toISOString()
        .split('T')[0];

      const point: Point = {
        id: '',
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        speed: location.coords.speed || 0,
        time: formattedDate,
      };

      dispatch({
        type: StatePoints.TAKE_CURRENT_LOCAL,
        payload: point,
      });
    }
  }, [dispatch, status]);

  useEffect(() => {
    const time = findTimeSelected();

    if (time?.delay) {
      const handleInterval = setInterval(() => {
        locationPosition();
      }, time.delay * 1000);

      return () => {
        clearInterval(handleInterval);
      };
    }
  }, [findTimeSelected, locationPosition]);

  useEffect(() => console.log(packages.packages[0]), [packages]);

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
