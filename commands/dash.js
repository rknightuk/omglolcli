import chalk from 'chalk'
import { exec } from 'child_process'
import data from '../utils/data.js'

const opening = (path) => {
    console.log(chalk.magenta.bold(`Opening ${path}...`))
}

const openDashboard = (options) => {
    let path = `https://home.omg.lol/address/${data.address()}/`
    if (options.statuslog)
    {
        path += 'statuslog'
    } else if (options.weblog)
    {
        path += 'weblog'
    } else if (options.paste)
    {
        path += 'pastebin'
    } else if (options.url)
    {
        path += 'purls'
    } else if (options.now)
    {
        path += 'now'
    } else if (options.email)
    {
        path += 'email'
    } else if (options.dns)
    {
        path += 'dns'
    } else if (options.switchboard)
    {
        path += 'switchboard'
    } else {
        path += 'web'
    }


    opening(path)
    exec(`open ${path}`)
}

export default openDashboard
