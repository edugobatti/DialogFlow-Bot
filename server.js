require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const handlebars = require('express-handlebars')
//////////////////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



///public
app.use(express.static(path.join(__dirname, "public")))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist/umd')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/style', express.static(__dirname + '/style/')); // redirect CSS bootstrap



//////////////////pastas
const dialog = require('./dialog/dialog')
app.use('/chat', dialog)

////config template handlebar
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')



//rota index
app.get('/', (req, res) => {
  res.render('index')
})




app.post('/webHook', (req, res) => {
    let intentName = req.body.queryResult.intent.displayName
    console.log(intentName)

    if (intentName == 'webhook') {
        res.json({
            'fulfillmentText': "respostaWebHook"
        })
    }
})



const port = 3000
app.listen(process.env.PORT || port, () =>
    console.log("Servidor Online / porta:" + port)
);

