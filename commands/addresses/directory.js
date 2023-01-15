import fetch from 'node-fetch'
import chalk from 'chalk'
import data from '../../utils/data.js'
import Colors from '../../utils/colors.js'

const directory = async () => {
    const path = `https://api.omg.lol/directory`

    const response = await fetch(path);
    const body = await response.json();

    console.log(chalk.hex(Colors.pramiPink).bold(`${body.response.directory.length} addresses in the directory`))

    body.response.directory.forEach((address) => {
        console.log(
            chalk[Colors.get()].bold(`@${address}`) +
            chalk.hex(Colors.pramiPink).bold(`${address === data.address() ? ' 👈 This is you!' : ''}`)
        )
    });
}

export default directory
