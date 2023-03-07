define([], () => {
  const log = () => {}

  log.prototype.error = () => {}

  // eslint-disable-next-line new-cap
  return new log()
})
