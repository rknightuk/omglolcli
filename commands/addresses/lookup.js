import fetch from 'node-fetch'
import chalk from 'chalk'

const lookup = async (address) => {
    const path = `https://api.omg.lol/address/${address}/info`

    const response = await fetch(path);
    const body = await response.json();

    if (body.request.status_code !== 200)
    {
        console.log(chalk.red.bold(`❌ No address found for @${address}`))
        return
    }

    console.log(chalk.green.bold(`⏳ ${body.response.registration.message.replace('This address', `@${address}`)}`))
    console.log(chalk.yellow.bold(`⏳ ${body.response.expiration.message.replace('This address', `@${address}`)}`))
    const isVerified = body.response.verification
    console.log(chalk.blue.bold(`${isVerified ? '✅' : '✖️'} @${address} ${body.response.verification ? 'is' : 'is not'} verified`))
}

export default lookup
