const express = require('express');
const controllerArtist = require('../controllers/arist');

const artistRouter = express.Router();

artistRouter.post('/', controllerArtist.createArtist);