const ora = require('ora');
const getWeather = require('../utils/weather');
const getLocation = require('../utils/location');

module.exports = async (args) => {
  const spinner = ora().start()
  console.log(await getLocation())

//   try {
//     const location = args.location || args.l || getLocation()
//     const weather = await getWeather(location)

//     spinner.stop()

//     console.log(`Current conditions in ${location}:`)
//     console.log(`\t${weather.condition.temp}° ${weather.condition.text}`)
//   } catch (err) {
//     spinner.stop()

//     console.error(err)
//   }
}