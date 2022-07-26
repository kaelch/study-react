## Init

### 1. export default
```javascript
// helper.js
function helpful(){
    console.log('this is very helpful');
}

export default helpful;
```
```javascript
import helpful from './helpers'; // 1
import anything from './helpers' // 2
```
* `export default`를 사용하면 다른 이름으로 사용할 수 있습니다.

### 2. export { ... }
```javascript
function helpful(){
    console.log('this is very helpful');
}


function sort(){
    console.log('this is very Sort');
}

function sing(){
    console.log('this is very Sing');
}

export { helpful, sort, sing };
```
```javascript
import { helpful, sort, sing } from './helpers';
```
* `export { ... }` 처럼 객체를 `export`할 때는 객체 형태로 불러와야 합니다.

### export default + export { ... }
```javascript
function helpful(){
    console.log('this is very helpful');
}


function sort(){
    console.log('this is very Sort');
}

function sing(){
    console.log('this is very Sing');
}

export default helpful;
export { sing, sort };
```
```javascript
import helpful, { sing, sort } from "./helpers";
```