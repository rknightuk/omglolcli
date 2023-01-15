import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../../utils/data.js'

const deleteStatus = async (statusid) => {
    const address = data.address()
    const response = await fetch(`https://api.omg.lol/address/${address}/statuses/${statusid}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${data.apikey()}`,
            "Content-Type": "application/json"
        },
    })
    await response.json();

    console.log(chalk.green(`🗑️ Status deleted!`))
}

export default deleteStatus
