const txtInput = document.querySelector('.inputs input');
const checkBtn = document.querySelector('.inputs button');
const infoTxt = document.querySelector('.info-txt');

let filterInput;

checkBtn.addEventListener('click', () => {
  let reveseInput = filterInput.split('').reverse().join(''); // 인풋 리버스 & 한 단어로 join
  infoTxt.style.display = 'block';
  if (filterInput != reveseInput) {
    return (infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`);
  }
  return (infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`);
});

txtInput.addEventListener('keyup', () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, ''); // 공백, 특수문자 제외

  if (filterInput) {
    return checkBtn.classList.add('active');
  }
  infoTxt.style.display = 'none';
  checkBtn.classList.remove('active');
});
