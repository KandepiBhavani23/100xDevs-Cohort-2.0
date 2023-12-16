import {
	arch,
	cpus,
	freemem,
	homedir,
	hostname,
	platform,
	tmpdir,
	type,
	userInfo,
	uptime,
} from "os";

//info about current user
console.log(userInfo());

// Use to get the CPU Architecture of the System
console.log(arch()); //x64

//get information about each logical CPU core of the computer
console.log(cpus());

//Used to get the amount of free system memory
const freeMemory = freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024}`); // KB / MB / GB

//used to get host name of the operating system
console.log(hostname());

//Used to get path of the home directory for the current user
console.log(homedir());

//Used to get the Operating system platform
console.log(platform());

// Used to get path of default directory for temporary files
console.log(tmpdir());

// Used to get Operating system name
console.log(type());

console.log(uptime());
