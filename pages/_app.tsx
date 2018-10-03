import * as React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

import Layout from '../components/Layout';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>Chuck Norris</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
