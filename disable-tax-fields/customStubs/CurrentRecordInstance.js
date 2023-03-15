define([], () => {
  const CurrentRecord = () => {}

  CurrentRecord.prototype.getValue = () => {}
  CurrentRecord.prototype.getField = () => {}
  CurrentRecord.prototype.getSublistField = () => {}
  CurrentRecord.type = undefined

  return new CurrentRecord()
})
