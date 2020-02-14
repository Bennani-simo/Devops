const express = require('express'),
      router = express.Router();


let bras = {};
let id = 0;

/*async function()


/* Récupérer toutes les Bras */


async function get(req, res) {
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({'success': true, 'bras': bras});

}
// Récupérer un bras par id

async function getById(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idBras = req.params.id;
    bras[idBras] = req.body;
    return res.status(200).json({'success': true, 'bras': bras[idBras]});

}
// async function qui poste un bras

async function post(req, res) {
    res.setHeader('Content-type', 'application/json');
    bras[id++] = req.body;

    return res.status(200).json({'success': true, 'bras': bras[id]});
}

// put 

async function put(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idBras = req.params.id;
    bras[idBras] = req.body;
    return res.status(200).json({'success': true, 'bras': bras[idBras]});

}

//delete
async function deleteById(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idBras = req.params.id;
    delete bras[idBras];
    return res.status(200).json({'success': true, 'message': 'Le bras a bien été supprimer.' });

}


/*
//Ajouter un nouveau bras 
router.post('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    
    bras[id++] = req.body;

    return res.status(200).json({'success': true, 'bras': bras[id]});
     
}); 

/* Modifier le bras :id 
router.put('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    let idBras = req.params.id;
    bras[idBras] = req.body;
    return res.status(200).json({'success': true, 'bras': bras[idBras]});
});

/* Supprimer le bras :id 
router.delete('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');

    let idBras = req.params.id;
    delete bras[idBras];

    return res.status(200).json({'success': true, 'message': 'Le bras a bien été supprimer.' });
});

*/

module.exports = {router,get,post,put,deleteById,getById}
