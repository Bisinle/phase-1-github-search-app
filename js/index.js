const userForm = document.querySelector("form");
const userInput = document.querySelector("#text");
const user = document.querySelector("#user");
const repo = document.querySelector("#repo");
user.addEventListener("click", (e) => {
  e.preventDefault();
  FetchUser(userInput.value);
  userInput.value = " ";
});
repo.addEventListener("click", (e) => {
  e.preventDefault();
  FetchRepo(userInput.value);
});
function FetchRepo(inputValue) {
  fetch(`https://api.github.com/users/${inputValue}/repos`, {
    headers: {
      Authorization: `Bearer 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`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const div = document.querySelector(".mainDiv");
      // console.log(date);
      for (const item of data) {
        let date = item.created_at.split("T")[0];

        console.log(item.name);
        const card = document.createElement("div");
        card.innerHTML = `
              <div class="card" style="width: 23rem;">
        <div class="repo-card-body">
         <div> 
         <h5 class="repo-title">${item.name}</h5>
         <p class="repo-description">no description yet</p>
         <p class="repo-date">Joined on: ${date}</p></div>
          </div>
        <a href="https://github.com/Bisinle/${item.name}" class="repo-link">Visit Repository</a>
      </div>
              `;
        div.append(card);
      }
    });
}

function FetchUser(inputValue) {
  fetch(`https://api.github.com/users/${inputValue}`)
    .then((res) => res.json())
    .then((item) => {
      console.log(item);
      const div = document.querySelector(".mainDiv");

      // console.log(date);
      let date = item.created_at.split("T")[0];
      console.log(date);
      const card = document.createElement("div");
      card.innerHTML = `
              <div class="card" style="width: 23rem;">
        <div class="card-body">
          <img class="avatar" src="${item.avatar_url}" alt="">
         <div>
         <h5 class="card-title">${item.login}</h5>
         <p class="card-title">Followers: ${item.followers}</p>
         <p class="card-title">Joined on: ${date}</p></div>
          </div>
        <a href="https:www.github.com/${item.repos_url}" class="card-link">Visit Repository</a>
      </div>
              `;
      div.append(card);
    });
}
// something();

console.log(document.documentElement);

