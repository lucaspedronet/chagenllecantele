import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { HeaderBase } from '../../components/HeaderBase';
import { StatusBarBase } from '../../components/StatusBarBase';

import {
  Container,
  ListPackage,
  PackageItem,
  PackageName,
  PackageStatus,
  PackageTime,
} from './styles';

type PackageProps = {
  id: string;
  package: string;
  status: 'Sincronizado' | 'Pendente';
  time: string;
};

const dataPackage: PackageProps[] = [
  {
    id: '1',
    time: '11:30',
    package: 'X-123',
    status: 'Pendente',
  },
  {
    id: '2',
    time: '10:20',
    package: 'X-455',
    status: 'Sincronizado',
  },
  {
    id: '3',
    time: '10:20',
    package: 'X-455',
    status: 'Sincronizado',
  },
];

function Status() {
  const { statusBar } = useTheme();
  const [packageList, setPackageList] = useState<PackageProps[]>(
    [] as PackageProps[],
  );

  useEffect(() => {
    setPackageList(() => dataPackage);
  }, []);

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
          data={packageList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <PackageItem key={item.id}>
              <View>
                <PackageName>Pacote ID: {item.package}</PackageName>
                <PackageStatus>{item.status}</PackageStatus>
              </View>
              <PackageTime>{item.time}</PackageTime>
            </PackageItem>
          )}
        />
      </Container>
    </>
  );
}

export { Status };
