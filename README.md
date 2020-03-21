> 对异步函数，多次执行始终返回最后一次执行的结果，
解决慢执行结果覆盖最后一次请求结果的问题
 
## 安装
```
npm i request-last
```

## 使用  

```js
import requestLast from 'reqeust-last'   
{
  reqeust:requestLast(function (){
    return yourAsyncFunciton(/*...*/) 
  })
}
```

## 代码

```js
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
``` 
 
