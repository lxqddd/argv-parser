interface IOptions {
  [key: string]: string
}

export class Option {
  private _options: IOptions = {}

  setOption (option: string, desc: string) {
    this.options[option] = desc
    console.table(this.options)
    return this
  }

  private set options (v) {
    this._options = v
  }

  private get options () {
    return this._options
  }
}
