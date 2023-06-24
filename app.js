import express from 'express';
import userRoutes from './routes/userRouter.js';

const PORT = process.env.PORT || 3000;

const app = express();


//Habilitar pug
app.set('view engine', 'pug');
app.set('views', './views');

//routes
app.use('/auth', userRoutes)


//server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

