// Create an Express JS instance
const express = require('express');
const authRouter = require('./routes/auth.route');
const productRouter = require('./routes/product.route');

const app = new express();

app.use(express.json());

app.use('/api', authRouter);
app.use('/api', productRouter);

app.listen(4300, () => {
    console.log("Express JS started successfully.");
});