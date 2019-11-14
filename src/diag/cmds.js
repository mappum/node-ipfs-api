'use strict'

const configure = require('../lib/configure')

module.exports = configure(({ ky }) => {
  return async (options) => {
    options = options || {}

    const searchParams = new URLSearchParams(options.searchParams)
    if (options.verbose != null) searchParams.set('verbose', options.verbose)

    const data = await ky.get('diag/cmds', {
      timeout: options.timeout,
      signal: options.signal,
      headers: options.headers,
      searchParams
    }).json()

    return data
  }
})
