const express = require('express'),
    router = express.Router();


let armure = {};
let id = 0;


// les armures 
// Récupérer toutes les armures 
router.get('/', async (req, res) => {
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({ 'success': true, 'armure': armure });
});



// Ajouter une nouvelle armure 
router.post('/', async (req, res) => {
    res.setHeader('Content-type', 'application/json');

    armure[id] = req.body;
    id++;

    return res.status(200).json({ 'success': true, 'armure': armure[id] });
});



/* Modifier l'armure :id */
router.put('/:id', async (req, res) => {
    res.setHeader('Content-type', 'application/json');
    let idArmure = req.params.id;
    armure[idArmure] = req.body;

    return res.status(200).json({ 'success': true, 'armure': armure[idArmure] });
});



/* Supprimer l'armure :id */
router.delete('/:id', async (req, res) => {
    res.setHeader('Content-type', 'application/json');

    let idArmure = req.params.id;
    delete armure[idArmure];

    return res.status(200).json({ 'success': true, 'message': 'L\'armure a bien été supprimer.' });
});



// les bras
// recupere tous les bras
router.get('/bras', async (req, res) => {
    require('./bras').get(req, res);
});



//recuperer un bras by ID
router.get('/bras/:id', async (req, res) => {
    require('./bras').getById(req, res);
});



// poster un bras
router.post('/bras', async (req, res) => {
    require('./bras').post(req, res);
});



// modifier un bras 
router.put('/bras/:id', async (req, res) => {
    require('./bras').put(req, res);
});



// Delete un bras 
router.delete('/bras/:id', async (req, res) => {
    require('./bras').deleteById(req, res);
});



// les capes
// recupere toutes les cape
router.get('/cape', async (req, res) => {
    require('./cape').get(req, res);
});

//recuperer une cape by ID
router.get('/cape/:id', async (req, res) => {
    require('./cape').getById(req, res);
});


// poster une cape
router.post('/cape', async (req, res) => {
    require('./cape').post(req, res);
});



// modifier une cape 
router.put('/cape/:id', async (req, res) => {
    require('./cape').put(req, res);
});



// Delete un cape par ID
router.delete('/cape/:id', async (req, res) => {
    require('./cape').deleteById(req, res);
});

// les jambes 
// recupere toutes les jambe
router.get('/jambe', async (req, res) => {
    require('./jambe').get(req, res);
});

//recuperer une jambe by ID
router.get('/jambe/:id', async (req, res) => {
    require('./jambe').getById(req, res);
});


// poster une jambe
router.post('/jambe', async (req, res) => {
    require('./jambe').post(req, res);
});



// modifier une jambe 
router.put('/jambe/:id', async (req, res) => {
    require('./jambe').put(req, res);
});



// Delete un jambe par ID
router.delete('/jambe/:id', async (req, res) => {
    require('./jambe').deleteById(req, res);
});

// les torses
// recupere toutes les torse
router.get('/torse', async (req, res) => {
    require('./torse').get(req, res);
});

//recuperer un torse by ID
router.get('/torse/:id', async (req, res) => {
    require('./torse').getById(req, res);
});


// poster une torse
router.post('/torse', async (req, res) => {
    require('./torse').post(req, res);
});



// modifier une torse 
router.put('/torse/:id', async (req, res) => {
    require('./torse').put(req, res);
});



// Delete un torse par ID
router.delete('/torse/:id', async (req, res) => {
    require('./torse').deleteById(req, res);
});
module.exports = router;
