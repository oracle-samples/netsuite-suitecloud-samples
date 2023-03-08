define([], () => {
  const CurrentRecord = () => {}

  CurrentRecord.prototype.getValue = () => {}
  CurrentRecord.prototype.setValue = () => {}
  CurrentRecord.id = undefined
  CurrentRecord.type = undefined

  return new CurrentRecord()
})
