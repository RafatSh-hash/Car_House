setTimeout(function () {
  const progressBar = document.getElementById("progressBar");
  progressBar.classList.add("progress-bar");
}, 1000);

const customersNumber = document.getElementById("satisfied");

const targetCustomerNumber = 95;
let customersInitialNumber = 0;

function updateCustomerNumber() {
  if (customersInitialNumber < targetCustomerNumber) {
    customersInitialNumber++;
    customersNumber.textContent = `${customersInitialNumber}`;
    setTimeout(updateCustomerNumber, 10);
  }
}
updateCustomerNumber();
