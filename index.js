#! /usr/bin/env node
import { program, Argument } from 'commander'
import chalk from 'chalk'
import data from './utils/data.js'
import Colors from './utils/colors.js'

import init from './commands/init.js'
import stats from './commands/stats.js'
import open from './commands/open.js'

import statusList from './commands/status/list.js'
import statusNew from './commands/status/new.js'
import statusDelete from './commands/status/delete.js'

import purlList from './commands/purl/list.js'
import purlNew from './commands/purl/new.js'
import purlDelete from './commands/purl/delete.js'

import pasteList from './commands/paste/list.js'
import pasteNew from './commands/paste/new.js'
import pasteDelete from './commands/paste/delete.js'
import pasteCopy from './commands/paste/copy.js'

import dnsList from './commands/dns/list.js'

import addressDirectory from './commands/addresses/directory.js'
import addressLookup from './commands/addresses/lookup.js'

if (process.argv.slice(2).length === 0)
{
console.log(chalk.hex(Colors.pramiPink).bold(`
♥ Welcome to the omg.lol cli
      ____     ____
  ,-""    "-.-"    ""-,
 /  __  ,  , ,  ,  __  \\
|  (  ) '--' '--' (  )  |
 \\  ""   ,     ,   ""  /
  ",      "---"      ,"
    ",             ,"
      "-,       ,-"
   sjw   "-,_,-"
`))
}

/**
 * Meta
*/
program
    .command('init <address> <apikey>')
    .description(chalk.hex(Colors.omgYellow).bold('Set your address and api key to access authorised endpoints'))
    .action(init)

program
    .command('whoami')
    .description('Check your settings for the CLI')
    .action(() => {
        console.log(chalk.magenta.bold(`👀 You are ${data.address()} and you have a valid API key`))
    })

program
    .command('stats')
    .description('Get count of members and addresses')
    .action(stats)

program
    .command('open <address>')
    .description('Open a page for an address (default: omg.lol)')
    .option('-s, --statuslog', 'Open status.lol page')
    .option('-w, --weblog', 'Open weblog.lol page')
    .option('-p, --paste', 'Open paste.lol page')
    .option('-m, --mastodon', 'Open profile on social.lol')
    .option('-p, --purls', 'Open url.lol page')
    .action(open)

/**
 * Statuses
 */
const status = program
    .command('status')
    .description('Interact with the statuslog')

status.command('list')
    .option('-a, --address [address]', 'Show statuses for an address')
    .option('-g, --global', 'List the global statuslog')
    .option('-l, --limit [limit]', 'How many statuses to show')
    .description('List statuses from the status log')
    .action(statusList)

status
    .command('new')
    .argument('emoji')
    .argument('<status...>')
    .description('Post a new status')
    .action(statusNew)

status
    .command('delete <statusid>')
    .description('Delete a status')
    .action(statusDelete)

/**
 * Addresses
 */
const address = program
    .command('address')
    .description('Check and fetch address info')

address
    .command('list')
    .description('Show the address directory')
    .action(addressDirectory)

address
    .command('lookup <address>')
    .description('Lookup info about an address')
    .action(addressLookup)

/**
 * PURLs
 */

const purl = program
    .command('purl')
    .description('Manage PURLs')

purl
    .command('list')
    .option('-a, --address [address]', 'Show PURLs for an address')
    .description('List PURLs')
    .action(purlList)

purl
    .command('new')
    .option('-l, --listed', 'Make the PURL public (default false)')
    .argument('name')
    .argument('url')
    .description('Create a new PURL')
    .action(purlNew)

purl
    .command('delete <name>')
    .description('Delete an existing PURL')
    .action(purlDelete)

/**
 * pastes
 */

const paste = program
    .command('paste')
    .description('Manage pastes')

paste
    .command('list')
    .option('-a, --address [address]', 'Show pastes for an address')
    .description('List pastes')
    .action(pasteList)

paste
    .command('new')
    .option('-l, --listed', 'Make the paste public (default false)')
    .argument('title')
    .argument('content')
    .description('Create a new paste')
    .action(pasteNew)

paste
    .command('copy <name>')
    .description('Copy the contents of a paste')
    .action(pasteCopy)

paste
    .command('delete <name>')
    .description('Delete an existing paste')
    .action(pasteDelete)

/**
 * DNS
 */

const dns = program
    .command('dns')
    .description('Manage DNS records')

dns
    .command('list')
    .description('List your DNS records')
    .action(dnsList)

program.parse()
