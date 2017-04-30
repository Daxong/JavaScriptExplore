/**
 * Created by ilove on 30/04/2017.
 */
function check(args){
    var actual =args.length//args非数组  为类数组对象
    console.log(actual)
    var arg=check.arguments[0];
    console.log("arg: "+arg);
    console.log("check() " +check.length)
    var expected = args.callee.length;
    if(actual !== expected)
        throw Error("encounter error");
}
function f(x,y,z) {
    check(arguments);//传入的为f()的arguments arguments为Function隐含参数
    return x+y+z;
}

/**
 * Arguments是一个类似数组但不是数组的对象，
 * 说它类似数组是因为其具有数组一样的访问性质及方式，
 * 可以由arguments[n]来访问对应的单个参数的值，并拥有数组长度属性length。
 */

/**
 * call()方法
 * f.call(o)功能类似于
 *  o.m = f; //将f存储为o的临时方法
 *  o.m();   //调用m，不穿入参数
 *  delete o.m //将临时方法删除
 */
var o={};
//对于call()，第一个参数调用上下文实参之后的所有实参就是要传入待调用函数的值
//比如，以对象o的方法形式调用函数f()，传入f参数
console.log(f.call(o,1,2,3)+ "  call()");

/**
 * apply()和call()类似，但传入实参以数组形式,可以是类数组 也可以是真是数组
 */
// f.apply(o,[1,2,3]);
