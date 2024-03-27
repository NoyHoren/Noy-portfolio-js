// array mapping:
[1, 2, 3, 4]
  .filter(a => a > 1)
  .map(a => {
    const div = document.createElement('div');
    div.innerText = `${a}`;
    return div;
  })
  .forEach(div => document.body.append(div));