export default (
  (api, body) => {
    fetch(`http://aapi.ddlass.com${ api }`, { body: JSON.stringify(body), method: 'post', headers: { 'Content-Type': 'application/json' } }).then(res => res.json())
  }
)
