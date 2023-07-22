// Toggle class active
// ketika hamburger menu di klik
document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan referensi ke elemen yang ingin diubah
  const navbarNav = document.querySelector(".navbar-nav");

  // Menambahkan event listener klik menggunakan arrow function
  document.querySelector("#hamburger-menu").onclick = () => {
    // Toggle kelas "active" secara manual dalam arrow function
    if (navbarNav.classList.contains("active")) {
      navbarNav.classList.remove("active");
    } else {
      navbarNav.classList.add("active");
    }
  };
});

// klik diluar sidebar untuk menghilangkan nav

document.addEventListener("click", function (e) {
  const hamburger = document.querySelector("#hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav");

  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
