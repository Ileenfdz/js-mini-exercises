function digitalRoot(n){
  let result = 0;
  String(n).split('').map(num => {
    result += parseInt(num);
  });
  return result >= 10 ? digitalRoot(result) : result;
}

module.exports = digitalRoot