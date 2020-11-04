import { artists } from './artists.js'

const containet = document.querySelector('#card-container')

const createCard = (artist) => {
  const card = document.createElement('div')
  card.style.minWidth = '180px'
  card.style.maxWidth = '180px'
  card.className = 'card m-3'
  card.innerHTML = `
  <div class="card-body">
    <h5 class="card-title"> ${artist.name}</h5>
    <p class="card-text">
      <strong>Country:</strong> ${artist.country}
    </p>
    <p class="card-text">
      <strong>Genre:</strong> ${artist.genre}
    </p>
    <p class="card-text">
      <strong>Famous lyrics:</strong> <em>"${artist.perform()}"</em>
    </p>
  </div>
  `
  return card
}

const cards = artists.map(artist => {
  return createCard(artist)
})

const randomIndex = Math.floor(Math.random() * artists.length)
const spotlightCard = createCard(artists[randomIndex])
spotlightCard.style.width = '200px'
spotlightCard.classList.add('bg-dark')
spotlightCard.classList.add('text-white')
document.querySelector('#artistSpotlight').appendChild(spotlightCard)

cards.forEach(card => containet.appendChild(card))
