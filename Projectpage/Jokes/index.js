// {
//     "error": false,
//     "category": "Pun",
//     "type": "single",
//     "joke": "How do you make holy water? You boil the hell out of it.",
//     "flags": {
//         "nsfw": false,
//         "religious": true,
//         "political": false,
//         "racist": false,
//         "sexist": false,
//         "explicit": false
//     },
//     "id": 202,
//     "safe": false,
//     "lang": "en"
// }

function getJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //   console.log(data.flags);

      if (data.type === "single") {
        document.getElementById("Categories").textContent = data.category;
        document.getElementById("joke").textContent = data.joke;
        let flag = "";
        for (const [key, value] of Object.entries(data.flags)) {
          let values = value ? "Yes" : "No";
          console.log(`${key}: ${values}`);
          flag += `  <p>${key} <span>${values}</span></p>`;
        }
        document.getElementById("flag").innerHTML = flag;
      }
      if (data.type === "twopart") {
        document.getElementById("Categories").textContent = data.setup;
        document.getElementById("joke").textContent = data.delivery;
        let flag = "";

        for (const [key, value] of Object.entries(data.flags)) {
          console.log(`${key}: ${value}`);
          let values = value ? "Yes" : "No";

          flag += `  <p>${key} <span>${values}</span></p>`;
        }
        document.getElementById("flag").innerHTML = flag;
      }
    });
}

getJoke();
document.getElementById("btn").addEventListener("click", getJoke);

// --------tqo part joke-------
// {
//     "error": false,
//     "category": "Dark",
//     "type": "twopart",
//     "setup": "Say what you want about pedophiles...",
//     "delivery": "But at least they drive slowly through the school zones.",
//     "flags": {
//         "nsfw": true,
//         "religious": false,
//         "political": false,
//         "racist": false,
//         "sexist": false,
//         "explicit": true
//     },
//     "id": 161,
//     "safe": false,
//     "lang": "en"
// }
