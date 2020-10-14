
const axios = require('axios');

const API_KEY = 'SS8PTIAGWARVF8F524KWSG7D1NY5IYGY4A'

export function getTransactions(address, page = 1) {
  const offset = 500
  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=999999999999&page=${page}&offset=${offset}&apikey=${API_KEY}`
  return axios.get(url).then(response => response.data.result)
}

export function getEtherUSD() {
  const url = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_KEY}`
  return axios.get(url).then(response => response.data.result)
}

export function getCurrentGasWei() {
  const url =`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${API_KEY}`
  return axios.get(url).then(response => response.data.result)
}