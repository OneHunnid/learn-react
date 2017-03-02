import axios from "axios";
require('es6-promise').polyfill();

export const fetchMessage = () => {
  return {
    type: 'FETCH_MESSAGE'
  }
}
