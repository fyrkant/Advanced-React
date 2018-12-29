import App, {Container} from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import { withData } from '../lib/withData';

class MyApp extends App<any> {
  public static async getInitialProps({ Component, ctx }: any) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  public render () {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);