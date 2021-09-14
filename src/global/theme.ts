const brandColors = {
  primary: '#010062',
  secondary: '#1D1B7E',
  successDefault: '#56B936',
  successLighter: '#AEDFA6',
  textPrimary: '#CAC9FB',
  text: '#37403B',
  white: '#ffffff',
  back: 'rgba(0, 0, 0, 1)',
  'dark-dark': '#37403B',
};

const gridScale = {
  total: 100,
  '1/4': 33.33,
  xs: 16,
  md: 20,
  lg: 24,
  xl: 28,
  xxl: 32,
  xxxl: 36,
  display: 40,
};

const fonts = {
  IBM_Regular: 'IBMPlexSans_400Regular',
  IBM_Medium: 'IBMPlexSans_500Medium',
  IBM_SemiBold: 'IBMPlexSans_600SemiBold',
  IBM_Bold: 'IBMPlexSans_700Bold',
};

const fontScale = {
  tagline: 10,
  caption: 11,
  xxxs: 12,
  xxs: 14,
  xs: 16,
  sm: 18,
  md: 20,
  lg: 24,
  xl: 28,
  xxl: 32,
  xxxl: 36,
  display: 40,
};

export const theme = {
  screen: {
    background: brandColors.white,
    paddingSmall: gridScale.xs,
    paddingDefault: gridScale.md,
    paddingLarge: gridScale.lg,
  },
  statusBar: {
    backgroundWhite: brandColors.white,
    backgroundDefault: brandColors.primary,
  },
  header: {
    backgroundDefault: brandColors.secondary,
  },
  card: {
    background: brandColors.white,
    backgroundGree: brandColors.successDefault,
    paddingSmall: gridScale.xs,
    paddingDefault: gridScale.md,
    paddingLarge: gridScale.lg,
  },
  fontColor: {
    default: brandColors.text,
    title: brandColors.textPrimary,
    titleSecondary: brandColors.white,
  },
  fonts,
  fontScale,
};
