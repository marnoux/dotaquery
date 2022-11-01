import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
import { QueryClientProviderWrapper } from '../providers/QCProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <QueryClientProviderWrapper>
        <Component {...pageProps} />;
      </QueryClientProviderWrapper>
    </ThemeProvider>
  );
};

export default App;
