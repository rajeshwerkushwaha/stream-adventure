/**
* Created with stream-adventure.
* User: rajeshwerkushwaha
* Date: 2014-07-03
* Time: 07:04 AM
* To change this template use Tools | Templates.
*/
var fs = require('fs');
fs.createReadStream(process.argv[2]).pipe(process.stdout);