import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../../utils/data.js'
import Colors from '../../utils/colors.js'

const list = async (options) => {
    const address = options.address || data.address()
    let limit = 15
    if (options.limit && !isNaN(parseInt(options.limit, 10)))
    {
        limit = parseInt(options.limit, 10)
    }

    const globalPath = 'https://api.omg.lol/statuslog'
    let path = `https://api.omg.lol/address/${address}/statuses/`
    if (options.global) path = globalPath

    const response = await fetch(path);
    const body = await response.json();

    if (!body.response.statuses || !body.response.statuses.length) {
        console.log(chalk.red(`❌ No statuses found ${options.global ? '' : `for ${address}`}`))
        return
    }

    body.response.statuses.slice(0, limit).forEach((status) => {
        const color = Colors.get()
        console.log(
            chalk[color].bold(`${status.emoji} ${status.content}`) +
            chalk[color](` ${status.relative_time}`) +
            chalk(options.global ? ` @${status.address}` : '') +
            chalk.gray(` [${status.id}]`)
        )
    });
}

export default list
