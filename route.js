const express = require('express');
const Post = require('./Model/Post');
const router = express.Router();

router.get('/post',async(req,res)=>{

    const post = await Post.find()
    console.log(post);
    res.send(post)

})

module.exports = router;