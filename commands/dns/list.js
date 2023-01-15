import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../../utils/data.js'
import Colors from '../../utils/colors.js'

const list = async () => {
    const path = `https://api.omg.lol/address/${data.address()}/dns/`
    const response = await fetch(path, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${data.apikey()}`,
            "Content-Type": "application/json"
        },
    });
    const body = await response.json();

    if (!body.response.dns || !body.response.dns.length) {
        console.log(chalk.red(`❌ No DNS records found`))
        return
    }

    body.response.dns.forEach((dns) => {
        console.log(
            chalk[Colors.get()].bold(dns.type) +
            ' ' +
            chalk[Colors.get()].bold(dns.name) +
            ' ' +
            chalk[Colors.get()].bold(dns.data) +
            ' ' +
            chalk[Colors.get()].bold(`TTL: ${dns.ttl}`) +
            ' ' +
            chalk.grey.bold(`[${dns.id}]`)
        )
        Colors.reset()
    });
}

export default list
