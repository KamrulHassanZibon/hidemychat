let blurredElement;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'blurDiv') {
    blurredElement = document.querySelector(request.selector);
    blurredElement.style.filter = 'blur(5px)';
    blurredElement.addEventListener('mouseover', handleMouseOver);
    blurredElement.addEventListener('mouseout', handleMouseOut);
  }
});

function handleMouseOver() {
  blurredElement.style.filter = '';
}

function handleMouseOut() {
  blurredElement.style.filter = 'blur(5px)';
}
