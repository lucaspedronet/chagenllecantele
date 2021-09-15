import React from 'react';
import { useTheme } from 'styled-components/native';
import { HeaderBase } from '../../components/HeaderBase';
import { StatusBarBase } from '../../components/StatusBarBase';

import { Container } from './styles';

function Home() {
  const { statusBar } = useTheme();
  return (
    <>
      <StatusBarBase
        barStyle="light-content"
        backgroundColor={statusBar.backgroundDefault}
        animated
        translucent={false}
      />
      <HeaderBase
        titleLeft="Olá, bem-vindo"
        icon={true}
        titleRight="Status"
        // title="Status"
      />
      <Container />
    </>
  );
}

export { Home };
