import acceptLanguage from 'accept-language'

export default (request, langs) => {
  const splitUrl = request.url.split('/').filter((val) => {
    return val !== '';
  })
  let simpleLangs = langs.map((item)=>{
    return item.split('-')[0]
  })
  const urlLang = simpleLangs.includes(splitUrl[0]) ? splitUrl[0] : false

  if(urlLang !== false){
    return urlLang
  }else if(typeof request.cookies.language !== "undefined"){
    return request.cookies.language
  }else{
    acceptLanguage.languages(langs)
    return acceptLanguage.get(request.headers['accept-language']).split('-')[0]
  }
}