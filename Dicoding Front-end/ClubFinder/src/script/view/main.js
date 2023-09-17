const main = function () {
  const searchElement = document.querySelector("#searchElement");
  const buttonSearchElement = document.querySelector("#searchButtonElement");
  const clubListElement = document.querySelector("#clubList");

  // cara callback dengan menggunakan oop prototype
  // const onButtonSearchClicked = function () {
  //   const dataSource = new DataSource(renderResult, fallbackResult);
  //   dataSource.searchClub(searchElement.value);
  // };

  // cara constructor dengan promise
  // const onButtonSearchClicked = function () {
  //   DataSource.searchClub(searchElement.value)
  //     .then(renderResult)
  //     .catch(fallbackResult);
  // };

  // cara async await
  const onButtonSearchClicked = async function () {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = function (results) {
    clubListElement.innerHTML = "";
    results.forEach(function (club) {
      const { name: names, fanArt: fanArts, description: descriptions } = club;
      const name = names;
      const fanArt = fanArts;
      const description = descriptions;

      const clubElement = document.createElement("div");
      clubElement.setAttribute("class", "club");

      clubElement.innerHTML = `<img class="fan-art-club" src="${fanArt}" alt="Fan Art">
    <div class="club-info">
    <h2>${name}</h2>
    <p>${description}</p>
  </div>`;
      clubListElement.appendChild(clubElement);
    });
  };

  const fallbackResult = function (message) {
    clubListElement.innerHTML = "";
    clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};
