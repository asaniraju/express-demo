const express = require('express');
const app = express();

app.get('/', (Request, Response) => {
    Response.send("Hello World !!!");
});

app.get('/api/courses',(Request, Response) => {
    Response.send([1,2,3]);
});

//using params
app.get('/api/courses/:id',(Request, Response) => {
    Response.send(Request.params.id)
});

//using multiple params
// app.get('/api/courses/:year/:month',(Request, Response) => {
//     Response.send(Request.params)
// });

//using  query params
app.get('/api/courses/:year/:month',(Request, Response) => {
    Response.send(Request.query)
});

const port = process.env.PORT || 3000;

app.listen(port,() => console.log(`Listening port at ${port}.....`))