const express = require('express'),
      router = express.Router();


let torse = {};
let id = 0;

/* Récupérer tous les torses */
router.get('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({'success': true, 'torse': torse});
});

/* Ajouter un nouveau torse */
router.post('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    
    torse[id] = req.body;
    id++;

    return res.status(200).json({'success': true, 'torse': torse[id]});
});

/* Modifier le torse :id */
router.put('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    let idTorse = req.params.id;
    bras[idTorse] = req.body;
    return res.status(200).json({'success': true, 'torse': torses[idTorse]});
});

/* Supprimer le torse :id */
router.delete('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');

    let idtorse = req.params.id;
    delete torse[idTorse];

    return res.status(200).json({'success': true, 'message': 'Le torse a bien été supprimer.' });
});

module.exports = router;
