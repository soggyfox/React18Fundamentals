import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
        rel='stylesheet'
        ></link>
        <link rel='stylesheet' href='css/globals.css'></link>
      </Head>
      <body>
        <div className='container'>
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
