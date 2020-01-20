const express = require('express'),
      router = express.Router();


let bras = {};
let id = 0;

/* Récupérer toutes les Bras */
router.get('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({'success': true, 'bras': bras});
});

/* Ajouter un nouveau bras */
router.post('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    
    bras[id] = req.body;
    id++;

    return res.status(200).json({'success': true, 'bras': bras[id]});
});

/* Modifier le bras :id */
router.put('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    let idBras = req.params.id;
    bras[idBras] = req.body;
    return res.status(200).json({'success': true, 'bras': bras[idBras]});
});

/* Supprimer le bras :id */
router.delete('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');

    let idBras = req.params.id;
    delete bras[idBras];

    return res.status(200).json({'success': true, 'message': 'Le bras a bien été supprimer.' });
});

module.exports = router;
