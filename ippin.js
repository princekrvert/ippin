#!/data/data/com.termux/files/usr/bin/node
//Author prince kumar Date 29 sep 2021....
//#Import all modules...
const chalk = require("chalk")
const axios = require("axios")
//Make a function For bamner....
function banner(){
	console.clear()
	console.log(chalk.red(`
 _   ___   ___   _   _     
| | | |_) | |_) | | | |\\ | 
|_| |_|   |_|   |_| |_| \\| 
`));
	console.log(chalk.white(` █▓▒░░MADE BY PRINCE░░▒▓█
 `));
}
banner()

//Habdle the user argument...
if (process.argv[2] == "-h" || process.argv[2] == "--help"){
	setTimeout(() => {console.log("Run this script like this.👇"); },500);
setTimeout(() => {console.log(chalk.white("node ippin Victim_ip")); },1000);	
}
else
{
	tIp = process.argv[2]
	trackIp(tIp);// Take Target ip to handle the request...

}
function trackIp(tIp){
	if (tIp == undefined){
		var url = `http://ip-api.com/json`
		console.log();
	}
	else{
		var url = `http://ip-api.com/json/${tIp}`
		console.log(url);
	}
	// Take the location now...
	axios.get(url)
	.then((res) =>{
	setTimeout(()=>{console.log(chalk.red("⭕_____COUNTRY_____⭕"));},200);
	setTimeout(()=>{
		console.log("   👇    ");
		console.log(chalk.green(`${res.data.country}`));
	},300);
	setTimeout(()=>{console.log(chalk.red("⭕_____REGION_____⭕"));},400);
	setTimeout(()=>{
		console.log("     👇     ");
		console.log(chalk.green(`${res.data.regionName}`));
	},500);
	setTimeout(()=>{
		console.log(chalk.red("⭕_____CITY_____⭕"));
		console.log("     👇     ");
		console.log(chalk.green(`${res.data.city}`));
	},600)
	setTimeout(()=>{
		console.log(chalk.red("⭕_____DISTRICT_____⭕"));
		console.log("     👇     ");
		console.log(chalk.green(`${res.data.distric}`));
	},700)
	setTimeout(()=>{
		console.log(chalk.red("⭕_____TIMEZONE_____⭕"));
		console.log("     👇     ");
		console.log(chalk.green(`${res.data.timezone}`));
  
	},800);
	setTimeout(()=>{
		console.log(chalk.red("⭕_____LOCATION_____⭕"));
		console.log("     👇     ");
		console.log(chalk.green(`LATITUDE : ${res.data.lat}`));
		console.log(chalk.green(`LINGITUDE : ${res.data.lon}`));
	},1000)
	setTimeout(()=>{
		console.log(chalk.red("⭕_______ISP_______⭕"));
		console.log("     👇     ");
		console.log(chalk.green(`${res.data.isp}`));
	},1200)
	setTimeout(()=>{
		console.log(chalk.red("⭕_____TARGET_____⭕"));
		console.log("     👇     ");
		console.log(chalk.green(`${res.data.query}`));
	},1400);


	})
}

