const express = require('express'),
      router = express.Router();


let cape = {};
let id = 0;

/* Récupérer toutes les capes */
router.get('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({'success': true, 'cape': cape});
});

/* Ajouter une nouvelle cape */
router.post('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    
    cape[id] = req.body;
    id++;

    return res.status(200).json({'success': true, 'cape': cape[id]});
});

/* Modifier la cape :id */
router.put('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    let idCape = req.params.id;
    bras[idCape] = req.body;
    return res.status(200).json({'success': true, 'cape': cape[idCape]});
});

/* Supprimer la cape :id */
router.delete('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');

    let idCape = req.params.id;
    delete cape[idCape];

    return res.status(200).json({'success': true, 'message': 'La cape a bien été supprimer.' });
});

module.exports = router;
