import moment from 'moment'

export default (db, result, message, author, type, cb = () => {}) => {
  if (result) {
    let currentTime = moment().format('DD.MM.YYYY HH:MM')
    if (!result.actions) result.actions = []
    result.actions.unshift({
      type,
      message,
      author,
      date: currentTime
    })
    const newValues = {$set: { actions: result.actions, lastAction: currentTime }}
    db.collection('users').updateOne({ email: result.email }, newValues, err => {
      if (err) throw err
      cb(result)
    })
  }
}
