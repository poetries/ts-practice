"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 'poetries';
var age = 12;
var isFlag = false;
// 数组
// 这是一个字符串数组，只能往里面放字符串，写别的类型会报错
var persion = ['poetries', 'jing'];
// 另一个写法 
var persions = ['poetries', 'jing'];
// 如果数组里放对象呢
var persionObject = [{ name: 'poetries', age: 22 }];
var persionObjects = [{ name: 'poetries', age: 22 }];
// 在数组中放string、number、boolean、object
var arr = [22, 'test', true, { name: 'poetries' }];
// 数组中放什么都可以
var arrAny = ['test', 12, false];
// 元组类型tuple
// 什么是元组类型？其实元组是数组的一种
var per = ['poetries', 22, { love: 'coding' }];
// 枚举类型enum
var sex;
(function (sex) {
    sex["BOY"] = "\u7537\u5B69";
    sex["GIRL"] = "\u5973\u5B69";
})(sex || (sex = {}));
console.log(sex);
var orderStatus;
(function (orderStatus) {
    orderStatus["WAIT_FOR_PAY"] = "\u5F85\u652F\u4ED8";
    orderStatus["UNDELIVERED"] = "\u5B8C\u6210\u652F\u4ED8\uFF0C\u5F85\u53D1\u8D27";
    orderStatus["DELIVERED"] = "\u5DF2\u53D1\u8D27";
    orderStatus["COMPLETED"] = "\u5DF2\u786E\u8BA4\u6536\u8D27";
})(orderStatus || (orderStatus = {}));
// any
var btn = document.getElementById('btn');
btn.style.color = "blue";
// null undefined类型
// (string | number | null | undefined) 相当于这几种类型
// 是 string 或 number 或 null 或 undefined
var str;
str = 'poetries';
str = 28;
str = null;
str = undefined;
// void 类型
// void 不能再函数里写return
// 怎么理解叫没有返回值呢？此时我们给函数return一个值
function say(name) {
    console.log('hello:', name);
    // return "ok" 会报错
    return undefined;
    return; //不会报错
}
say('poetries');
// 返回一个字符串类型
function say1(name) {
    return 'ok';
}
// never类型
var job;
function error(message) {
    throw new Error(message);
}
error('errorMsg');
function loop() {
    while (true) {
        console.log("陷入死循环啦");
    }
}
loop();
function sayOk() {
    return 'ok';
}
// 函数 ====
// 函数是这样定义的
// 形参和实参一一对应，完全一样
function sayHello(name, age) {
    console.log('hello', name, age);
}
sayHello('poetries', 22);
// 形参和实参要完全一样，如想不一样，则需要配置可选参数，可选参数放在后面
// // 可选参数，用 ？ 处理，只能放在后面
function sayHelloToYou(name, age) {
    console.log('hello', name, age);
}
sayHelloToYou('poetries');
// 那么如何设置默认参数呢？
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
    console.log(url, method);
}
// 那么如何设置剩余参数呢？可以利用扩展运算符
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return eval(args.join("+"));
}
var total = sum(1, 2, 3, 4, 5);
console.log(total);
function eating(name) {
    console.log(name);
}
eating("hello poetries");
eating(22);
// 四、类
// ts 写法
// 跟es6非常像 没有太大区别
var Persion = /** @class */ (function () {
    function Persion(name, age) {
        // this.name和this.age 必须先在前面声明好类型
        // name: string
        // age: number
        this.name = name;
        this.age = age;
    }
    // 原型方法
    Persion.prototype.say = function () {
        return 'hello poetries';
    };
    return Persion;
}());
var p = new Persion('poetries', 22);
// 类的继承
// 和es6也是差不多
var Parent = /** @class */ (function () {
    function Parent(name, age) {
        this.name = name;
        this.age = age;
    }
    Parent.prototype.say = function () {
        return 'hello poetries';
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age, childName) {
        var _this = _super.call(this, name, age) || this;
        _this.childName = childName;
        return _this;
    }
    Child.prototype.childSay = function () {
        return this.childName;
    };
    return Child;
}(Parent));
var child = new Child('poetries', 22, '静观流叶');
console.log(child);
// 类的修饰符
var Parents = /** @class */ (function () {
    // 简写
    // constructor(public name:string,protected age:number,private money:number)
    function Parents(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Parents.prototype.getName = function () {
        return this.name;
    };
    Parents.prototype.getAge = function () {
        return this.age;
    };
    Parents.prototype.getMoney = function () {
        return this.money;
    };
    return Parents;
}());
var pare = new Parents('poetries', 22, 3000);
console.log(pare.name);
// console.log(pare.age)  报错
// console.log(pare.money) 报错
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    // 类的静态方法
    Person2.say = function () {
        console.log('hello poetries');
    };
    // 类的静态属性
    Person2.name1 = 'poetries';
    return Person2;
}());
var per2 = new Person2();
Person2.say(); // hello poetries
// per2.say() 报错
// 抽象类
// 关键字 abstract抽象
// 定义抽象类
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
// 需要注意的是这个Animal是不能实例化的
// let animal = new Animal() // 报错
// // 抽象类的抽象方法，意思就是，需要在继承这个抽象类的子类中
// 实现这个抽象方法，不然会报错
// 报错，因为在子类中没有实现eat抽象方法
// class Person4 extends Animal{
//     test(){
//         console.log("吃米饭")
//     }
// }
// Dog类继承Animal类后并且实现了抽象方法eat，所以不会报错
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function () {
        console.log("吃骨头");
    };
    return Dog;
}(Animal));
// 接口
// 接口规范对象
//假设我们需要获取用户信息
// 我们通过这样的方式 规范必须传name和age的值
function getUserInfo(user) {
    console.log(user.name, user.age);
}
getUserInfo({ name: 'poetries', age: 22 });
// 这样看挺完美的， 那么问题就出现了，如果我另外还有一个方法，也是需要这个规范呢？
function getUserInfo1(user) {
    console.log(user.name + " " + user.age);
}
function getInfo(user) {
    console.log(user.name + " " + user.age);
}
getUserInfo1({ name: "poetries", age: 22 });
getInfo({ name: "poetries", age: 22 });
// 然后把这个接口 替换到我们需要复用的地方
function getUserInfo2(user) {
    console.log(user.name, user.age);
}
function getInfo2(user) {
    console.log(user.name, user.age);
}
getUserInfo2({ name: "poetries", age: 22 });
getInfo2({ name: "poetries", age: 22 });
function getUserInfo3(user) {
    console.log(user.name + " " + user.age + " " + user.city);
}
function getInfo3(user) {
    console.log(user.name + " " + user.age);
}
getUserInfo3({ name: "poetries", age: 22, city: "深圳" });
getInfo3({ name: "iamswr", age: 22 });
var totalSum = function (a, b) {
    return a + b;
};
console.log(totalSum(10, 20));
var arrTest = ['poetries', '静观流叶'];
console.log(arrTest);
// 关键字implements实现
// 因为接口是抽象的，需要通过子类是实现它
var Person6 = /** @class */ (function () {
    function Person6(name) {
        this.name = name;
    }
    Person6.prototype.eat = function (any) {
        console.log("\u5403" + any);
    };
    return Person6;
}());
// 可以在implements后面通过逗号添加和java一样
var Person7 = /** @class */ (function () {
    function Person7(name) {
        this.name = name;
    }
    Person7.prototype.eat = function (any) {
        console.log("\u5403" + any);
    };
    Person7.prototype.sleep = function () {
        console.log('睡觉');
    };
    return Person7;
}());
// 因为Animal6类继承了Animal5
// 所以这里遵循Animal6就相当于把Animal5也继承了
var Person8 = /** @class */ (function () {
    function Person8(name) {
        this.name = name;
    }
    Person8.prototype.eat = function (any) {
        console.log("\u5403" + any);
    };
    Person8.prototype.sleep = function () {
        console.log('睡觉');
    };
    return Person8;
}());
// 泛型
function deal(value) {
    return value;
}
deal('poetries');
deal(22);
// 类的泛型
var MyMath = /** @class */ (function () {
    function MyMath() {
        // 定义一个私有属性
        this.arr = [];
    }
    // 规定传参类型
    MyMath.prototype.add = function (value) {
        this.arr.push(value);
    };
    return MyMath;
}());
// 这里规定了类型为number
// 相当于把T替换为number
var mymath = new MyMath();
mymath.add(1);
mymath.add(2);
mymath.add(3);
