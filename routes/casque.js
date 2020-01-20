const express = require('express'),
      router = express.Router();


let casque = {};
let id = 0;

/* Récupérer tous les casques */
router.get('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({'success': true, 'casque': casque});
});

/* Ajouter un nouveau casque */
router.post('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    
    casque[id] = req.body;
    id++;

    return res.status(200).json({'success': true, 'casque': casque[id]});
});

/* Modifier le casque :id */
router.put('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    let idCasque = req.params.id;
    bras[idCasque] = req.body;
    return res.status(200).json({'success': true, 'casque': casque[idCasque]});
});

/* Supprimer le casque :id */
router.delete('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');

    let idCasque = req.params.id;
    delete casque[idCasque];

    return res.status(200).json({'success': true, 'message': 'Le casque a bien été supprimer.' });
});

module.exports = router;
