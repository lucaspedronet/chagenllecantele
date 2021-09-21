/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { HeaderBase } from '../../components/HeaderBase';
import { StatusBarBase } from '../../components/StatusBarBase';
import { StatePoints, useFetch } from '../../hooks/useFetch';

import {
  Container,
  ListPackage,
  PackageItem,
  PackageName,
  PackageStatus,
  PackageTime,
} from './styles';

function Status() {
  const { statusBar } = useTheme();
  const { packages, dispatch } = useFetch();

  const handleSynchronizePackage = useCallback(
    (id: string) => {
      dispatch({
        type: StatePoints.SYNCHRONIZE_PACKAGE,
        payload: id,
      });
    },
    [dispatch],
  );

  return (
    <>
      <StatusBarBase
        barStyle="light-content"
        backgroundColor={statusBar.backgroundDefault}
        animated
        translucent={false}
      />

      <HeaderBase title="Status" />
      <Container>
        <ListPackage
          data={packages.keys}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <PackageItem
              key={item.id}
              onPress={() => handleSynchronizePackage(item.id)}>
              <View style={{ flex: 1, marginRight: 15 }}>
                <PackageName>Pacote ID: {item.id}</PackageName>
                {item.synchronize ? (
                  <PackageStatus>sincronizado</PackageStatus>
                ) : (
                  <PackageStatus>pendente</PackageStatus>
                )}
              </View>
              <PackageTime>{item.date}</PackageTime>
            </PackageItem>
          )}
        />
      </Container>
    </>
  );
}

export { Status };
