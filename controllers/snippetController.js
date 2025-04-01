const Snippet = require('../models/snippet');

exports.createSnippet = async(req,res) =>{
    try{
        const newSnippet = new Snippet(req.body);
        const saved = await newSnippet.save();
        res.status(201).json(saved);
    }catch(err){
        res.status(400).json({ error: err.message});
    }
};

exports.getSnippets = async (req,res) => {
    try{
        const snippets = await Snippet.find();
        res.json(snippets);
    }catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.getSnippet = async (req, res) => {
    try{
        const snippet = await Snippet.findById(req.params.id);
        if(!snippet) return res.status(404).json({message: 'Not found'});
        res.json(snippet);
    }catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.updateSnippet = async (req, res) => {
    try {
      const updated = await Snippet.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.deleteSnippet = async (req, res) => {
    try {
      await Snippet.findByIdAndDelete(req.params.id);
      res.json({ message: 'Deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.searchByTag = async (req, res) => {
    const { tag } = req.query;
    try {
      const snippets = await Snippet.find({ tags: tag });
      res.json(snippets);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };