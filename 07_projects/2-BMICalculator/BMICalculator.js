const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    weight / ((height * height) / 1000).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
