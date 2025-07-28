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

fetch('https://dummyjson.com/products', {
  method: "GET",
})
  .then(res => res.json())
  .then(json => {
    console.log(json)
    for (let i = 0; i < json.products.length; i++) {
      tournaments.innerHTML += exampleBlock
      tournaments.children[i].children[1].textContent = json.products[i].title
      // tournaments.children[i].children[2].textContent = "solo/team"
      tournaments.children[i].children[3].textContent = "Time: " + json.products[i].price
      tournaments.children[i].children[4].firstElementChild.textContent = json.products[i].description
    }
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
