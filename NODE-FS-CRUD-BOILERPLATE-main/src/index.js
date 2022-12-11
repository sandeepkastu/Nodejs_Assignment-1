
const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const data=await fs.writeFile(fileName,fileContent)
	console.log('file created');
	
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data= await fs.readFile(fileName,{encoding:'utf-8'});
	console.log(data);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const data=  await fs.appendFile(fileName,fileContent);
	console.log('file updated')
	
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	const data=await fs.unlink(fileName);
	console.log('file deleted')
	
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }