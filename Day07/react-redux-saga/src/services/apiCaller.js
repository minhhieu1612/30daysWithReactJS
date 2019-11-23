import axios from 'axios'
/** Import From File */

export default function APIcaller(url, method = 'GET', header = {}, body = null) {
  /** Header Req */
  const headers = {
    'content-type': 'application/json charset=utf-8',
    ...header,
  }

  return axios({
    method,
    headers,
    url: url,
    data: body,
  })
}
