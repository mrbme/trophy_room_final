const express = require('express')
const next = require('next')

const requireHttps = require('./lib/https.js')
const removeWww = require('./lib/www.js')

const isDev = process.env.NODE_ENV !== 'production'
const app = next({ dev: isDev })
const handle = app.getRequestHandler()

const port = process.env.PORT || 3000

app.prepare().then(() => {
  const server = express()

  if (process.env.REQUIRE_SSL === 'yes') {
    server.use(requireHttps)
  }

  server.use(removeWww)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) {
      throw err
    }

    console.log(`> Ready and listening on port ${port}`)
  })
})
