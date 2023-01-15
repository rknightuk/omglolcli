import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../../utils/data.js'

const deletePurl = async (purlName) => {
    const address = data.address()
    const response = await fetch(`https://api.omg.lol/address/${address}/purl/${purlName}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${data.apikey()}`,
            "Content-Type": "application/json"
        },
    })
    const body = await response.json();

    console.log(chalk.green(`🗑️ PURL deleted!`))
}

export default deletePurl
