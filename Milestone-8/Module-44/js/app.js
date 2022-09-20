const loadflags = () => {
  const url = `https://restcountries.com/v3.1/all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayglags(data));
};

const displayglags = (details) => {
  const countrieshtml = details
    .map((detail) => getcountrydetails(detail))
    .slice(0, 100);
  const divcontainer = document.getElementById("flag-container");
  divcontainer.innerHTML = countrieshtml.join(" ");
};

// option 2
const getcountrydetails = ({ name, continents, flags, area, cca2 }) => {
  return `
    <div class = "country-div">
        <h2>Flags name : ${name.common}</h2>
        <p>Countries : ${continents[0]}</p>
        <p>Areas : ${area}</p>
        <img src='${flags.png}'></img>
        </br>
        <button onclick="showflags('${cca2}')">Click</button>
    </div>
  `;
};

const showflags = (id) => {
  //https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => countrydetails(data));
};

const countrydetails = (details) => {
  const detailsdiv = document.getElementById("details-div");
  detailsdiv.innerHTML = `
    <div>
        <img src='${details[0].flags.png}'></img>
    </div>
  `;
  console.log(details[0]);
};

// option 1
// const getcountrydetails = (country) => {
//   const { name, continents, flags } = country;
//   return `
//     <div class = "country-div">
//         <h2>Flags name is: ${name.common}</h2>
//         <p>Countries Name: ${continents[0]}</p>
//         <img src='${flags.png}'></img>
//     </div>
//   `;
// };

loadflags();
