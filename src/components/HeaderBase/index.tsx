import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  Header,
  HeaderTitle,
  TitleLeftText,
  BoxLeft,
  BoxCenter,
  BoxRight,
  ButtonGoBack,
  ButtonStatus,
} from './styles';

interface IHeaderBase {
  titleLeft?: string;
  titleRight?: string;
  title?: string;
  icon?: boolean;
}
const HeaderBase = ({ title, titleLeft, titleRight }: IHeaderBase) => {
  const navigation = useNavigation();

  function handlerGoBack() {
    navigation.goBack();
  }

  function handleStatus(): void {
    navigation.navigate('Status');
  }

  return (
    <Header>
      <BoxLeft goBack={!!titleLeft}>
        {!titleLeft ? (
          <ButtonGoBack onPress={handlerGoBack}>
            <TitleLeftText>Voltar</TitleLeftText>
          </ButtonGoBack>
        ) : (
          <TitleLeftText>{titleLeft}</TitleLeftText>
        )}
      </BoxLeft>
      <BoxCenter>{title && <HeaderTitle>{title}</HeaderTitle>}</BoxCenter>
      <BoxRight>
        {titleRight && (
          <ButtonStatus onPress={handleStatus}>
            <HeaderTitle>{titleRight}</HeaderTitle>
          </ButtonStatus>
        )}
      </BoxRight>
    </Header>
  );
};

export { HeaderBase };
