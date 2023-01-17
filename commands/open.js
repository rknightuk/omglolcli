import chalk from 'chalk'
import { exec } from 'child_process'

const opening = (path) => {
    console.log(chalk.magenta.bold(`Opening ${path}...`))
}

const openAddress = (address, options) => {
    let path = 'omg.lol'
    if (options.mastodon)
    {
        opening(`https://social.lol/@${address}`)
        exec(`open https://social.lol/@${address}`)
        return
    } else if (options.statuslog)
    {
        path = 'status.lol'
    } else if (options.weblog)
    {
        path = 'weblog.lol'
    } else if (options.paste)
    {
        path = 'paste.lol'
    } else if (options.url)
    {
        path = 'url.lol'
    } else if (options.now)
    {
        path = 'omg.lol/now'
    }


    opening(`https://${address}.${path}`)
    exec(`open https://${address}.${path}`)
}

export default openAddress
