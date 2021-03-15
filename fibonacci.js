let fibonacci = (function() {

  let map = new Map();

  let fibonacci = function(n) {
    if(n==0) return 0;
    else if(n==1) return 1;
    else return calculate(n-1)+calculate(n-2);
  }

  let calculate = function(n) {
    if(!(n>=0)) throw new Error("Invalid Input: Not a value greater or equals 0.");
    if(!map.has(n)) map.set(n, fibonacci(n));
    return map.get(n);
  }

  return calculate;

})();

module.exports = fibonacci;
