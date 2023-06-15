const Express = require('express');
const App = Express();
const Cors = require("cors")

App.use(Express.json())

App.use(Cors());

App.use(require('./index'))

const PORT = process.env.PORT || 3000;

App.listen(PORT, ()=>{
      console.log("Connected..")
});