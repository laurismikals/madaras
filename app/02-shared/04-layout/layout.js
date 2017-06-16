import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import HeaderMain from '../03-organisms/header-main/header-main'
import FooterMain from '../03-organisms/footer-main/footer-main'
import home from '../05-pages/home'
import lake from '../05-pages/lake'
import services from '../05-pages/services'
import contacts from '../05-pages/contacts'

let data = {
  "home":{
    "heading": {
      "lv":"Sākums",
      "en":"Home"
    }
  },
  "lake": {
    "heading": {
      "lv":"Kāla ezers",
      "en":"Kāla lake"
    },
    "text": "<p>Kāla ezers ar tā piecām salām atrodas Vidzemes augstienē, Vestienas paugurainē. Kāla ezers ( Kālezers, Vesetas ezers) iekļauts Vestienas aizsargājamo ainavu apvidū. Krasta līnija izrobota (Kuilīšu, Gaiļu, Kāla līcis). Tā platība ir 407 ha, vidējais dziļums ir 5,3 metri, bet maksimālais dziļums – 14,8 metri. Gultne smilšaina, oļaina, vietām dūņaina. Krasti stāvi, ezers ļoti ainavisks.</p><p>Ezerā ir 3 salas un vairākas peldošās sala.</p><p>1927. gadā trīs Kāla ezera salās - Tolkas (16,6 ha), Vistu (1,2 ha) un Lielajā Vestienas (10,5 ha) izveidots botāniskais liegums. 75 % teritorijas jaukti platlapju meži, boreālie meži un purvaini meži. Konstatētas sešas īpaši aizsargājamās un retās augu, piecas putnu un astoņas bezmugurkaulnieku sugas.</p><p>Kāla ezera salas kopš 2004. gada ir Natura 2000 teritorija. Ieteicams dabas liegumu vērot no skaistajiem un pauguriem klātajiem Kāla ezera krastiem un vizinoties ar laivu pa ezeru.</p><p>Kāla ezers ir caurplūdes ezers. Ezerā ietek Miltupīte, vairāki strauti un grāvji. Dienvidrietumos iztek Veseta, tās kopgarums ir 56 km. Ezerā ir ūdens līmeņa svārstības (Laiviņš, 1995.).</p> <p>Ezerā konstatētas vairāk kā 10 dažādu sugu zivis: ķīsis, līdaka, asaris, rauda, plaudis, karpa, līnis, plicis, rudulis, vīķe, ausleja, kā arī vēdzele, akmeņgrauzis, sapals, karūsa, zutis, mailīte.</p><img src='//www.ezeri.lv/database/GetImage?id=4686' alt=''>"
  },
  "services": {
    "heading": {
      "lv":"Pakalpojumi",
      "en":"Services"
    },
    "services": [
      {
        "heading": "Makšķerēšana",
        "text": "<p>Laivas makšķerniekiem:</p><table><thead><tr><th>Inventārs/pakalpojumi</th><th>1 stunda</th><th>+1 stunda</th><th>1 diena</th><th>Komplektā ietilpst</th></tr></thead><tbody><tr><td>Laiva 365cm</td><td>5,00</td><td>3,00</td><td>15,00</td><td>2 airi +2 vestes</td></tr><tr><td>Laiva 430cm</td><td>5,00</td><td>3,00</td><td>15,00</td><td>2 airi+3 vestes</td></tr></tbody></table><p>Makšķerēšanai Kālezerā nepieciešama licence un derīga makšķerēšanas karte. Makšķerēšanas licences var iegādāties pie ezera esošajās saimniecībās, kā arī:<br><a href='https://www.epakalpojumi.lv/Services/LOMS/Lake.aspx?id=5134'>https://www.epakalpojumi.lv/Services/LOMS/Lake.aspx?id=5134</a></p>"
      },
      {
        "heading": "Atpūta uz ūdens",
        "text": "<p>Lai baudītu atpūtu, ko sniedz ūdens, saule un vējš, piedāvājam dažādus peldlīdzekļus:</p><table><thead><tr><td>Inventārs/pakalpojumi</td><td>1 stunda</td><td>+1 stunda</td><td>1 diena</td><td>+1 diena</td><td>Komplektā ietilpst</td></tr></thead><tbody><tr><td>SUP dēlis</td><td>7,00</td><td>5,00</td><td>30,00</td><td>25,00</td><td>1 veste+ 1 airis</td></tr><tr><td>Tandēm-kajaks</td><td>7,00</td><td>5,00</td><td>30,00</td><td>25,00</td><td>2 vestes +2 airi</td></tr><tr><td>Laiva 365cm</td><td>5,00</td><td>3,00</td><td>15,00</td><td></td><td>2 airi +2 vestes</td></tr><tr><td>Laiva 430cm</td><td>5,00</td><td>3,00</td><td>15,00</td><td></td><td>2 airi+3 vestes</td></tr><tr><td>Katamarāns</td><td>3,00</td><td>2,00</td><td>10,00</td><td></td><td>2 vestes</td></tr><tr><td>Plosts + motors (celtspēja līdz 10 cilv.)</td><td>20,00</td><td>10,00</td><td>50,00</td><td>30,00</td><td>Grils ar malku</td></tr></tbody></table>"
      },
      {
        "heading": "Naktsmītnes",
        "text": "<table><thead><tr><th>Inventārs/pakalpojumi</th><th>1 diennakts</th><th>Komplektā ietilpst</th></tr></thead><tbody><tr><td>Tel&scaron;u vieta</td><td>5,00</td><td>Elektrības pieslēguma vieta</td></tr><tr><td><p>Ugunskura vieta</p></td><td>5,00</td><td>Malka</td></tr><tr><td>Brīvdienu māja</td><td>150,00</td><td>8 gultasvietas, virtuve, kamīns, du&scaron;a, WC</td></tr><tr><td>papildus gultasvieta</td><td>10,00</td><td></td></tr><tr><td>Kempera pieslēguma vieta</td><td>20,00</td><td></td></tr></tbody></table>"
      }
    ]
  },
  "contacts": {
    "heading": {
      "lv":"Kontakti",
      "en":"Contacts"
    },
    "address": {
      "heading": "Kā mūs atrast",
      "text": "<p>&quot;Madaras&quot;, Vestienas pag., Madonas novads</p>"
    },
    "hosts": {
      "heading": "Saimnieki",
      "hosts": [
        {
          "name": "<strong>Saimnieks:</strong> Andris",
          "email": "andris.spaile@inbox.lv",
          "phone": "+37129180371"
        },
        {
          "name": "<strong>Saimniece:</strong> Ingūna",
          "email": "inguna.spaile@inbox.lv",
          "phone": "+37128815305"
        }
      ]
    },
    "requisites": {
      "heading": "Rekvizīti",
      "text": "<p>z/s Madaras,</br>Reģistrācijas numurs: 45401016688</br>Adrese korespondencei: Oškalna iela 2-7, Ērgļu pagasts,</br>Ērgļu novads, LV4840</p>"
    }
  }
}

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest)
  return (
    React.createElement(component, finalProps)
  )
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route exact {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest)
    }}/>
  )
}

export default class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lang: 'lv'
    }

    this.home = home
    this.lake = lake
    this.services = services
    this.contacts = contacts
  }
  render() {
    const {lang} = this.state

    return (
      <div className="site__layout-wrap">
        <HeaderMain lang={lang} data={data}/>
        <main id="main">
          {Object.keys(data).map((page, i) => {
            return (
              <PropsRoute
                component={this[page]}
                key={i}
                path={page === "home" ? `/:${lang}/` : `/:lang/${page}`}
                data={data[page]}
              />
            )
          })}
        </main>
        <FooterMain/>
      </div>
    )
  }
}