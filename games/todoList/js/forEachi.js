['a', 'b', 'c', 'd']
  .forEach((item) => console.log(item));

['a', 'b', 'c', 'd']
  .forEach((item, index) => console.log(index + ")" + item));

['a', 'b', 'c', 'd']
  .forEach((item, i) => {
    document.body.innerHTML +=
      `<div style='background: ${i % 2 == 0 ? 'black' : '#ccc'}'>
                    ${item}
            </div>`;
  });



const elements = ['a', 'b', 'c', 'd'].map((item, i) => {
  const div = document.createElement('div');
  if (item === 'b') {
    div.textContent = `הוספתי פה ספיישל: ${item}`;
    div.classList.add('special');
  } else {
    div.textContent = `סתם טקסט בלי צבע: ${item}`;
  }
  return div;
});

elements.forEach(element => {
  document.body.appendChild(element);
});