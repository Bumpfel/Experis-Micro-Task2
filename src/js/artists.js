const performers = {
  queen: 'Queen',
  coldplay: 'Coldplay',
  anna: 'Anna Ternheim',
  eminem: 'Eminem',
  antwoord: 'Die Antwoord'
}

const famousLyrics = new Map([
  [performers.queen, 'don\'t stop me now, \'cause I\'m having such a good time, I\'m having a ball!'],
  [performers.coldplay, 'When you try your best but you don\'t succeed. When you get what you want but not what you need'],
  [performers.anna, 'I know a girl laying down, she\'s sleeping weeks at a time and when wakes up she watches TV, counting cracks in the ceiling'],
  [performers.eminem, 'There\'s vomit on his sweater already, mom\'s spaghetti'],
  [performers.antwoord, 'don\'t worry \'bout it just blow a kiss to me. I like danger, romance and mystery...']
])

export const artists = []
artists.push(
  new Artist(performers.queen, 'UK', 'Rock'),
  new Artist(performers.coldplay, 'UK', 'Rock'),
  new Artist(performers.anna, 'Sweden', 'Pop/Folk'),
  new Artist(performers.eminem, 'USA', 'Rap/Hip hop'),
  new Artist(performers.antwoord, 'South Africa', 'Electronic Hip-hop')
)

function Artist(name, country, genre) {
  this.name = name
  this.country = country
  this.genre = genre

  this.perform = () => famousLyrics.get(name)
}
