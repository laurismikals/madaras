import {matchPath} from 'react-router'

export default (routes, url) => {
  const splitUrl = url.split('/')
  return routes.reduce((acc, route) => matchPath(splitUrl[splitUrl.length-1], route, {exact: true}) || acc, null)
}
