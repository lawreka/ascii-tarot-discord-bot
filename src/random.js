// Get a random number between 1 and deck length *incl. reversed cards in deck*
const max = 156;

export async function getRandomCard(fail = false) {
  const randomUrl = `https://www.random.org/integers/?num=1&min=0&max=${max}&col=1&base=10&format=plain&rnd=new`;
  const pseudoRandom = Math.floor(Math.random() * max);
  if (fail) {
    return pseudoRandom;
  }
  return fetch(randomUrl, {
    headers: {
      'User-Agent': 'ascii-tarot bot (lawr3ka@gmail.com)',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .catch((error) => {
      console.log('Error fetching random number from random.org :(', error);
      return pseudoRandom;
    });
}
