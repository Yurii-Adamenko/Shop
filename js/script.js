var cartCounter = 0;
var cartPrice = 0;
var cartCounterLabel = document.querySelector('.btn-shop-counter');
var btnItems = document.querySelector('.main-content');

var fnPriceCounter = function (e) {
  let tempPrice = e.previousElementSibling.previousElementSibling.innerHTML;
  cartPrice += +tempPrice.replace(/^\$(\d+)\s\D+(\d+).*$/g, '$1.$2');
  btnItems.removeEventListener('click', onBtnClick);
  console.log(tempPrice);
  return 'Added ' + cartPrice.toFixed(2) + '$';
}

var fnRestore = function (elem, restore) {
  elem.innerHTML = restore;
  elem.disabled = false;
  btnItems.addEventListener('click', onBtnClick);
}

var onBtnClick = function (e) {
  var target = e.target;

  if (target.classList.contains('main-content-item__text__btn-add')) {

    cartCounterLabel.innerHTML = ++cartCounter;

    if (cartCounter === 1) {
      cartCounterLabel.style.display = 'block'
    }

    target.disabled = true;

    let tempButton = target;
    let restoreHTML = target.innerHTML;

    target.innerHTML = fnPriceCounter(target);

    setTimeout(fnRestore, 2000, tempButton, restoreHTML);
  }
};

btnItems.addEventListener('click', onBtnClick);