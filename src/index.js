const express = require("express");
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors');

const { port } = require("./config").config;
const swaggerOptions = require('./utils/swagger');

const swaggerSpecs = swaggerJSDoc(swaggerOptions);

const productsRouter = require('./routes/products.routes');
const productsByCategory = require('./routes/products-categories.routes');

const app = express();

app.use(express.urlencoded({
    extended:true
}));

// Middleware json
app.use(express.json());
app.use(cors());

app.use('/static',express.static('static'))

// Routes
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
app.use('/products', productsRouter);
app.use('/categories', productsByCategory);

app.listen(port,function(){
    // console.log("Listening on: http://localhost:"+port)
    console.log(`Listening on: http://localhost:${port}`)
})
