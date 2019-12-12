//Constante um express framework zu starten
const express = require('express');
//
const cors = require('cors');

const bodyParser = require('body-parser')


//initiallisierung des Frameworks
const app = express();

app.use(bodyParser.json())
// app.route('/api/cats').post((req, res) => {
//   res.send(201, req.body)
// })

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




//app.get('/', (req,res) => {
 //  res.json('Server Ready');
//});





// // eingabe von URL, : ist platzhalter für verschiedene Ausprägungen von type
app.get('/products/:type', (req,res)=>
{

    var connection = mysql.createConnection({
        host     : 'remotemysql.com',
        user     : 'QEaqoXymWu',
        password: 'tT81u7BeH8',
        database : 'QEaqoXymWu'
      
    });

    connection.connect((err)=>{
        
        if(!err)
        console.log('Connection Established Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
          
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

app.get('/products', (req,res)=>
{

    var connection = mysql.createConnection({
        host     : 'remotemysql.com',
        user     : 'QEaqoXymWu',
        password: 'tT81u7BeH8',
        database : 'QEaqoXymWu'
      
    });

    connection.connect((err)=>{
        
        if(!err)
        console.log('Connection Established Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
            //? ist Platzhalter, [ req.params.type ] befühlt ? 
            //durch Platzhalter werden SQL injection Angriffe verhindert
             
            connection.query('Select * from items ', (err,result) => {
                if(err) 
                    {throw err;}
                console.log('hier wird get aufgerufen')
                //zugriff darauf(wie return)
                return res.json(result);
            });
        
            connection.end();
            
    });
   
});

// app.get('/bestellung', (req,res)=>
// {

//     res.send('fuckq')

// });

//app.post('/bestellung', (req,res) => {
 //   res.json('Server Ready');
 //});


app.post('/bestellung',(req,res)=>
{
    console.log('hi');
    


    var connection = mysql.createConnection({
        host     : 'remotemysql.com',
        user     : 'QEaqoXymWu',
        password: 'tT81u7BeH8',
        database : 'QEaqoXymWu'
      
    });
    connection.connect((err)=>{

        if(!err)
        console.log('Connection Established Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
            
           // var values =   [req.body.vorname, req.body.adress];

               // ['vorn', 'nachn', 'street', '23', 'adropt', '12345', 'schönerort', 'deutschland', 'John@test.com']
            

            connection.query("INSERT INTO test (vorname, adress) VALUES ('"+ req.body.vorname +"', '" + req.body.adress +"')", (err,res) => {
            //("INSERT INTO test (vorname, nachname, straße, hausnummer, adresseoptional, plz, ort, land, emailadresse, geschlecht) VALUES ?", [values], (err,res) => {
                console.log('keine scheiße')
                if(err) 
                    {throw err;}

                    console.log('scheiße')
        
                                    //zugriff darauf(wie return)
                                    return res;
            });
        
            connection.end();
            
    });
   
});
