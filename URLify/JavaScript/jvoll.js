function urlIfy(str) {
  var x = '';
  var y = [];

  if(str.includes(' ')) {
    str = str.split('');
    str.forEach(el => {
      if(el == ' ') {
        el = '%20';
      }
      y.push(el);
      x = y.toString().split(',').join('');
    })
    return x;
  }
  else {
    return false;
  }
}
urlIfy('Hello World ');
