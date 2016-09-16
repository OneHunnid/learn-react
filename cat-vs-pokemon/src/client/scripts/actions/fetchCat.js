import Promise from 'bluebird'
import request from 'request-promise'
import faker from 'faker'
import { parseString } from 'xml2js'
import { get } from 'lodash'

export const fetchCat = () => {
  return request({
    method: 'GET',
    url: 'https://thecatapi.com/api/images/get?results_per_page=1&format=xml',
    withCredentials: false
  }).then((raw) => {
    return Promise.fromCallback((cb) => parseString(raw, cb))
  }).then((xml) => {
    return {
      type: 'FETCH_CAT',
      cat: {
        id: get(xml, 'response.data.0.images.0.image.0.id.0'),
        name: faker.name.firstName(),
        url: get(xml, 'response.data.0.images.0.image.0.url.0')
      }
    }
  })
}
