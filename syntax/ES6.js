/******************************** Trap ********************************/
/** 暂时性死区 */
/* todo 案例一 */
var tmp = 123;
if (true) {
    tmp = 'abc'; // ReferenceError，因为 let 命令使 tmp 变量绑定到当前语句块，并且 let 变量必须先声明后使用，所以报错
    let tmp;
}
/* todo 案例二 */
function bar(x = y, y = 2) {
    return [x, y];
}
bar(); // 报错，因为函数参数默认是 let 变量，并在出现时声明，y 在 x 变量之后出现，如果反过来就不报错了



/** todo Destructuring: 如果解构不成功，变量的值就等于 undefined */

/******************************** Operators ********************************
 * ===     // 绝对等于（值和类型均相等）
 * !==     // 绝对不等于（值和类型有一个不相等，或两个都不相等）
 * */




/******************************** Keywords ********************************/
/** var let */
var aa;
var a = void(5); // void 是 JavaScript 中非常重要的关键字，该操作符表示：计算一个表达式，但是不管结果如何都返回 undefined
typeof "John"                // 返回 string
"attributeName" in obj      // 判断一个对象是否有这个属性
delete obj.attributeName    // 删除对象的一个属性
var person = null;           // 值为 null(空), 但类型为对象
var person = undefined;     // 值为 undefined, 类型为 undefined

/** debugger */
debugger;   // JS 代码触发 debug 当浏览器打断点无效时使用

/** const 关键字修饰的变量，不能对其值做修改，否则报错。
 * @attention 变量分为 存值变量（基本类型的变量）， 存地址变量（即指针：对象/数组类型的变量）
 * */
const PI = 3.1415926; // PI 是 存值变量
PI = 2; // 该行报错，因为 PI 是 存值变量 ，该操作修改了 PI 变量的内容

const ary = [1, 2]; // ary 是 存地址变量
ary[0]= 2; // 该行不报错，因为该行代码并没有修改 ary 变量所保存的地址



/******************************** String ********************************/
/** todo JS 中表示一个字符 */
'\z' === 'z'  // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true

const b = `foo${a}bar`;  // ES6 中所有字符串都是用 ` 反引号

/******************************** Variable ********************************/
/** todo Variable: let, const, class 声明的变量不再是 window 对象的属性 */
var var0 = false; // var 关键字
let var3 = 'abc', var4 = 45.6; // let 命令声明的变量，只在 let 命令所在的代码块内有效；let 变量必须先声明后使用，且不允许重复声明
const PI = 3.1415926; // 声明一个 const 常量，对值类型，不能改变值；对引用类型，不能改变引用地址
const [a, b, c] = [1, 2, 3]; // 采用解构的方式声明多个 const 变量

function func(){}  // 声明一个 function 变量


import aa from module;
class Kasei{};


/******************************** FlowControl 流向控制 ********************************/
// if
if (false) {
    console.log('if');
} else if (true) {
    console.log('if else');
} else {
    console.log('else');
}


// switch
switch (param) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log(0);
}


// js 循环
outer:for(var i=0;;i++){
    inter:for(var j=0;;j++){
            break inter;
            break outer;
            continue inter;
            continue outer;
        }
}

// 遍历 obj 的 keyName
for(let key in obj){ // 遍历对象的 key 
    console.log(key);
}

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) { // 遍历对象的 key value，对象必须部署 Symbol.iterator 属性
    console.log(key + " is " + value);
}

// first is hello
// second is world


/* 遍历具有 Symbol.iterator 属性的 obj, 
 * 如果 obj 是 Generator 函数运行时生成的 Iterator 对象，那么不需要调用 Generator 的 next 方法就可以完成遍历
 * */
for(let value of obj){
    console.log(value);
}

/******************************** Function ********************************/
function func(){}
const arrowFunc = () => {};

/******************************** Generator ********************************/
function* genFunc(){
    yield expression1;
    yield expression2;
}

// async function 等价于 function* 
async function genFunc(){
    await expression1;
    await expression2;
}



/** todo iterate 迭代语法 */
/** ES5 语法：定义一个迭代器生成函数 */
function customNewGenerator(array) {
    var nextIndex = 0;
    return {
        next: function() {             // 由于 JS 闭包，该方法能访问定义时词法环境的上下文，即 nextIndex 变量
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {value: undefined, done: true};
        }
    };
}


/** ES6 语法：定义一个迭代器生成函数 */
function* createNewGenerator(){
    /** yield 关键字详解
     * result === iterator.next() === {value: val, done: false}
     * nextParm: 表示的是  iterator.next(param); 中的参数 param
     * */
    let nextParam = yield result;
    let nextParam = yield* [1,2,3]; // yield* 后面必须跟实现了 Iterator 接口的类型
}

/** 原生迭代器生成函数存在位置 */
let ary = [1,2,3];
let iter = ary[Symbol.iterator]();  // 获取一个原生对象的迭代器，相当于上面的迭代器生成函数
let iter = createNewGenerator();
let iter = customNewGenerator(ary);


/******************************** Module ********************************/
/** export import */
// named export: 一个模块可以导出 n 个
export let name1, name2, …, nameN; // 导出变量
export function functionName(){...}; // 导出方法
export class ClassName {...}; // 导出类
export name1; // 导出单个变量
export { name1, name2, …, nameN }; // 将多个变量封装成一个 obj，导出

// default export: 一个模块最多只有 1 个
export default expression; // 默认导出 expression 的计算结果
export default let name1, name2, …, nameN; // 默认导出 变量
export default function(){...} // 默认导出 方法
export default class {...} // 默认导出 类
export default { name1, name2, …, nameN }; // 将多个变量封装成一个 obj，并 default 导出
export {name1, name2 as default}; // name2 为 default 导出
       
// aggregating export: 聚合导出
export * from module;
export {name1, name2, ..., nameN} from module;
export {default, ...} from module;  // 聚合导出 module 的默认导出

import defaultExport from 'module-name';  // 导入指定模块，默认导出的内容
import * as myModule from 'module-name';  // 导入指定模块所有的导出，并绑定到 myModule 变量中
import {export1, export2} from 'module-name';  // 导指定模块指定的导出，并绑定到 export1 和 export2 变量上
                                       
                                       



