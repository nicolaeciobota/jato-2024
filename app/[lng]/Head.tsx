import Script from 'next/script';
export default function Head() {
  return (
    <head>
      <Script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/2a9ebb39815c7def75cd322d/script.js"
      ></Script>
      <title>JATO Virtual Event Platform</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="JATO Annual Meeting" />
      <link rel="icon" href="/images/favicon.ico" />
    </head>
  );
}
