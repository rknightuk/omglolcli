import Conf from 'conf'
const KEY = 'omglolapi'

const config = new Conf()

export default {
    address: () => {
        return config.get(KEY).address
    },
    apikey: () => {
        return config.get(KEY).apikey
    },
    set: (address, apikey) => {
        config.set(KEY, { address, apikey })
    }
}
