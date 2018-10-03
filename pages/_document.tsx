import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

// Document component is strongly typed with `@types/next`
export default class MyDocument extends Document {
  render () {
    return (
      <html lang="en">
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="stylesheet" href="/static/css/bulma.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
