
const functions= require('firebase-functions');
const admin= require('firebase-admin')
const express= require('express')
const cors= require('cors');
const app= express()
exports.app= functions.https.onRequest(app);



var serviceAccount = require('./credentials.json');
const { debug } = require('firebase-functions/logger');

admin.initializeApp({
 credential: admin.credential.cert(serviceAccount),
 databaseURL: "https://artventures-50d01-default-rtdb.firebaseio.com"
 });


// admin.initializeApp({
//   credential: admin.credential.cert('./credentials.json'),
//   databaseURL: "https://artventures-50d01-default-rtdb.firebaseio.com"

// });
const db=admin.firestore()


app.get('/hellow', (req, res)=>{
    // ./hello-world
    return res.status(200).send('hellow world1');

//   return res.status(200).json({message: 'hello world'})
});


// app.post('/api/tour', async (req, res)=>{
//   try{
//     await db.collection('tour')
//     .doc('/' + req.body.id + '/')
//     .create({name: req.body.name})
//   return res.status(204).json();

//   }catch(error){
//     console.log(error);
//     return res.status(500).send(error)

//   }
// });

// con Post creamos una coleccion en la api
app.post('/api/prueba', (req, res)=>{ 
    (async()=>{
        try{
            await db.collection('prueba').doc(`/${Date.now()}/`).create({
                id: Date.now(),
                name:  req.body.name,
                mobile: req.body.mobile,
                adress: req.body.adress

            });
            return res.status(200).send({status: 'succes', msg: 'Data Saved'});

        }
        catch(error){
            console.log(error)
            return res.status(200).send({status: 'failed', msg: error});

        }
    })();
} );

// fetch - single data from firebase store using an specific id

app.get('/api/get/:id', (req, res)=>{
    (async ()=> {
        try{
            const reqDoc= db.collection('prueba').doc(req.params.id); //aqui buscamos el documnetos o la coleccion de donde queremos sacar la informacion 
            let userDatails= await reqDoc.get(); // esto es para agarraga la informacion especifica de ese documneto (coleccion) seleccionada
            let response = userDatails.data(); //aqui ya tenemos la data 
            
            return res.status(200).send({status: 'succes', data: response});

        }
        catch(error){
            console.log(error)
            return res.status(200).send({status: 'failed', msg: error});

        }

    })();


})



// fetch - all data from firestore

app.get('/api/getAll', (req, res)=>{
    (async ()=> {
        try{
            const query= db.collection('prueba');//aqui buscamos el documnetos o la coleccion de donde queremos sacar la informacion 
            let response= [];

            await query.get().then((data) => {
                let docs= data.docs;
                docs.map((doc)=>{
                    const selectItem= {
                        name:  doc.data().name,
                        mobile: doc.data().mobile,
                        adress: doc.data().adress
                    };
                    response.push(selectItem);
                });
                return response;

            });



            return res.status(200).send({status: 'succes', data: response});

        }
        catch(error){
            console.log(error)
            return res.status(200).send({status: 'failed', msg: error});

        }

    })();


});

//actualizar un elemento especifico de un acoleccion --> PUT
app.put('/api/update/:id', (req, res)=>{ 
    (async()=>{
        try{
            const reqDoc= db.collection('prueba').doc(req.params.id);
            await reqDoc.update({
                name:  req.body.name,
                mobile: req.body.mobile,
                adress: req.body.adress

            });
            return res.status(200).send({status: 'succes', msg: 'Data Update'});
            

        }
        catch(error){
            console.log(error)
            return res.status(200).send({status: 'failed', msg: error});

        }
    })();
} );

//DELETE eliminira dato 
app.delete('/api/delete/:id', (req, res)=>{ 
    (async()=>{
        try{
            const reqDoc= db.collection('prueba').doc(req.params.id);
            
            return res.status(200).send({status: 'succes', msg: 'Data Remove'});
            

        }
        catch(error){
            console.log(error)
            return res.status(200).send({status: 'failed', msg: error});

        }
    })();
} );






app.post('/api/obras', (req, res)=>{ 
    (async()=>{
        try{
            await db.collection('obras').doc(`/${Date.now()}/`).create({
                id: Date.now(),
                title:  req.body.title,
                tipo: req.body.tipo,
                year: req.body.year,
                author: req.body.author,
                description: req.body.description,
                tecnique: req.body.tecnique,
                dimension: req.body.dimension,
                img: req.body.img


            });
            return res.status(200).send({status: 'succes', msg: 'Data Saved'});

        }
        catch(error){
            console.log(error)
            return res.status(200).send({status: 'failed', msg: error});

        }
    })();
} );


app.get('/api/getAll/obras', (req, res)=>{
    (async ()=> {
        try{
            const query= db.collection('obras');//aqui buscamos el documnetos o la coleccion de donde queremos sacar la informacion 
            let response= [];

            await query.get().then((data) => {
                let docs= data.docs;
                docs.map((doc)=>{
                    const selectItem= {
                        title:  doc.data().title,
                        tipo: doc.data().tipo,
                        year: doc.data().year,
                        author: doc.data().author,
                        description: doc.data().description,
                        tecnique: doc.data().tecnique,
                        dimension: doc.data().dimension,
                        img: doc.data().img
                    };
                    response.push(selectItem);
                });
                return response;

            });



            return res.status(200).send({status: 'succes', data: response});

        }
        catch(error){
            console.log(error)
            return res.status(200).send({status: 'failed', msg: error});

        }

    })();


});




