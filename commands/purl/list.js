import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../../utils/data.js'
import Colors from '../../utils/colors.js'

const list = async (options) => {
    const address = options.address || data.address()
    const path = `https://api.omg.lol/address/${address}/purls/`
    const response = await fetch(path);
    const body = await response.json();

    if (!body.response.purls.length) {
        console.log(chalk.red(`❌ No PURLs found for ${address}`))
        return
    }

    body.response.purls.forEach((purl) => {
        console.log(
            chalk[Colors.get()].bold(`https://${address}.omg.lol/${purl.name} (${purl.counter})`) +
            ' ' +
            chalk.grey.bold(`${purl.url}`)
        )
    });
}

export default list
