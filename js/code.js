var siteNameInput = document.getElementById("siteNameInput");
var siteURLInput = document.getElementById("siteURLInput");
var tableBody = document.getElementById("tableBody");
var sites = [];
var submitBtn = document.getElementById("submitBtn");
var tableContent = document.getElementById("tableContent");
var closeBtn = document.getElementById("closeBtn");
var element = document.querySelector(".box-info");
 element.classList.add("d-none");


if (JSON.parse(localStorage.getItem("website"))) {
  var sites = JSON.parse(localStorage.getItem("website"));
}
displaySites();

function addSite() {

  if (validateForm(siteNameInput) && validateForm(siteURLInput)) {
    var site = {
      Name: siteNameInput.value,
      URL: siteURLInput.value,
    };

    sites.push(site);
    console.log(sites);
    // display
    localStorage.setItem("website", JSON.stringify(sites));
    displaySites();
    clearForm();
  } else {
    element.classList.remove("d-none");
  }
}

function displaySites() {
  var bBox = "";
  for (var i = 0; i < sites.length; i++) {
    bBox += `
     <tr class="text-center text-uppeerCase">
              <td>${i + 1}</td>
              <td>${sites[i].Name}</td>
              <td><a href="${sites[i].URL}">${sites[i].URL}</a></a></td>
              <td> <button onclick="deleteRow(${i})" class="px-5 py-1">Delete</button></td>
            </tr>
`;
  }
  tableBody.innerHTML = bBox;
}

function clearForm() {
  siteNameInput.value = "";
  siteURLInput.value = "";
}

function deleteRow(siteIndex) {
  sites.splice(siteIndex, 1);
  localStorage.setItem("website", JSON.stringify(sites));
  displaySites();
}
closeBtn.addEventListener("click", closeError);

function validateForm(input) {
  var regex = {
    siteNameInput: /^[A-Z ][a-z ]{3,25}$/,
    siteURLInput: /^[A-Z]|[a-z]{3,}$/,
  };
  var isValid = regex[input.id].test(input.value);
  console.log(isValid);

  if (isValid) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    console.log(element);
  }
  return isValid;
}

function closeError() {
  element.classList.add("d-none");
}

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closeError();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("box-info")) {
    closeError();
  }
});
