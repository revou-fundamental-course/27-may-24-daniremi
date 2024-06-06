// toggle class active
const navbarNav = document.querySelector(" .navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik Menghilangkan Nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var message = document.getElementById("message").value;

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML =
      "<h2>Result:</h2><p>Nama: " +
      name +
      "</p><p>Tanggal Lahir: " +
      dob +
      "</p><p>Jenis Kelamin: " +
      gender +
      "</p><p>Pesan: " +
      message +
      "</p>";
    resultDiv.style.display = "block";
  });
