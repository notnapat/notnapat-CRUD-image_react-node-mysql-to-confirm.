//2 // import ex , file, cor // const app, app.use, app.listen
//7 // imp ProRoute //app.use(ProRoute)
//11 app.use (express.static)
  
import express  from "express";
import FileUpload from "express-fileupload";
import cors from "cors"
// import ProductRouter from './routes/ProductRoute.js'
import router from './routes/ProductRoute.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(router);

app.listen(5000, ()=> console.log('Server Up and Running...'));

