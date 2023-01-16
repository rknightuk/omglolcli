import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../../utils/data.js'
import Colors from '../../utils/colors.js'

const list = async (options) => {
    const address = options.address || data.address()
    const path = `https://api.omg.lol/address/${address}/pastebin/`
    const fetchOptions = !options.address ? {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${data.apikey()}`,
            "Content-Type": "application/json"
        },
    } : {}
    const response = await fetch(path, fetchOptions);
    const body = await response.json();

    if (!body.response.pastebin.length) {
        console.log(chalk.red(`❌ No pastes found for ${address}`))
        return
    }

    body.response.pastebin.forEach((paste) => {
        console.log(
            chalk[Colors.get()].bold(`https://${address}.paste.lol/${paste.title}`) +
            chalk.grey(` ${new Date(paste.modified_on * 1000).toDateString()} - ${paste.listed ? 'public' : 'private'}`)
        )
    });
}

export default list
