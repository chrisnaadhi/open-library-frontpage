// Mobile Menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
})

// window.addEventListener('mouseup', (e) => {
//   if (e.target != navbarMenu && e.target.parentNode != navbarMenu) {
//     navbarMenu.classList.remove('is-active');
//   }
// })

// Search Box
const searchBox = document.querySelector('#searchText');
const searchIcon = document.querySelector('#searchIcon');
const advSearch = document.querySelector('#advancedSearch');

const searchClick = (e) => {
  let value = searchBox.value;
  if (value.length === 0) {
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

// Modal
const modalBg = document.querySelector('.modal-background');
const modalClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');

advSearch.addEventListener("click", () => {
  modal.classList.add('is-active');
})

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('is-active');
})

const closeModal = () => {
  modal.classList.remove('is-active')
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
dateEl.innerHTML = `${tanggal} ${bulan} ${thisYear}`;