const express = require('express'),
    router = express.Router();


let casque = {};
let id = 0;


// Récupérer tous les casques 
async function get(req, res) {
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({ 'success': true, 'casque': casque });

}



// Récupérer un casque par id
async function getById(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idcasque = req.params.id;
    casque[idcasque] = req.body;
    return res.status(200).json({ 'success': true, 'casque': casque[idcasque] });

}



// async function qui poste un casque
async function post(req, res) {
    res.setHeader('Content-type', 'application/json');
    casque[id++] = req.body;

    return res.status(200).json({ 'success': true, 'casque': casque[id] });
}



// put par ID
async function put(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idcasque = req.params.id;
    casque[idcasque] = req.body;
    return res.status(200).json({ 'success': true, 'casque': casque[idcasque] });

}



//delete par ID
async function deleteById(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idcasque = req.params.id;
    delete casque[idcasque];
    return res.status(200).json({ 'success': true, 'message': 'Le casque a bien été supprimer.' });

}


module.exports = { router, get, post, put, deleteById, getById }
