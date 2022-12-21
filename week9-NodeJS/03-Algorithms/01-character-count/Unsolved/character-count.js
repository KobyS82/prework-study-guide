// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    const map = {};
    for (let i = 0; i < str.length; ++i) {
      if (str[i] in map)
        map[str[i]]++;
      else
        map[str[i]] = 1;
    }
    return map;
};
