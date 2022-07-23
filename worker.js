export default {
  fetch: req => {
    const url = new URL(req.url)
    const [user] = url.hostname.split('.')
    url.hostname = user + '.github.io'
    return fetch(url.toString(), req)
  }
}
