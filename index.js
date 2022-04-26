// Create an Express Js Instance
import express from 'express';

const app = new express();

app.listen(4300, () => {
    console.log("ExpressJS is running on port 4300");
})