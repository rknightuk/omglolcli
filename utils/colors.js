class Colors {
    constructor()
    {
        this.pramiPink = '#FF69AD'
        this.omgYellow = '#FFE066'
        this.index = 0
        this.colors = [
            'green',
            'yellow',
            'blue',
            'magenta',
            'cyan',
        ]
    }

    get() {
        const color = this.colors[this.index]
        this.index++
        if (this.index + 1 === this.colors.length)
        {
            this.reset()
        }
        return color
    }

    reset() {
        this.index = 0
    }
}

export default new Colors()
