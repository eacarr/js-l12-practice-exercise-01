const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");
const getData = async (numUsers) => {
  const usersRequest = await fetch(
    `https://randomuser.me/api?results=${numUsers}`
  );
  const data = await usersRequest.json();
  //   console.log(usersRequest);
  //   console.log(data);
  const userResults = data.results;
  //   console.log(userResults);
  displayUsers(userResults);
};

getData(1);
//user items to display

const displayUsers = (userResults) => {
  randomFolks.innerHTML = "";
  for (let user of userResults) {
    const country = user.location.country;
    const name = user.name.first;
    const imageUrl = user.picture.medium;
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
    `;
    randomFolks.append(userDiv);
  }
  //   console.log(displayUsers);
};

// remove hide from num-users class

selectUserNumber.addEventListener("change", (e) => {
  const numUsers = e.target.value;
  getData(numUsers);
});
