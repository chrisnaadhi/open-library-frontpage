// Mobile Menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
  document.addEventListener('mouseup', (e) => {
    if (e.target != navbarMenu && e.target.parentNode != navbarMenu) {
      navbarMenu.classList.remove('is-active');
  }
})
})

// Search Box
const searchBox = document.querySelector('#searchText');
const searchIcon = document.querySelector('#searchIcon');

const searchClick = (e) => {
  let value = searchBox.value;
  if (value === "") {
    alert("Kata Pencarian tidak boleh Kosong!")
  } else {
    alert(`${value} sedang dicari..`);
  }
  
}

searchBox.addEventListener("keypress", (e) => {
  let value = searchBox.value;
  if (e.keyCode === 13) {
    e.preventDefault();
    alert(`${value} sedang dicari..`)
  }
})

// Modal Advanced Search
const advSearch = document.querySelector('#advancedSearch');
const modalClose = document.querySelector('.modal-close');
const advSearchModal = document.querySelector('#advSearch');

advSearch.addEventListener("click", () => {
  advSearchModal.classList.add('is-active');
})

const closeModalAdvSearch = () => {
  advSearchModal.classList.remove('is-active')
}

// Modal Login
const modalLogin = document.querySelector('#modalLogin');
const loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener("click", () => {
  modalLogin.classList.add('is-active');
})

const closeModalLogin = () => {
  modalLogin.classList.remove('is-active');
}

// Tabs

const tabs = document.querySelectorAll('.tabs li');
const tabContents = document.querySelectorAll('#tab-contents > section')
console.log(tabContents)

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('is-active'));
    tab.classList.add('is-active');

    const target = tab.dataset.target;
    // console.log(target);
    tabContents.forEach(content => {
      if (content.getAttribute('id') === target) {
        content.classList.remove('is-hidden');
      } else {
        content.classList.add('is-hidden');
      }
    })
  })
})

// Time, Date and Year
const yearEl = document.querySelector('#year');
const dateEl = document.querySelector('#tanggal');
const hourEl = document.querySelector('#jam');

const date = new Date();
const hari = date.toLocaleString('id-id', {weekday: 'long'})
const tanggal = date.getDate();
const bulan = date.toLocaleString('id-id', {month: 'long'});
const thisYear = new Date().getFullYear();


const jamSekarang = () => {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = cekJam(m);
  s = cekJam(s);
  hourEl.innerHTML = `${h}:${m}:${s} WIB`;
  setTimeout(jamSekarang, 1000);
}

const cekJam = (i) => {
  if (i < 10) {
    i = "0" + i
  };
  return i
}

yearEl.innerHTML = thisYear;
dateEl.innerHTML = `${hari}, ${tanggal} ${bulan} ${thisYear}`;