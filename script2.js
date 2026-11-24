function validateEditBooking() {
  let fullName = document.getElementById("editFullName").value.trim();
  let phone = document.getElementById("editPhone").value.trim();
  let email = document.getElementById("editEmail").value.trim();
  let flight = document.getElementById("editFlight").value;
  let date = document.getElementById("editDate").value;
  let seat = document.getElementById("editSeat").value.trim();
  let status = document.getElementById("editStatus").value;
  let error = document.getElementById("editError");

  error.textContent = "";

  if (
    fullName === "" ||
    phone === "" ||
    email === "" ||
    flight === "" ||
    date === "" ||
    seat === "" ||
    status === ""
  ) {
    error.textContent = "Please fill up all information.";
    return false;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    error.textContent = "Please enter a valid email address.";
    return false;
  }

  alert("Booking updated successfully!");
  return true;
}
