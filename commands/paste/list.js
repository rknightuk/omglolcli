import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../../utils/data.js'
import Colors from '../../utils/colors.js'

const list = async (options) => {
    const address = options.address || data.address()
    const path = `https://api.omg.lol/address/${address}/pastebin/`
    const response = await fetch(path);
    const body = await response.json();

    if (!body.response.pastebin.length) {
        console.log(chalk.red(`❌ No pastes found for ${address}`))
        return
    }

    body.response.pastebin.forEach((paste) => {
        console.log(
            chalk[Colors.get()].bold(`https://${address}.paste.lol/${paste.title}`) +
            chalk.grey(` ${new Date(paste.modified_on * 1000).toDateString()}`)
        )
    });
}

export default list
