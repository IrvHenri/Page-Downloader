const request = require("request");
let fs = require("fs");
var myArgs = process.argv.slice(2);
let domain = myArgs[0];
let pathName = `${myArgs[1]}`;
request(`${domain}`, (error, response, body) => {
  if (error) console.log(error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(`${pathName}`, `${body}`, function (err) {
    if (err) throw err;
    let fileName = `${myArgs[1]}`.slice(2);
    let fileSize = fs.statSync(fileName).size;
    console.log(`Downloaded and saved ${fileSize} bytes to ${fileName}.`);
  });
});
