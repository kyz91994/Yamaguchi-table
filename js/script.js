const buttonUp = document.getElementById('btnUp')
const buttonDown = document.getElementById('btnDown')
const table = document.querySelector('.table__desk-img')

buttonUp.addEventListener('click', () => {
  table.classList.add('table_selected-up')
})

buttonDown.addEventListener('click', () => {
  table.classList.remove('table_selected-up')
})
