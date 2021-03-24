const  todoController =  require('../../controllers/todoController');
const todoModel = require('../../models/Todo');
const router = require('express').Router()
function paginate(model) {
    return async (req, res, next) => {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
  
      const result = {};
  // change model.length to model.countDocuments() because you are counting directly from mongodb
      if (endIndex < (await model.countDocuments().exec())) {
        result.next = {
          page: page + 1,
          limit: limit,
        };
      }
      if (startIndex > 0) {
        result.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      try {
  //       .limit(limit).skip(startIndex) replaced the slice method because 
  //       it is done directly from mongodb and they are one of mongodb methods
        result.results = await model.find().limit(limit).skip(startIndex);
        res.paginatedResult = result;
        next();
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
    };
  }



  router.post('/',todoController.create);
  router.get('/' ,paginate(todoModel),todoController.getAll);
  router.get('/:id' ,todoController.getOne);
  router.patch('/one/:id' ,todoController.UpdateOne);
  router.delete('/del/:id' ,todoController.destroy)
router.delete('/all' , todoController.destroyAll)


  module.exports = router
