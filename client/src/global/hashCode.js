export default str => {
  let hash = 0
  let chr
  str.toString()
  if (str.length === 0) return hash
  for (let i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + chr
    hash |= 0
  }
  return hash
}
