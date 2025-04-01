const express = require('express');
const router = express.Router();
const controller = require('../controllers/snippetController')

router.post('/', controller.createSnippet);
router.get('/', controller.getSnippets);
router.get('/search', controller.searchByTag);
router.get('/:id', controller.getSnippet);
router.put('/:id', controller.updateSnippet);
router.delete('/:id', controller.deleteSnippet);

module.exports = router;

