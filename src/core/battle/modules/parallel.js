export default function createParallel() {
  let resolve
  const promise = new Promise(fn => {resolve = fn})
  return {promise, resolve}
}
