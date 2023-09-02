const jokes = document.querySelector(".jokes");
const jokesBtn = document.querySelector(".jokesBtn");

const fetchData = async () => {
  const options = {
    headers: {
      Accept: "application/json",
    },
  };
  await fetch("https://icanhazdadjoke.com", options)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      jokes.innerHTML = data.joke;
    });
};
fetchData();
jokesBtn.addEventListener("click", fetchData);
