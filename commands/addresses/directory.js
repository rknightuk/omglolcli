import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../../utils/data.js'
import Colors from '../../utils/colors.js'

const logCount = (count, type) => {
    console.log(chalk.hex(Colors.pramiPink).bold(`${count} addresses in the ${type}`))
}

const formatGarden = (nows) => {
    logCount(nows.length, 'garden')

    nows.forEach((now) => {
        const color = Colors.get()
        console.log(
            chalk[color].bold(`@${now.address}`) +
            ' / ' +
            chalk[color].bold(now.url) +
            ' ' +
            chalk.gray.bold(now.updated.relative_time) +
            chalk.hex(Colors.pramiPink).bold(`${now.address === data.address() ? ' 👈 This is you!' : ''}`)
        )
    })
}

const formatDirectory = (addresses) => {
    logCount(addresses.length, 'directory')

    addresses.forEach((address) => {
        console.log(
            chalk[Colors.get()].bold(`@${address}`) +
            chalk.hex(Colors.pramiPink).bold(`${address === data.address() ? ' 👈 This is you!' : ''}`)
        )
    })
}

const directory = async (options) => {
    const isGarden = options.garden
    let path = `https://api.omg.lol/directory`
    if (isGarden)
    {
        path = 'https://api.omg.lol/now/garden'
    }

    const response = await fetch(path);
    const body = await response.json();

    return isGarden ? formatGarden(body.response.garden) : formatDirectory(body.response.directory)

    body.response.directory;
}

export default directory
