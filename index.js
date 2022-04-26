// Create an Express Js Instance
import express from 'express';

const app = new express();

app.use('/', (req, res) => {
    res.json({data: 'Hello World'});
});

app.listen(4300, () => {
    console.log("ExpressJS started successfully");
})