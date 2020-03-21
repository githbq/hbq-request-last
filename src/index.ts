export default function requestLast(fn) {
  let totalTimes = 0
  return function requestLastHandleFn(...args) {
    const times = ++totalTimes
    return new Promise((resolve, reject) => {
      fn.apply(this, args).then(result => {
        if (times === totalTimes) {
          resolve(result)
        }
      }, (e) => {
        if (times === totalTimes) {
          reject(e)
        }
      })
    })
  }
}
