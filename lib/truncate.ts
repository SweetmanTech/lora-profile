const truncate = (str) => {
  if (str.length <= 8) return str
  return str.slice(0, 5) + '...' + str.slice(-4)
}

export default truncate
