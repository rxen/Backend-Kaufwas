//Constante um express framework zu starten
const express = require('express');
//
const cors = require('cors');

const bodyParser = require('body-parser')


//initiallisierung des Frameworks
const app = express();

app.use(bodyParser.json())
app.route('/api/cats').post((req, res) => {
  res.send(201, req.body)
})

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  
  app.use(cors(corsOptions))


//
app.use(cors());

//mySyl Objekt holen
var mysql = require('mysql');



//Startet Server auf localhost (3000 als Übergabeparameter)
app.listen(3000, () =>{
    console.log('Example app listening on port 3000!');
});


// app.route('/api/cats').get((req, res) => {
//     res.send({
//       cats: [{ name: 'lilly' }, { name: 'lucy' }],
//     });
//   });

//   app.route('/api/cats/:name').get((req, res) => {
//     const requestedCatName = req.params['name']
//     res.send({ name: requestedCatName })
//   })

app.route('/').get((req,res) => {
    res.json('Server Ready');
});


// app.head("/simple-cors", cors(), (req, res) => {
//     console.info("HEAD /simple-cors");
//     res.sendStatus(204);
//   });
//   app.get("/simple-cors", cors(), (req, res) => {
//     console.info("GET /simple-cors");
//     res.json({
//       text: "Simple CORS requests are working. [GET]"
//     });

// eingabe von URL, : ist platzhalter für verschiedene Ausprägungen von type
app.get('/products/:type', (req,res)=>
{
    var connection = mysql.createConnection({
            host     : 'remotemysql.com',
            user     : 'QEaqoXymWu',
            password: 'tT81u7BeH8',
            database : 'QEaqoXymWu'
          
        });

    connection.connect((err)=>{
        if(err) 
            {throw err;}   
            //? ist Platzhalter, [ req.params.type ] befühlt ? 
            //durch Platzhalter werden SQL injection Angriffe verhindert
             
            connection.query('Select * from items where type = ?', [ req.params.type ], (err,result) => {
                if(err) 
                    {throw err;}
        
                //zugriff darauf(wie return)
                return res.json(result);
            });
        
            connection.end();
            
    });
   
});


