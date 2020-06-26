const {Client } = require('pg')
const express = require('express');
var cors = require('cors')
const app = express();
const bodyParser = require('body-parser')
const client = new Client({
    user: 'isw2020d',
    host: 'plop.inf.udec.cl',
    database: 'isw2020d',
    password: 'isw2020d',
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
/**************************Consulta para obtener el número de clientes en la fila de una tienda*******************************/
app.get('/prueba/:id',(req,res)=>{
    console.log("hola");
    var id= req.params.id;
    const select_query=`SELECT COUNT(id_tienda) as cantidad FROM fila where id_tienda=$1`;
    client.query(select_query,[id],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(select_query);
            console.log(result);
            return res.json({
                data: result
            })
        }
    });
});
app.post('/registrar-usuario',bodyParser.json(),(req,res)=>{
    rut_cliente=req.body.rut_cliente;
    const select_query=`SELECT rut_cliente FROM cliente WHERE cliente.rut_cliente=$1`;
    const insert_query= `INSERT INTO cliente(rut_cliente,nombre_cliente,numero_contacto,contrasena) VALUES('${req.body.rut_cliente}','${req.body.nombre_cliente}','${req.body.numero_contacto}','${req.body.contrasena}') ON CONFLICT DO NOTHING`;
    client.query(select_query,[rut_cliente],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send('Error al crear la cuenta');
            res.json(res.body);
        }else{
            if(result.rowCount==0){
                client.query(insert_query,(err2,result2)=>{
                    if(err){
                        console.log(err)
                        res.status(500).send('Error al crear la cuenta');
                        res.json(res.body);
                    }else{
                        console.log("Cuenta creada");
                        res.json(res.body);
                    }
                })
            }else{
                console.log("Cuenta ya registrada");
            }
            res.json(res.body);
        }
    })
})
app.post('/verificar-usuario',bodyParser.json(),(req,res)=>{
    rut_cliente=req.body.rut_cliente;
    contrasena=req.body.contrasena;
    const select_query=`SELECT rut_cliente FROM cliente WHERE cliente.rut_cliente=$1 AND cliente.contrasena=$2`;
    client.query(select_query,[rut_cliente,contrasena],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
            return res.json({
                data: result
            })
        }
    })
})
app.post('/prueba2/:hora', bodyParser.json(),(req,res)=>{
    rut_cliente=req.body.rut_cliente;
    hora=req.params.hora;
    console.log(hora)
    const select_query=`INSERT INTO cliente (rut_cliente,nombre_cliente,numero_contacto) VALUES('${req.body.rut_cliente}','${req.body.nombre_cliente}','${req.body.numero_contacto}') ON CONFLICT DO NOTHING`;
    client.query(select_query,(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send('asdasdas');
        }else{
            const select_query2=`INSERT INTO fila (id_tienda,rut_cliente,hora_entrada) VALUES('1','${req.body.rut_cliente}',$1) ON CONFLICT DO NOTHING`;
            client.query(select_query2,[hora],(err2,result2)=>{
                if(err2){
                    console.log(err2);
                }else{
                    console.log("Aquí")
                    const select_query3=`SELECT rut_cliente FROM cliente WHERE rut_cliente=$1`
                    client.query(select_query3,[rut_cliente],(err,result3)=>{
                        if(err){
                            
                        }else{
                            return res.json({
                                data: result3
                            })
                        }
                    })
                }
            });
        }
    });
});
app.post('/ingresar-fila/:rut/:id/:hora',bodyParser.json(),(req,res)=>{
    rut_cliente=req.params.rut;
    id=req.params.id;
    hora=req.params.hora;
    console.log(rut_cliente);
    console.log(id);
    console.log(hora);
    const insert_query=`INSERT INTO fila(id_tienda,rut_cliente,hora_entrada) VALUES ($1,$2,$3) ON CONFLICT DO NOTHING`;
    client.query(insert_query,[id,rut_cliente,hora],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result);
            return res.json({
                data: result
            })
        }
    })
})
app.get('/cliente/:id/:id_tienda',(req,res)=>{
    var rut_cliente= req.params.id;
    var id_tienda=req.params.id_tienda;
    const select_query=`SELECT rut_cliente,puesto_fila FROM fila where rut_cliente=$1 AND id_tienda=$2`;
    client.query(select_query,[rut_cliente,id_tienda],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(select_query);
            console.log(result);
            return res.json({
                data: result
            })
        }
    });
});
app.get('/filas-actuales/:rut',(req,res)=>{
    var rut_cliente=req.params.rut;
    const select_query=`SELECT nombre_tienda,puesto_fila FROM fila,tienda WHERE fila.rut_cliente=$1 AND fila.id_tienda=tienda.id_tienda`;
    client.query(select_query,[rut_cliente],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(select_query);
            console.log(result);
            return res.json({
                data:result
            })
        }
    });
});
var server = app.listen(8000, function () {
    console.log('Server is running..');
});
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })
