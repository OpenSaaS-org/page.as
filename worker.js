export default {
  fetch: req => {
    const url = new URL(req.url)
    const [user] = url.hostname.split('.')
    url.hostname = user + '.github.io'
    const res = await fetch(url.toString(), req)
    const newRequest = new Request(url.toString(), {
        redirect: 'follow',
    })
    return fetch(newRequest)
  }
}
