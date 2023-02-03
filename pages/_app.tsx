import '../styles/globals.css'
import '../styles/style.css'

import type { AppProps } from 'next/app'
import Script from "next/script";
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Boostrap css */}
        <link rel="stylesheet" href="/boostrap/css/bootstrap.css"/>

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* AOS Animation */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />

        
      </Head>

      {/* Boostrap JS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
        integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"
        integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK"
        crossOrigin="anonymous"
      />

      {/* <Script src="/styles/js/script.js" /> */}

      {/* <Script src="https://unpkg.com/mqtt/dist/mqtt.min.js" />  */}
      {/* <Script src="/boostrap/js/jquery-3.6.0.js" />  */}
      {/* <Script src="/boostrap/js/bootstrap.min.js" />  */}

      {/* Rechart */}
      <script src="https://unpkg.com/react/umd/react.production.min.js"/>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"/>
      <script src="https://unpkg.com/prop-types/prop-types.min.js"/>
      <script src="https://unpkg.com/recharts/umd/Recharts.js"/>

      {/* <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"/> */}

      <Component {...pageProps} />

    </>
  );
}
