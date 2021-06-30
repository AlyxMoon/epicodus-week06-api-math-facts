import 'regenerator-runtime'
import '@/styles/main.css'

import ApiManager from './js/ApiManager.class'

const api = new ApiManager()

const handleButtonClick = async (event) => {
  const number = document.querySelector('input').value
  const elOutput = document.querySelector('.output')

  const { action } = event.currentTarget.dataset

  console.log('huh', action, number)

  elOutput.innerText = action === 'learn' && !number
    ? 'You need to provide something to learn about!'
    : await api.getMathFact(action === 'learn' ? number : 'random')
}

for (const button of document.querySelectorAll('button')) {
  button.addEventListener('click', handleButtonClick)
}
