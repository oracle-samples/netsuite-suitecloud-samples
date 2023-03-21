define([], () => {
  const log = function () {}

  log.prototype.debug = () => {}

  log.prototype.error = () => {}
    
  return new log()
})
