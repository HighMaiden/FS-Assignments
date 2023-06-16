const cardDiv = document.getElementById("card");
const countrySelect = document.getElementById("countryName");
let countryNames = "";

const country = async () => {
  const URL = ` https://restcountries.com/v3.1/all`;
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("There is an Error.");
    }
    const data = await response.json();
    renderCountries(data);
    renderDiv(data);
    // console.log(data);
  } catch (error) {
    renderError(error);
  }
};
country();
window.addEventListener("load", () => {});

const renderError = (error) => {
  console.log(error);
};

const renderCountries = (data) => {
  countryNames = data;
  console.log(countryNames);
  countryNames.forEach((item) => {
    // const {name,flags}=item

    countrySelect.innerHTML += `
    <option value="${item.name.common}">${item.name.common}</option>`;
  });
};

countrySelect.addEventListener("change", () => {
  countryDiv(countrySelect.value);
});

const countryDiv = async (countryName) => {
  const res = await fetch(
    ` https://restcountries.com/v3.1/name/${countryName}`
  );
  const data = await res.json();

  const {
    name: { common },
    flags: { png },
    capital,region, languages,currencies,population,borders,maps
  } = data[0];
  cardDiv.innerHTML = `

    <img src="${png}" class="card-img-top" alt="...">
    <div class="card-body">
        <h4 class="card-title">${common}</h4>
       
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${region}</li>
        <li class="list-group-item">${capital}</li>
        <li class="list-group-item">${Object.values(languages)}</li>
        <li class="list-group-item">${Object.values(currencies)[0].name},${Object.values(currencies)[0].symbol}</li>
        <li class="list-group-item">${population}</li>
        <li class="list-group-item">${Object.values(borders)}</li>
        <li class="list-group-item"><a href="${maps.googleMaps}">GoogleMap</a></li>
    </ul>
    `;
};
