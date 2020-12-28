import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css';

type Props = {
  Component?: any;
  pageProps?: any;
};

function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}

export default MyApp;
