import 'styles/globals.css';
import 'styles/reset.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;

