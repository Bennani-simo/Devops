const express = require('express'),
      router = express.Router();


let armure = {};
let id = 0;

/* Récupérer toutes les armures */
router.get('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({'success': true, 'armure': armure});
});

/* Ajouter une nouvelle armure */
router.post('/', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    
    armure[id] = req.body;
    id++;

    return res.status(200).json({'success': true, 'armure': armure[id]});
});

/* Modifier l'armure :id */
router.put('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');
    let idArmure = req.params.id;
    armure[idArmure] = req.body;
    return res.status(200).json({'success': true, 'armure': armure[idArmure]});
});

/* Supprimer l'armure :id */
router.delete('/:id', async(req, res) => {
    res.setHeader('Content-type', 'application/json');

    let idArmure = req.params.id;
    delete armure[idArmure];

    return res.status(200).json({'success': true, 'message': 'L\'armure a bien été supprimer.' });
});

module.exports = router;
