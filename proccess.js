
var proccess = (json, callback) => {
  // var json = JSON.parse(string);
  var results = Object.keys(json).join(',').slice(0, -9) + '\n';
  
  var recursion = obj => {
    var person = Object.values(obj);
    var child = person.pop();
    results += person.join(',') + '\n';
    if (child.length > 0) {
      child.forEach(recursion);
    }
  };
  recursion(json);
  callback(results);
};


module.exports = proccess;