#!/usr/bin/env node


const commander = require("commander");
commander.usage('<author>');
commander.on('--help', function() {
 console.log(' Examples:------');
 console.log(' $ helper hello ipluser');
 console.log('end---------');
});
 
commander.parse(process.argv);
(commander.args.length < 1) && commander.help();
const author = commander.args[0];
console.log('hello', author);