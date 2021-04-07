class Fetcher {
  constructor(){
    if (!Fetcher.instance) {
      Object.defineProperty(this, "events", { writable: false, configurable: false, value: {
        'fetchStart': () => null,
        'fetchEnd': () => null,
        'on': (event, cb) => this.events[event] = cb,
      }})

      Object.defineProperty(this, "fetch", { writable: false, configurable: false, value: (url, method, params) => {
        this.events.fetchStart()
        return fetch(url, { method: method || 'GET', body: JSON.stringify(params) })
          .then(async (res) => {
            this.events.fetchEnd()
            if (res.status === 500) {
              throw await res.json()
            }
            return res.json()
          })
        }
      })

      Fetcher.instance = this
    }
  }
}

const instance = new Fetcher()
Object.freeze(instance)

export const fetcher = instance.fetch

export default instance