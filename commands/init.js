import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../utils/data.js'

const init = async (address, apikey) => {
    console.log(chalk.magenta('👀 Validating API key...'))

    const response = await fetch(`https://api.omg.lol/address/${address}/dns`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${apikey}`,
            "Content-Type": "application/json"
        }
    })
    const body = await response.json();

    if (body.request.status_code != 200)
    {
        console.log(chalk.red('❌ Invalid API key, aborting...'))
        return
    }

    data.set(
        address,
        apikey
    )

    console.log(chalk.green(`✅ API key valid!`))
}

export default init
