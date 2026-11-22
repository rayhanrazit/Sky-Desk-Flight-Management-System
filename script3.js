function validateEditFlight() {
  let flightNumber = document.getElementById("flightNumber").value.trim();
  let aircraft = document.getElementById("aircraft").value.trim();
  let fromAirport = document.getElementById("fromAirport").value.trim();
  let toAirport = document.getElementById("toAirport").value.trim();
  let departureTime = document.getElementById("departureTime").value;
  let arrivalTime = document.getElementById("arrivalTime").value;
  let totalSeats = document.getElementById("totalSeats").value.trim();
  let baseFare = document.getElementById("baseFare").value.trim();
  let flightStatus = document.getElementById("flightStatus").value;
  let error = document.getElementById("editFlightError");

  error.textContent = "";

  if (
    flightNumber === "" ||
    aircraft === "" ||
    fromAirport === "" ||
    toAirport === "" ||
    departureTime === "" ||
    arrivalTime === "" ||
    totalSeats === "" ||
    baseFare === "" ||
    flightStatus === ""
  ) {
    error.textContent = "Please fill up all information.";
    return false;
  }

  alert("Flight details updated successfully!");
  return true;
}
