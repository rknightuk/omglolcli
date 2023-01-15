import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../../utils/data.js'

const newStatus = async (emoji, status) => {
    const address = data.address()
    const response = await fetch(`https://api.omg.lol/address/${address}/statuses/`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${data.apikey()}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({'emoji': emoji, 'content': status.join(' ')}),
    })
    const body = await response.json();

    console.log(chalk.green(`✅ Posted status to ${body.response.url}`))
}

export default newStatus
