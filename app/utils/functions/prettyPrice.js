export default str =>
  str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
