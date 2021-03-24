const router = require('express').Router()
const chalk  =  require('chalk');


router.use('/api/todo' ,require('./TodoRoute'))

console.log(chalk.red('all apis ready')) 

module.exports = router ;