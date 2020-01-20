const express = require('express'),
      router = express.Router();


let jambes = {};
let id = 0;

/* Récupérer toutes les jambes */
router.get('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({'success': true, 'jambe': jambe});
});

/* Ajouter une nouvelle jambe */
router.post('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    
    jambe[id] = req.body;
    id++;

    return res.status(200).json({'success': true, 'jambe': jambe[id]});
});

/* Modifier la jambe :id */
router.put('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    let idJambe = req.params.id;
    jambe[idJambe] = req.body;
    return res.status(200).json({'success': true, 'jambe': jambe[idJambe]});
});

/* Supprimer la jambe :id */
router.delete('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');

    let idCape = req.params.id;
    delete jambe[idJambe];

    return res.status(200).json({'success': true, 'message': 'La jambe a bien été supprimer.' });
});

module.exports = router;
