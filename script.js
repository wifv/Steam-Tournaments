const exampleBlock = `
<div class="tournament" data-id="hello">
  <div class="tournament-team-logo"><img src="./test.png" alt="team-logo"></div>
  <div class="tournament-name">Blitzkrieg</div>
  <div class="tournament-format">Format solo/team</div>
  <div class="tournament-time">Time: 19:00</div>
  <div class="tournament-rules">
    Rules ->
    <div class="tournament-rules-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aspernatur. Porro modi explicabo et non cupiditate illum,
      nam rerum hic esse consequatur? Nobis eligendi modi totam cupiditate quod, consequatur error.
    </div>
  </div>
  <div class="form-open">Register</div>
</div>
`;

const tournaments = document.getElementById("tournaments");
const username_element = document.getElementById("username");
const form = document.getElementById("formContainer");

fetch('https://dummyjson.com/products', {
  method: "GET",
})
  .then(res => res.json())
  .then(json => {
    let tournamentsHTML = '';
    for (let i = 0; i < json.products.length; i++) {
      tournamentsHTML += exampleBlock
        .replace('Blitzkrieg', json.products[i].title)
        .replace('Time: 19:00', `Time: ${json.products[i].price}`)
        .replace('Lorem ipsum dolor sit amet...', json.products[i].description);
    }
    tournaments.innerHTML = tournamentsHTML;

    // Attach event listeners after rendering
    Array.from(tournaments.children).forEach(tournament => {
      tournament.querySelector('.form-open').addEventListener('click', () => {
        form.style.visibility = "visible";
        form.firstElementChild.firstElementChild.firstElementChild.textContent = tournament.children[1].textContent
        console.log('Register button clicked');
        document.body.style.overflow = '';
      });
    });
  });

const tg = window.Telegram.WebApp

let username = "Username"

if (tg) {
  const user = tg.initDataUnsafe.user

  if (user) {
    username = user.first_name || user.id

    if (user.username) {
      username += ` @${user.username}`
      username_element.textContent = username;
    }
  }
}

const loader = document.getElementById('loader')
const success = document.getElementById('success')

document.getElementById('background').addEventListener('click', () => {
  form.style.visibility = 'hidden'
  success.style.visibility = 'hidden'
  document.body.style.overflow = '';
})

document.getElementById('quit-button').addEventListener('click', () => {
  form.style.visibility = 'hidden'
  success.style.visibility = 'hidden'
  document.body.style.overflow = '';
})

form.addEventListener('submit', (e) => {
  e.preventDefault()

  loader.style.visibility = 'visible'

  setTimeout(() => {
    loader.style.visibility = 'hidden'
    success.style.visibility = 'visible'
  }, 1319)
  console.log('gay')
})