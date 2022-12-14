import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <body className="font-poppins dark:bg-gray-900 dark:text-white">
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}