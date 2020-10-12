module.exports = function toReadable (number) {

  let ones = '';
  let tens = '';
  let hundreds = '';
  let result ='';
 
  switch (true) {
      case /[^1]?1$/g.test(number):
          ones = 'one';
      break;
      case /[^1]?2$/.test(number):
          ones = 'two';
      break;
      case /[^1]?3$/.test(number):
          ones = 'three';
      break;
      case /[^1]?4$/.test(number):
          ones = 'four';
      break;
      case /[^1]?5$/.test(number):
          ones = 'five';
      break;
      case /[^1]?6$/.test(number):
          ones = 'six';
      break;
      case /[^1]?7$/.test(number):
          ones = 'seven';
      break;
      case /[^1]?8$/.test(number):
          ones = 'eight';
      break;
      case /[^1]?9$/g.test(number):
          ones = 'nine';
      break;
      default:
          ones = '';
      break;
  }
  switch (true) {
    case /^[1][0-9]{2}$/g.test(number):
        hundreds = 'one hundred';
    break;
    case /^[2][0-9]{2}$/g.test(number):
        hundreds = 'two hundred';
    break;
    case /^[3][0-9]{2}$/g.test(number):
        hundreds = 'three hundred';
    break;
    case /^[4][0-9]{2}$/g.test(number):
        hundreds = 'four hundred';
    break;
    case /^[5][0-9]{2}$/g.test(number):
        hundreds = 'five hundred';
    break;
    case /^[6][0-9]{2}$/g.test(number):
        hundreds = 'six hundred';
    break;
    case /^[7][0-9]{2}$/g.test(number):
        hundreds = 'seven hundred';
    break;
    case /^[8][0-9]{2}$/g.test(number):
        hundreds = 'eight hundred';
    break;
    case /^[9][0-9]{2}$/g.test(number):
        hundreds = 'nine hundred';
    break;
    default:
        hundreds = '';
    break;
}
switch (true){
    case /11$/g.test(number):
        tens = 'eleven';
    break;
    case /12$/g.test(number):
        tens = 'twelve';
    break;
    case /13$/g.test(number):
        tens = 'thirteen';
    break;
    case /14$/g.test(number):
        tens = 'fourteen';
    break;
    case /15$/g.test(number):
        tens = 'fifteen';
    break;
    case /16$/g.test(number):
        tens = 'sixteen';
    break;
    case /17$/g.test(number):
        tens = 'seventeen';
    break;
    case /18$/g.test(number):
        tens = 'eighteen';
    break;
    case /19$/g.test(number):
        tens = 'nineteen';
    break;
}
  switch (true) {
    case /[1][0]{1}$/g.test(number):
        tens = 'ten';
    break;
    case /[2][0-9]{1}$/g.test(number):
        tens = 'twenty';
    break;
    case /[3][0-9]{1}$/g.test(number):
        tens = 'thirty';
    break;
    case /[4][0-9]{1}$/g.test(number):
        tens = 'forty';
    break;
    case /[5][0-9]{1}$/g.test(number):
        tens = 'fifty';
    break;
    case /[6][0-9]{1}$/g.test(number):
        tens = 'sixty';
    break;
    case /[7][0-9]{1}$/g.test(number):
        tens = 'seventy';
    break;
    case /[8][0-9]{1}$/g.test(number):
        tens = 'eighty';
    break;
    case /[9][0-9]{1}$/g.test(number):
        tens = 'ninety';
    break;
  }

  if (number >= 100) {
    if (number % 100 == 0) {
            result = `${hundreds}`;
          } else if ((number % 10 == 0 && number % 100 !== 0) || /1[1-9]$/g.test(number)) {
            result = `${hundreds} ${tens}`;
          } else  if (/[0][0-9]{1}$/g.test(number)) {
            result = `${hundreds} ${ones}`;
          } else {
              result = `${hundreds} ${tens} ${ones}`;  
          }  
    } else if (number % 10 == 0 || /1[1-9]$/g.test(number)) {
        result = `${tens}`;
    } else if (number < 10) {
        result = ones;
    } else{
        result = `${tens} ${ones}`;
    }
  return result || 'zero';
}

