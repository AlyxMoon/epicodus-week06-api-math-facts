export default class ApiManager {
  getMathFact (number = 'random') {
    const url = `http://numbersapi.com/${number}/math`
    return this.getApiData(url)
  }

  getApiData (url) {
    return fetch(url).then(response => response.text())
  }
}
