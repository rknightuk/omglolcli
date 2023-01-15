import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../../utils/data.js'

const newPurl = async (name, url, options) => {
    const address = data.address()
    const response = await fetch(`https://api.omg.lol/address/${address}/purl/`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${data.apikey()}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({'name': name, 'url': url, listed: options.listed }),
    })
    const body = await response.json();

    console.log(chalk.green(`✅ Purl created "${body.response.name}" => ${body.response.url}`))
}

export default newPurl
