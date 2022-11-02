import type { AppProps } from 'next/app';
import '../../local/packages/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
import { QueryClientProviderWrapper } from '../providers/QCProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="sm"
    >
      <QueryClientProviderWrapper>
        <Component {...pageProps} />;
      </QueryClientProviderWrapper>
    </ThemeProvider>
  );
};

export default App;
