const express = require('express'),
    router = express.Router();


let jambe = {};
let id = 0;


// Récupérer toutes les jambes 
async function get(req, res) {
    res.setHeader('Content-type', 'application/json');
    return res.status(200).json({ 'success': true, 'jambe': jambe });

}



// Récupérer une jambe par id
async function getById(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idjambe = req.params.id;
    jambe[idjambe] = req.body;
    return res.status(200).json({ 'success': true, 'jambe': jambe[idjambe] });

}



// async function qui poste une jambe
async function post(req, res) {
    res.setHeader('Content-type', 'application/json');
    jambe[id++] = req.body;

    return res.status(200).json({ 'success': true, 'jambe': jambe[id] });
}



// put par ID
async function put(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idjambe = req.params.id;
    jambe[idjambe] = req.body;
    return res.status(200).json({ 'success': true, 'jambe': jambe[idjambe] });

}



//delete par ID
async function deleteById(req, res) {
    res.setHeader('Content-type', 'application/json');
    let idjambe = req.params.id;
    delete jambe[idjambe];
    return res.status(200).json({ 'success': true, 'message': 'Le jambe a bien été supprimer.' });

}




module.exports = { router, get, post, put, deleteById, getById }
