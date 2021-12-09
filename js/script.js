const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

const getData = async (numUsers) => {
  const usersRequest = await fetch(
    `https://randomuser.me/api?results=${numUsers}`
  );
  const data = await usersRequest.json();
  const userResults = data.results;
  console.log(data.results);
  displayUsers(userResults);
};
getData(1);

const displayUsers = (userResults) => {
  randomFolks.textContent = "";
  for (let user of userResults) {
    let country = user.location.country;
    let name = user.name.first;
    let imageUrl = user.picture.medium;
    let phone = user.phone;
    let userDiv = document.createElement("div");
    userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
        <a href="tel:${phone}">${phone}
    `;
    randomFolks.append(userDiv);
  }
};

selectUserNumber.addEventListener("change", (e) => {
  let numUsers = e.target.value;
  getData(numUsers);
});
