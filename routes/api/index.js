const router = require('express').Router()
const chalk  =  require('chalk');
const verify = require('./auth/Veryfy')

router.use('/api/dashboard' ,require('./dashboards'))
router.use('/api/users' , require('./users'));
router.use('/api/blacklist',require('./blacklist'))
console.log(chalk.red('all apis ready')) 

module.exports = router ;