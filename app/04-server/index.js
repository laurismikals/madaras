import express from 'express'
import cookieParser from 'cookie-parser'
import React from 'react'
import Layout from '../02-shared/04-layout/layout'
import {StaticRouter as Router} from 'react-router'

import render from './render'
import util from 'util'
import getLanguage from '../01-helpers/get-language'

const languages = ['lv-LV', 'en-GB', 'en-US']

const app = express()
app.use('/static', express.static('./static'))
app.use(cookieParser())

app.get('*', (req, res) => {
  let lang = getLanguage(req, languages)

  res.cookie('language', lang, {
    maxAge: 1000 * 60 * 60 * 24 * 7, // would expire after 15 minutes
    httpOnly: false, // The cookie only accessible by the web server
    signed: false // Indicates if the cookie should be signed
  })

  const splitUrl = req.url.split('/').filter((val) => {
    return val !== ''
  })
  if(splitUrl.length < 2){
    res.redirect(`/${lang}/home`)
  }else{
    res.status(200).send(
      render(
        <Router context={{}} location={req.url}>
          <Layout lang={lang}/>
        </Router>
      )
    )
  }
})

app.listen(3000, () => console.log('Madaras listening on port 3000'))
