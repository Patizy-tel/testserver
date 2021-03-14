const express = require('express')
const router = express.Router();
const blacklist = require('../../models/Desktop');

router.get('/totalblacklist',async(req, res) => {

    const resp = await blacklist.find({});

    res
        .status(200)
        .json({totalElements: resp.length})
})
router.get('/institution', async(req, res) => {

    const resp = await blacklist.find({institution:institution});

    res
        .status(200)
        .json({content: resp, totalElements: resp.length})
}) ;

router.get('/individuals',async(req, res) => {

    const resp = await blacklist.find({institution:individual});

    res
        .status(200)
        .json({content: resp, totalElements: resp.length})
})







 module.exports =  router