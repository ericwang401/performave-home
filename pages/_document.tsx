import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='theme-color' content='#0ea5e9' />
        <meta content="Performave" name="title" />
        <meta content="coding, projects, open-source, web, github, react, modern, designers, developers, community, tools" name="keywords" />
        <meta content="We are a community of developers and designers passionate in providing high quality tools to everyone using cutting-edge technology" name="description" />
        <meta content="index, follow" name="robots" />

        <meta content="Performave" property="og:title" key="title" />
        <meta content="We are a community of developers and designers passionate in providing high quality tools to everyone using cutting-edge technology" property="og:description" />
        <meta content="https://performave.com/" property="og:url" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
