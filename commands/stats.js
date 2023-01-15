import fetch from 'node-fetch'
import chalk from 'chalk'

const stats = async (address, apikey) => {
    const response = await fetch(`https://api.omg.lol/service/info`)
    const body = await response.json()

    if (body.request.status_code != 200)
    {
        console.log(chalk.red('❌ Unable to access service info'))
        return
    }

    console.log(chalk.green(`${body.response.members} members`))
    console.log(chalk.yellow(`${body.response.addresses} addresses`))
    console.log(chalk.blue(`${body.response.profiles} profiles`))
}

export default stats
