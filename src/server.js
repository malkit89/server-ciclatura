const express = require('express');
const cors = require('cors');
const app = express();
const fileDati = require('./ciclatura/index');
const path = require('path')

let publicPath = path.join(__dirname,"..","public");
// console.log(publicPath);

app.use(cors())
app.use(express.static(publicPath));

app.get('/',(req,res)=>{
    res.sendFile('index.html',{ root: publicPath})
});

app.get('/api/ciclatura', async (req,res)=>{
	let dati = await fileDati.readAllData();
    res.json(dati);
});

app.listen(3000,()=>{
    console.log("App avviato su porta 3000");
});