import 'regenerator-runtime'

import ApiManager from './js/ApiManager.class'

const main = async () => {
  const api = new ApiManager()

  const fact = await api.getMathFact()

  console.log(fact)
}

main()
