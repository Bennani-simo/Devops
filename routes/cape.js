const express = require('express'),
      router = express.Router();


let cape = {};
let id = 0;

/* Récupérer toutes les capes 
router.get('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({'success': true, 'cape': cape});
});

/* Ajouter une nouvelle cape 
router.post('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    
    cape[id] = req.body;
    id++;

    return res.status(200).json({'success': true, 'cape': cape[id]});
});

/* Modifier la cape :id 
router.put('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    let idCape = req.params.id;
    cape[idCape] = req.body;
    return res.status(200).json({'success': true, 'cape': cape[idCape]});
});

/* Supprimer la cape :id 
router.delete('/:id', async(req, res) => {

    res.setHeader('Content-type', 'application/json');
    let idCape = req.params.id;
    if ( !cape[idCape] ) {
        return res.status(404).json({'error': 1, 'message' : 'La cape ' + idCape + ' n\'existe pas.'});
        
    }

    let idCape = req.params.id;
    delete cape[idCape];

    return res.status(200).json({'success': true, 'message': 'La cape a bien été supprimer.' });
});

/*async function()


/* Récupérer toutes les Bras */


async function get(req, res) {
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({'success': true, 'cape': cape});

}


// async function qui poste un bras

async function post(req, res) {
    res.setHeader('Content-type', 'application/json');
    cape[id++] = req.body;

    return res.status(200).json({'success': true, 'cape': cape[id]});
}

// put 

async function put(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idcape = req.params.id;
    cape[idcape] = req.body;
    return res.status(200).json({'success': true, 'cape': cape[idcape]});

}

//delete
async function deleteById(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idCape = req.params.id;
    delete cape[idCape];
    return res.status(200).json({'success': true, 'message': 'La cape a bien été supprimer.' });

}


module.exports = {router,get,post,put,deleteById};

