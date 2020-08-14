const contentful = require('contentful')

// use default environment config for convenience
// these will be set via 'env' property in nuxt.config.js

const config = {
  space: 'mwdjmaccisk7',
  accessToken: 'VIWN95qg_aCDvv8xohjj0h1E0FvfEz87YbcGR2eM7FQ',
}

// export 'createClient' to use it in page components

module.exports = {
  createClient() {
    return contentful.createClient(config)
  },
}
