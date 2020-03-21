> 对异步请求函数，多次请求始终返回最后一次执行的结果，
解决慢请求覆盖最后一次请求结果的问题

![my love](./logo.png)   

## 安装
```
npm i request-last
```

## 使用  

```js
import requestLast from 'reqeust-last'   
{
  reqeust:requestLast(function (){
    return ajax.get(/*...*/) 
  })
}
```

## 代码

```js
export default function requestLast(fn) {
  let totalTimes = 0;
  return async function requestLastHandleFn(...args) {
    const times = ++totalTimes;
    return new Promise((resolve) => {
      fn.apply(this, args).then(result => {
        if (times === totalTimes) {
          resolve(result);
        }
      });
    });
  };
} 
``` 
 
