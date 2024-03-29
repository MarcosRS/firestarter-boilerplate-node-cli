// bin/outside is  used if the user is going to install it globally "npm link"
const minimist = require('minimist')
const error = require('./utils/error')

module.exports = () => {
 
  const args = minimist(process.argv.slice(2))
  let cmd = args._[0] || 'help'
  
  console.log('process.argv', process.argv)
  console.log('args._ ', args._)

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }

  switch (cmd) {
    case 'today':
      require('./cmds/today')(args)
      break

    case 'version':
      require('./cmds/version')(args)
      break

    case 'help':
      require('./cmds/help')(args)
      break
    
    case 'forecast':
      require('./cmds/forecast')(args)
      break
    
    default:
      error(`"${cmd}" is not a valid command!`, true)
      break
  }
}