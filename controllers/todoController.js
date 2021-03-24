const Todo = require('../models/Todo');


exports.create =  async (req,res)=>{
    try {

         const todo = await  new Todo(req.body).save();

          res.status(201).send({todo})
        
    } catch (error) {

        res.status(500).send({err:err.message})
        
    }

}


exports.getAll = async (req ,res) =>{



     try {

        const todo =  await Todo.find({});


        res.status(200).send({content:todo,totalElements:todo.length})


         
     } catch (error) {

        
        res.status(500).send({err:err.message})
         
     }
}



exports.getOne = async (req,res) =>{

    try {

        const todo =  await Todo.findById(req.params.id);

        res.send(todo)
        
    } catch (error) {
        res.status(500).send({err:err.message})
    }


}



exports.UpdateOne =  async (req ,res) =>{


 const update  = req.body;

    try {

        const todo =  await Todo.findByIdAndUpdate(req.params.id , {
            $set: update
        }, {new: true});


        res.send({message:todo})
        
    } catch (error) {

        res.status(500).send({err:err.message})
        
    }
}



exports.destroy = async function (req, res) {
    try {
        const id = req.params.id;
     
       
        await Todo.findByIdAndDelete(id);
        res
            .status(200)
            .json({message: 'User has been deleted'});
    } catch (error) {
        res
            .status(500)
            .json({message: error.message});
    }
};


exports.destroyAll = async function (req, res) {
    try {
        await Todo.deleteMany({});
        res
            .status(200)
            .json({message: 'Docs has been deleted'});
    } catch (error) {
        res
            .status(500)
            .json({message: error.message});
    }
};


exports.changeStatus = async (req,res) =>{

    let id = req.params.id ;
    let bool = req.params.bool ;
    
    try {
    
    
        const school = await Todod.findByIdAndUpdate(id, {
            $set:{aproved:bool}
        }, {new: true});
    
        res.send({message:'Updated',school})
        
    } catch (error) {
    
    
        res.send({message:'there was an error'})
        
    }
    
    }