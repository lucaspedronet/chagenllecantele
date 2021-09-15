import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

type BoxLeftProps = {
  goBack: boolean;
};

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: ${RFPercentage(10)}px;

  background-color: ${({ theme }) => theme.header.backgroundDefault};
`;

export const HeaderIcon = styled(MaterialIcons)`
  font-size: 24px;
  color: #ffffff;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.IBM_SemiBold};
  font-weight: 600;
  font-size: ${({ theme }) => RFValue(theme.fontScale.xxs + 2)}px;

  line-height: ${RFValue(21.6)}px;
  font-style: normal;
  text-align: center;

  color: ${({ theme }) => theme.fontColor.title};
`;

export const TitleLeftText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.IBM_Regular};
  font-weight: 400;
  font-size: ${({ theme }) => RFValue(theme.fontScale.xxs)}px;

  line-height: ${RFValue(18)}px;
  font-style: normal;
  text-align: left;

  color: ${({ theme }) => theme.fontColor.title};
`;

export const BoxLeft = styled.View<BoxLeftProps>`
  flex: 1;
  height: 100%;

  align-items: center;
  justify-content: center;

  ${({ goBack }) =>
    !goBack &&
    css`
      align-items: flex-start;
      justify-content: center;
    `}
`;

export const BoxCenter = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
`;

export const BoxRight = styled.View`
  flex: 1;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const ButtonGoBack = styled(BorderlessButton)`
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;

  border-radius: ${RFValue(20)}px;
  margin-left: 20px;

  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const ButtonStatus = styled(BorderlessButton)`
  border-radius: ${RFValue(20)}px;

  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
