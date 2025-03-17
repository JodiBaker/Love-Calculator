
import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';  /* import dirname from path module thats already bundled with node */ 
import { fileURLToPath } from 'url';     /* this as well is needed*/
const __dirname = dirname(fileURLToPath(import.meta.url));  /*this is needed as well*/


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => 
  res.sendFile(__dirname + '/public/home.html'));



app.post('/names', function (req, res) {
  const n = Math.floor(Math.random() * 100) + 1;
  console.log(n);
if (n < 65){
  res.sendFile(__dirname + '/public/heartbroken.html')
}else {
  res.sendFile(__dirname + '/public/heartfull.html')
}
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));