const express = require('express'),
      router = express.Router();


let armure = {};
let id = 0;


// les armures ///////////////////////////////////////////////////////
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

// les bras ///////////////////////////////////////////////////////

//  recupere tous les bras
router.get('/bras', async(req, res) =>  {
     require('./bras').get(req, res); 
});

//recuperer un bras by ID
router.get('/bras/:id', async(req, res) =>  {
    require('./bras').getById(req, res); 
});


// poster un bras
router.post('/bras', async(req, res) =>  {
    require('./bras').post(req, res); 
});

// modifier un bras 
router.put('/bras/:id', async(req, res) =>  {
    require('./bras').put(req, res); 
});

// Delete un bras 
router.delete('/bras/:id', async(req, res) =>  {
    require('./bras').deleteById(req, res); 
});



// les jambes //////////////////////////////////////
// les torses //////////////////////////////////////


// les capes //////////////////////////////////////

//  recupere tous les cape
router.get('/cape', async(req, res) =>  {
    require('./cape').get(req, res); 
});


// poster un cape
router.post('/cape', async(req, res) =>  {
   require('./cape').post(req, res); 
});

// modifier un cape 
router.put('/cape/:id', async(req, res) =>  {
   require('./cape').put(req, res); 
});

// Delete un cape 
router.delete('/cape/:id', async(req, res) =>  {
   require('./cape').deleteById(req, res); 
});


module.exports = router;
