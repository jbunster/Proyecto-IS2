const {Client } = require('pg')
const express = require('express');
var cors = require('cors')
const app = express();
const bodyParser = require('body-parser')
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'prueba',
    password: '123879213',
  })
  client.connect(function(error)  {
      if(error){
          message="no me pude conectar"+error;
          console.error(message);
          client.end();
      }
      console.log("Conectado!");
  });
  app.use(cors())
  app.use(bodyParser.json());
/*client.query('SELECT * from prueba', (err, res) => {
    console.log(res);
    client.end();
  })*/

app.get('/prueba',(req,res)=>{
    const select_query='SELECT COUNT(id_tienda) as cantidad FROM fila where id_tienda=1';
    client.query(select_query,(err,result)=>{
        if(err){
            return res.send(err)
        }else{
            console.log(select_query);
            //console.log(result);
            return res.json({
                data: result
            })
        }
    });
});
app.post('/prueba2', bodyParser.json(),(req,res)=>{
    const select_query=`INSERT INTO cliente (rut_cliente,nombre_cliente,numero_contacto) VALUES('${req.body.rut_cliente}','${req.body.nombre_cliente}','${req.body.numero_contacto}') ON CONFLICT DO NOTHING`;
    client.query(select_query,(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send('asdasdas');
        }else{
            const select_query2=`INSERT INTO fila (id_tienda,rut_cliente) VALUES('1','${req.body.rut_cliente}') ON CONFLICT DO NOTHING`;
            client.query(select_query2,(err2,result2)=>{
                if(err2){
                    console.log(err2);
                }else{
                    res.json(res.body);
                }
            });
            res.json(res.body);
        }
    });
});
var server = app.listen(8000, function () {
    console.log('Server is running..');
});
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })
