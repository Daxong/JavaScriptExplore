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
console.log(f(1,2,3))
/**
 * Arguments是一个类似数组但不是数组的对象，
 * 说它类似数组是因为其具有数组一样的访问性质及方式，
 * 可以由arguments[n]来访问对应的单个参数的值，并拥有数组长度属性length。
 */