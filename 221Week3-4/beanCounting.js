var countBs = function(str) {
    return str.match(/B/g).length;
};

var countChar = function(str, character) {
    var matchExp = new RegExp(character, 'g');
    return str.match(matchExp).length;
};

//tests
console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4
