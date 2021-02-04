const path = require('path');
const leggiDati = require("./file-reader");

const BASE_PATH = path.resolve(__dirname, './../../data/');
const FILE_L180 = path.join(BASE_PATH, 'L180.csv');
const FILE_L232 = path.join(BASE_PATH, 'L232.csv');
const FILE_L2020 = path.join(BASE_PATH, 'L2020.csv');

async function readAllData(){
    try {
        let l180 = await leggiDati(FILE_L180);
        let l232 = await leggiDati(FILE_L232);
        let l2020 = await leggiDati(FILE_L2020);
    
        //console.log(l180);
        //console.log(l232);
        //console.log(l2020);
		return [l180,l232,l2020];
            
    } catch (error) {
        console.log(error);        
    }
}

module.exports = {readAllData};
