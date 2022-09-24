const express = require('express');

const {createConsole, deleteConsole, getAllConsoles, updateConsole } = require('../controllers/consoles.controller')

const consolesRouter = express.Router();

const {protectSession} =require('../middlewares/auth.middlewares');
const {consoleExists} = require('../middlewares/consoles.middlewares')

consolesRouter.get('/', getAllConsoles);

consolesRouter.use(protectSession);

consolesRouter.post('/', createConsole);

consolesRouter.patch('/:id', consoleExists, updateConsole);

consolesRouter.delete('/:id', consoleExists, deleteConsole);

module.exports = {consolesRouter};