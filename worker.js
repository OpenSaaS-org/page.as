export default {
  fetch: async req => {
    const url = new URL(req.url)
    const [user] = url.hostname.split('.')
    url.hostname = user + '.github.io'
    return fetch(new Request(url.toString(), redirect: 'follow' })
  }
}
