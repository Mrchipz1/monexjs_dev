'use strict'
const fs = require('fs');
const { exec } = require('child_process');
function startmongo() {
	if (exec(`cd / &&  Applications/monexjs/mongodb/bin/mongod`, (err, stdout, stderr) => {
		fs.appendFileSync('/Applications/monexjs/logs/mongolog.mnex', stdout);
		fs.appendFileSync('/Applications/monexjs/logs/mongolog.mnex', err);
		fs.appendFileSync('/Applications/monexjs/logs/mongolog.mnex', stderr);
	})) { 
		console.log("startedrunning");
		return;
	}else{
		console.log("process is null");
	}
}

startmongo(); 
