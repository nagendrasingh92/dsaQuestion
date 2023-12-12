/* eslint-disable import/prefer-default-export */
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0059BD',
    },
    secondary: {
      main: '#CDA14B',
    },
    customColor: {
      primarySecond: '#F0EFE9',
      secondarySecond: '#FCF6EA',
      main: '#2B2724',
      greyFirst: '#999999',
      greySecond: '#E2E2E2',
      greyThird: '#FDFDFD',
      otherFirst: '#DE350B',
      otherSecond: '#F4F6FA'
    },
    boxShadow: {
      main: '',
    },
  },
});