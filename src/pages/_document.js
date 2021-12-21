import Document, { Html, Head, Main, NextScript } from 'next/document'

class WebDocument extends Document {
  render () {
    return (
      <Html lang="en-US">
        <Head>
          <script
            async
            src="https://analytics.willianrod.com/tracker.js"
            data-ackee-server="https://analytics.willianrod.com"
            data-ackee-domain-id="581e4027-020c-4ce8-a1cd-8f3f8651b9b7"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default WebDocument
