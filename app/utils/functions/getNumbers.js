export default (start, end) => {
  const numbers = []
  let i = start
  do {
    numbers.push(i)
    i += 1
  } while (i < end)
  return numbers
}
