const express = require('express');
const Post = require('./Model/Post');
const router = express.Router();

router.get('/post',async(req,res)=>{

    const post = await Post.find()
    res.send(post)

})

module.exports = router;