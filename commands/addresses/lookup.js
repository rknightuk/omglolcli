import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../../utils/data.js'

const lookup = async (address) => {
    const path = `https://api.omg.lol/address/${address}/info`

    const isSelf = data.address() === address

    const fetchOptions = isSelf ? {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${data.apikey()}`,
            "Content-Type": "application/json"
        },
    } : {}

    const response = await fetch(path, fetchOptions);
    const body = await response.json();

    if (body.request.status_code !== 200)
    {
        console.log(chalk.red.bold(`❌ No address found for @${address}`))
        return
    }

    console.log(chalk.green.bold(`⏳ ${body.response.registration.message.replace('This address', `@${address}`)}`))
    let expiration = `⏳ ${body.response.expiration.message.replace('This address', `@${address}`)}`
    if (isSelf)
    {
        expiration = `${expiration.replace('.', '')} on ${body.response.expiration.rfc_2822_time}`
    }
    console.log(chalk.yellow.bold(expiration))
    const isVerified = body.response.verification
    console.log(chalk.blue.bold(`${isVerified ? '✅' : '✖️'} @${address} ${body.response.verification ? 'is' : 'is not'} verified`))
}

export default lookup
