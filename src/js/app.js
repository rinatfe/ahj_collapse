const button = document.querySelector('.button');

button.addEventListener('click', toggleCollapse); // eslint-disable-line

const target = document.querySelector('.target');
const content = document.querySelector('.content');
let isOpen = isOpenCollapse(); // eslint-disable-line

function toggleCollapse() {
  isOpen = isOpenCollapse(); // eslint-disable-line

  if (!isOpen) {
    target.style.height = `${content.offsetHeight}px`;
  }

  target.classList.add('collapsing');
  target.classList.remove('collapse', 'show');

  if (isOpen) {
    target.style.height = `${content.offsetHeight}px`;
  } else {
  	setTimeout(() => {// eslint-disable-line
    	target.style.height = ''; // eslint-disable-line
    });
  }

  setTimeout(transitionEnd, 350);  // eslint-disable-line
}

function transitionEnd() {
  target.classList.remove('collapsing');
  target.classList.add('collapse');

  if (isOpen) {
    target.classList.add('show');
  }
}

function isOpenCollapse() {
  return target.classList.contains('collapse') && !target.classList.contains('show');
}
