export default function requestLast(fn) {
  let totalTimes = 0
  return function requestLastHandleFn(...args) {
    const times = ++totalTimes
    return new Promise((resolve) => {
      fn.apply(this, args).then(result => {
        if (times === totalTimes) {
          resolve(result)
        }
      })
    })
  }
}
