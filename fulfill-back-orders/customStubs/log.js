// eslint-disable-next-line no-undef
define([], () => {
  const log = () => {}
  log.prototype.error = () => {}
  log.prototype.audit = () => {}
  // eslint-disable-next-line new-cap
  return new log()
})
