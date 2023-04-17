const app =require('express')();

app.get('/',(req, res )=>
    res.end('Hello World!')
);

const port = process.env.PORT || 8080;

app.listen(port,() => console.log(`Server started at http://localhost:${port}`) );
