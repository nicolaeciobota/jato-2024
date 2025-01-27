"use client";
import { useAuth } from "@clerk/nextjs";

export default function Head() {

  const { isSignedIn } = useAuth();
  return (
    <head lang='en'>
      <title>JATO Virtual Event Platform</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="JATO Annual Meeting" />
      <link rel="icon" href="/images/favicon.ico" />
      <link rel="preconnect" href="https://accounts.jato-live.com/" />
      <link rel="preconnect" href="https://social.jato-live.com/" />
      {
        isSignedIn
          ? <script
            dangerouslySetInnerHTML={{
              __html: `
            (function (w, d, s, o, f, js, fjs) {
              w['circleWidget'] = o;
              w[o] = w[o] || function () {
                (w[o].q = w[o].q || []).push(arguments);
              };
              js = d.createElement(s);
              fjs = d.getElementsByTagName(s)[0];
              js.id = o;
              js.src = f;
              js.async = 1;
              fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'mw', 'https://social.jato-live.com/external/widget.js'));
  
            mw('init', {
              community_public_uid: '02c82c3d',
              brand_color_dark: '#135352',
              brand_color_light: '#135352',
              default_appearance: 'light'
            });
          `,
            }}
          />
          : null
      }
    </head>
  );
}
