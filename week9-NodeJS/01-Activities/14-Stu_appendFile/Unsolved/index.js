// TODO: What are we importing?
// imports file system
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// takes the 3 arguments. log.txt is the path and the process.argv is the data (placeholder of the data)
//Displays  data on a new line in the path
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // checks to see if err is a truthy value, if yes: runs left side, if no: runs right
  err ? console.error(err) : console.log('Commit logged!')
);
