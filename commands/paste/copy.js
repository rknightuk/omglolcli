import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../../utils/data.js'
import clipboardy from 'clipboardy'

const list = async (pasteName) => {
    const path = `https://api.omg.lol/address/${data.address()}/pastebin/${pasteName}`
    const response = await fetch(path);
    const body = await response.json();

    if (!body.response.paste) {
        console.log(chalk.red(`❌ Paste not found`))
        return
    }

    clipboardy.writeSync(body.response.paste.content)
    console.log(chalk.green.bold(`📋 Contents of "${pasteName}" copied to clipboard!`))
}

export default list

