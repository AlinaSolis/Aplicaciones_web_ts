import express from 'express';
import morgan from 'morgan';
import authRoute from './routes/auth.routes'
import connectDBMongo from './config/db';
import orderRoute from './routes/order.rutes'
import productRoute from './routes/product.routes'

//Asignar el numero al puerto
const app = express ();

//Asignar el numero al puerto
const PORT = 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/auth', authRoute);//Ruta principal
app.use('/api/order', orderRoute);
app.use('/api/product', productRoute);

connectDBMongo().then(()=>{
    app.listen(PORT, ()=> {
    console.log(`El servidor funciona en el puerto: ${PORT}`);
    console.log(`El servidor esta funcionando:`, PORT)
});

});