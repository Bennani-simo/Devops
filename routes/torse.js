const express = require('express'),
    router = express.Router();


let torse = {};
let id = 0;


// Récupérer tous les torse 
async function get(req, res) {
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({ 'success': true, 'torse': torse });

}



// Récupérer un torse par ID
async function getById(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idtorse = req.params.id;
    torse[idtorse] = req.body;
    return res.status(200).json({ 'success': true, 'torse': torse[idtorse] });

}



// async function qui poste un torse
async function post(req, res) {
    res.setHeader('Content-type', 'application/json');
    torse[id++] = req.body;

    return res.status(200).json({ 'success': true, 'torse': torse[id] });
}



// put 
async function put(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idtorse = req.params.id;
    torse[idtorse] = req.body;
    return res.status(200).json({ 'success': true, 'torse': torse[idtorse] });

}



//delete
async function deleteById(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idtorse = req.params.id;
    delete torse[idtorse];
    return res.status(200).json({ 'success': true, 'message': 'Le torse a bien été supprimer.' });

}




module.exports = { router, get, post, put, deleteById, getById }
