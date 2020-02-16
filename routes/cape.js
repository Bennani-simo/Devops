const express = require('express'),
    router = express.Router();


let cape = {};
let id = 0;


// Récupérer toutes les capes 
async function get(req, res) {
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({ 'success': true, 'cape': cape });

}


// Recuperer une cape par ID 
async function getById(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idBras = req.params.id;
    bras[idBras] = req.body;
    return res.status(200).json({ 'success': true, 'bras': bras[idBras] });

}


// async function qui poste une cape
async function post(req, res) {
    res.setHeader('Content-type', 'application/json');
    cape[id++] = req.body;

    return res.status(200).json({ 'success': true, 'cape': cape[id] });
}



// put 
async function put(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idcape = req.params.id;
    cape[idcape] = req.body;
    return res.status(200).json({ 'success': true, 'cape': cape[idcape] });

}



//delete
async function deleteById(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idCape = req.params.id;
    delete cape[idCape];
    return res.status(200).json({ 'success': true, 'message': 'La cape a bien été supprimer.' });

}


module.exports = { router, get, getById, post, put, deleteById };

