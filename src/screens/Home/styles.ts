import styled, { css } from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

type TimeProps = {
  selected: boolean;
};
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.card.background};
`;

export const SpecialWallpaper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding: 0 ${RFValue(40)}px;
  margin: 0;
  height: ${RFValue(100)}px;

  border-bottom-width: 1px;
  border-bottom-color: #e9e9ee;
  background-color: transparent;
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(50)}px;
  color: ${({ theme }) => theme.brandColors.secondary};
`;

export const TitleMain = styled.Text`
  font-family: ${({ theme }) => theme.fonts.IBM_SemiBold};
  font-size: ${({ theme }) => theme.fontScale.md}px;
  line-height: ${({ theme }) => theme.fontScale.md + 4}px;
  font-weight: 600;
  font-style: normal;
  text-align: left;
  color: ${({ theme }) => theme.brandColors.back};

  margin-left: ${RFValue(15)}px;
`;

export const StatusText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.IBM_Regular};
  font-size: ${({ theme }) => theme.fontScale.md}px;
  line-height: ${({ theme }) => theme.fontScale.md + 4}px;
  font-weight: 600;
  font-style: italic;
  text-align: left;
  color: ${({ theme }) => theme.brandColors.successDefault};
`;

export const StatusServiceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 ${RFValue(40)}px;
  margin: 0;
  height: ${RFValue(100)}px;

  background-color: transparent;
`;

export const StatusServiceText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.IBM_Medium};
  font-size: ${({ theme }) => theme.fontScale.md}px;
  line-height: ${({ theme }) => theme.fontScale.md + 4}px;
  font-weight: 600;
  font-style: normal;
  text-align: left;
  color: ${({ theme }) => theme.fontColor.default};
`;

export const StatusServiceActiveText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.IBM_Regular};
  font-size: ${({ theme }) => theme.fontScale.xs}px;
  line-height: ${({ theme }) => theme.fontScale.md + 4}px;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  color: ${({ theme }) => theme.fontColor.default};
`;

export const IconStatusServiceToggle = styled(FontAwesome)`
  color: ${({ theme }) => theme.brandColors.successDefault};
`;

export const CommunicationInterval = styled.View`
  padding: 0 ${RFValue(40)}px;

  background-color: transparent;
`;

export const TitleCommunicationInterval = styled.Text`
  font-family: ${({ theme }) => theme.fonts.IBM_Regular};
  font-size: ${({ theme }) => theme.fontScale.md}px;
  line-height: ${({ theme }) => theme.fontScale.md + 4}px;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  color: ${({ theme }) => theme.fontColor.default};
`;

export const IntervalTimeBox = styled.TouchableOpacity<TimeProps>`
  flex: 0.23;
  align-items: center;
  justify-content: center;

  height: ${RFValue(80)}px;

  border-radius: ${RFValue(4)}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.brandColors['dark-lighter']};
  background-color: ${({ theme }) => theme.card.background};

  ${({ selected }) =>
    selected &&
    css`
      border-width: 2px;
      border-color: ${({ theme }) => theme.card.backgroundGree};
      background-color: ${({ theme }) => theme.card.backgroundGreeLighter};
    `}
`;

export const IntervalTimeText = styled.Text<TimeProps>`
  font-size: ${({ theme }) => theme.fontScale.xs}px;
  line-height: ${({ theme }) => theme.fontScale.md + 4}px;
  font-weight: 400;
  font-style: normal;
  text-align: left;

  color: ${({ theme }) => theme.brandColors['dark-lighter']};
  font-family: ${({ theme }) => theme.fonts.IBM_Medium};

  ${({ selected }) =>
    selected &&
    css`
      font-family: ${({ theme }) => theme.fonts.IBM_SemiBold};
      color: ${({ theme }) => theme.brandColors.back};
    `};
`;
