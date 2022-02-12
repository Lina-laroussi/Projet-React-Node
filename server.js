import express from 'express'
import  mongoose  from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

dotenv.config();
const app=express();

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/amazona' ,{
     useNewUrlParser: true,
     useUnifiedTopology: true,
})
.then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

/*app.get('/api/products/:id', (req,res)=>{
   // let id = req.params.id;
   // console.log(id);
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    }else {
        res.status(404).send({message : ' Product not found '});
    }
})*/

/*app.get('/api/products',(req,res)=>{
    res.send(data.products)
});*/

app.use('/api/users' , userRouter);//send users from database
app.use('/api/products',productRouter);//send product from database

app.get('/',(req,res)=>{
    res.send("server is ready");
});
/*
app.use((err ,req, res, next)=>{
    res.status(500).send({message:err.message});
});*/

const port= 5000;

app.listen(5000,()=>{
    console.log(` serve at http://localhost: ${port} `);
});