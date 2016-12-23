var fs = require('fs');

exports.getDirPath = function() {
  // current working directory
  console.log('current working directory is :',process.cwd());
};


exports.createDirIfNotExist= function () {
 //create dir if not exist
var dirToCreate = './monDossier';

if (!fs.existsSync(dirToCreate)){
    fs.mkdirSync(dirToCreate);
    console.log('the folder was created !');
}else
	
	console.log('the folder already exists !');

};