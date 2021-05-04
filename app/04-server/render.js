import { renderToString } from 'react-dom/server'
import React from 'react'

import ReactHtmlId from '../01-helpers/react-html-id'

export default (renderMe) => {
  ReactHtmlId.resetUniqueIds()
  return(
    `<!DOCTYPE html>
    <html lang="lv">
      <head>
        <meta charset="UTF-8">
        <title>Madaras</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="format-detection" content="telephone=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
      
        <link href="/static/dist/bundle-base-min.css" type="text/css">
        
        <!--link to the most important font which gets requested as soon as possible. this decreases possibility of flash of unstyled text.-->
        <link rel="preload" href="/static/fonts/subset-Roboto-Light.woff2" as="font" type="font/woff2" crossorigin>
      
        <!--link to most important favicons-->
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png">
        <link rel="manifest" href="/static/favicons/manifest.json">
        <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#505050">
        <meta name="theme-color" content="#505050">
      </head>
        <body>
            <div id="app" class="site">${renderToString(renderMe)}</div>
            <script src="/static/dist/client.js"></script>
        </body>
    </html>`
  )
}
