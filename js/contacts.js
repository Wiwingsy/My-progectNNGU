//функция для кнопок копирования в буфер обмена
function copyById(containerId) {
    var range_ = document.createRange(); // create new Range object
    range_.selectNode(document.getElementById(containerId)); // set our Range to contain the Node we want to copy from
    window.getSelection().removeAllRanges(); // remove any previous selections
    window.getSelection().addRange(range_); // select
    document.execCommand("copy"); // copy to clipboard
    window.getSelection().removeAllRanges(); // remove selection
}

  // add onClick event handler to your button with additional function() to not invoke copyById immediately:
document.getElementById('copy-button').onclick = function() {
    copyById('to-copy');
}

document.getElementById('copy-button1').onclick = function() {
  copyById('to-copy1');
}

document.getElementById('copy-button2').onclick = function() {
  copyById('to-copy2');
}

//функция для замены текста при нажатии на ссылку
function openbox(id) {
  var all = document.querySelectorAll(".section-writing__row-grid");
  for (var i = 0; i < all.length; i++) {
    if (all[i].id == id) {
      all[i].style.display = (all[i].style.display == 'none')? 'grid' : 'none';
    } else {
      all[i].style.display = 'none';
    }
  }
}


