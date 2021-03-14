const express = require('express')
const router = express.Router();
const blacklist = require('../../models/Desktop');

function paginate(model) {
    return async(req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const result = {};
        // change model.length to model.countDocuments() because you are counting
        // directly from mongodb
        if (endIndex < (await model.countDocuments().exec())) {
            result.next = {
                page: page + 1,
                limit: limit
            };
        }
        if (startIndex > 0) {
            result.previous = {
                page: page - 1,
                limit: limit
            };
        }
        try {
            //       .limit(limit).skip(startIndex) replaced the slice method because
            // it is done directly from mongodb and they are one of mongodb methods
            result.results = await model
                .find()
                .limit(limit)
                .skip(startIndex);
            res.paginatedResult = result;
            next();
        } catch (e) {
            res
                .status(500)
                .json({message: e.message});
        }
    };
}

router.post('/', (req, res) => {

    new blacklist(req.body)
        .save()
        .then(resp => {

            res
                .status(201)
                .send({message: 'Success'})
        })
});

router.get('/', paginate(blacklist), async(req, res) => {

    const resp = await blacklist.find({});

    res
        .status(200)
        .json({content: resp, totalElements: resp.length})
})

router.get('/one/:id', paginate(blacklist), async(req, res) => {

    const resp = await blacklist.findById(req.params.id);

    res
        .status(200)
        .json({resp})
})

router.put('/update/:id', async(req, res) => {

    const result = await blacklist.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {new: true});

    res
        .status(200)
        .json({result, message: "message have been updated"})
});


//nodejs

router.delete('/:id', async (req, res) => {

    const deleted = await blacklist.findByIdAndDelete(req.params.id);

    res
        .status(200)
        .json({"message": ' doc deleted', deleted})
});;


router.patch('/ddd' ,(req,res) =>{




    console.log('test')
})

module.exports = router