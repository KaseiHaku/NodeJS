/** TODO Function Definition */
var func1 = function(x){return x+6;};
var func2 = (x) => x + 6;
var func3 = new Function("argName1", "argName2", 'alert("Hello " + sName + sMessage);');



/** TODO Closure 闭包
 * 指的是函数可以使用函数之外定义的变量，相当于函数的环境变量，但是该环境变量是根据函数创建时的词法环境决定的。
 * 词法环境：就是源代码上下文环境，即函数创建语句所在的代码位置能访问到的所有变量
 * */
function closureB(){
    alert(msg);
}
function closureA(){
    let msg = 'fa';
    function closureC(){
        alert(msg);
    }

    closureC(); // 正确，因为 C 函数的定义语句的词法环境就能访问 msg 变量
    closureB(); // 报错，因为 B 函数的定义语句的词法环境无法访问 msg 变量
}

/** TODO 嵌套函数变量查询机制
 * 内嵌函数（嵌套类）:实际上，在 JavaScript 中，所有函数都能访问它们上一层的作用域。JavaScript 支持嵌套函数。嵌套函数可以访问上一层的函数变量。
 * */
function add() {
    kasei = "haku";  // 因为当前函数局部变量中不存在 kasei，所以会从外层找，如果到顶层（window 实例）还没有，那么在 window 实例中添加一个属性 kasei，即全局变量 kasei
    var counter = 0;
    function plus() {counter += 1;}
    plus();
    return counter;
}

/** TODO arguments 对象 */
function findMax() {

    var i, max = 0;
    for (i = 0; i < arguments.length; i++){
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
var max = findMax(1, 123, 500, 115, 44, 88);



/** todo JS 函数使用方式总结 ***/
    
    /** 函数使用方式一：函数调用 */
    function beCalled(){
        console.log(this); // 严格模式下为：this === undefined; 不严格模式下为：this === window;
        return 3;
    }
    beCalled();  // 函数调用
    
    
    /** 函数使用方式二：方法调用 */
    var obj = {
        beCalled: function(){
            console.log(this); 
            return 3;
        }
    };
    obj.beCalled();  // 方法调用
    
        
    /** 函数使用方式三：构造器调用 */
    function constructorCall(a){
        this.a = a;
        return {}; // 构造函数显示的返回对象
    }
    var obj = new constructorCall('aa'); // 构造器调用
    
    
    /** 函数使用方式四：间接调用
     * call()和apply()方法可以用来间接地调用函数，这两个方法都允许显式指定调用所需的 this 值，也就是说
     * 任何函数可以作为任何对象的方法来调用，哪怕这个函数不是那个对象的方法 
     * bind() 方法也可
     * */
    function indirectCall(x, y){
    
    }
    var obj = {};
    indirectCall.call(obj, x, y); // 间接调用，
    indirectCall.apply(obj, [x, y]);
    let bindedFunc = indirectCall.bind(obj); // bind 返回一个函数备用

    /** 函数使用方式五：自调用函数（匿名内部类） */
    (function(arg_0){})(arg_1);//解释：前半部定义一个未命名的函数，然后最后的括号表示直接调用这个未命名函数,arg_1是实参，值传递给arg_0


/** todo JS 命名函数、匿名函数、箭头函数的区别
 * 命名函数：在函数定义的时候就绑定了函数的执行环境（Context），执行环境可以被 call() apply() bind()  let newFun = namedFunc; 改变
 * 匿名函数：在函数运行时才绑定函数的执行环境，相当于 let newFun = function(){}; 绑定的时机在 newFun(); 的时候
 * 箭头函数：在函数定义时绑定的是父级语法环境中的 this，如果父级 this 改变，那么箭头函数的 this 随之改变
 * */
    





    
