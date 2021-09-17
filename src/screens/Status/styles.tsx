import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type PackageProps = {
  id: string;
  package: string;
  status: 'Sincronizado' | 'Pendente';
  time: string;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.card.background};
`;

export const ListPackage = styled(
  FlatList as new () => FlatList<PackageProps>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 16, paddingVertical: 32 },
})`
  flex: 1;
  margin: 0px;
  padding: 0px;
  width: 100%;
`;

export const PackageItem = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;

  padding: ${RFValue(20)}px 0;
  margin-bottom: ${RFValue(5)}px;

  border-bottom-width: 0.8px;
  border-bottom-color: ${({ theme }) => theme.brandColors['dark-lighter']};
  border-radius: ${RFValue(4)}px;

  background-color: transparent;
`;

export const PackageName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.IBM_Medium};
  font-size: ${({ theme }) => theme.fontScale.sm}px;
  line-height: ${({ theme }) => theme.fontScale.md}px;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  color: ${({ theme }) => theme.fontColor.default};
`;

export const PackageStatus = styled.Text`
  font-family: ${({ theme }) => theme.fonts.IBM_Medium};
  font-size: ${({ theme }) => theme.fontScale.xs}px;
  line-height: ${({ theme }) => theme.fontScale.md}px;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  color: ${({ theme }) => theme.brandColors['dark-lighter']};

  margin-top: 5px;
`;

export const PackageTime = styled.Text`
  font-family: ${({ theme }) => theme.fonts.IBM_Medium};
  font-size: ${({ theme }) => theme.fontScale.xs}px;
  line-height: ${({ theme }) => theme.fontScale.md}px;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  color: ${({ theme }) => theme.brandColors['dark-lighter']};
`;
