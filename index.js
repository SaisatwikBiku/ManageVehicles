// Sample data structure to store vehicles
let vehicles = [];

// Function to add a new vehicle
function addVehicle() {
  const vehicleName = document.getElementById("vehicleName").value;
  const vehicleType = document.getElementById("vehicleType").value;
  const vehicleNum = document.getElementById("vehicleNumber").value;  

  if (vehicleName && vehicleType && vehicleNum) {
    const newVehicle = {
      name: vehicleName,
      type: vehicleType,
      num: vehicleNum
    };

    vehicles.push(newVehicle);
    displayVehicles();
    clearForm();
  }
}

// Function to display vehicles in the list
function displayVehicles() {
  const vehicleList = document.getElementById("vehicleList");
  vehicleList.innerHTML = "";

  vehicles.forEach((vehicle, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${vehicle.name} - ${vehicle.type} - ${vehicle.num}</span>
      <button class="delete-btn" onclick="deleteVehicle(${index})">Delete</button>
    `;
    vehicleList.appendChild(listItem);
  });
}

// Function to delete a vehicle
function deleteVehicle(index) {
  vehicles.splice(index, 1);
  displayVehicles();
}

// Function to clear the form after adding a vehicle
function clearForm() {
  document.getElementById("vehicleName").value = "";
  document.getElementById("vehicleType").value = "";
  document.getElementById("vehicleNumber").value = "";
}

// Function to filter vehicles based on search input
function filterVehicles() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.name.toLowerCase().includes(searchInput) ||
    vehicle.type.toLowerCase().includes(searchInput) ||
    vehicle.num.toLowerCase().includes(searchInput)
  );

  displayFilteredVehicles(filteredVehicles);
}

// Function to display filtered vehicles
function displayFilteredVehicles(filteredVehicles) {
  const vehicleList = document.getElementById("vehicleList");
  vehicleList.innerHTML = "";

  filteredVehicles.forEach((vehicle, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${vehicle.name} - ${vehicle.type} - ${vehicle.num}</span>
      <button class="delete-btn" onclick="deleteVehicle(${index})">Delete</button>
    `;
    vehicleList.appendChild(listItem);
  });
}


// Initial display of vehicles
displayVehicles();
