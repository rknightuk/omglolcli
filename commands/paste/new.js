import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../../utils/data.js'

const newPaste = async (title, content, options) => {
    const address = data.address()
    const response = await fetch(`https://api.omg.lol/address/${address}/pastebin/`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${data.apikey()}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({'title': title, 'content': content, listed: options.listed }),
    })
    const body = await response.json();

    console.log(chalk.green(`✅ Purl created https://${address}.paste.lol/${body.response.title}`))
}

export default newPaste
