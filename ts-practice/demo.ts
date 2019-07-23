let a:string = 'poetries'

let age:number = 12
let isFlag:boolean = false

// 数组
// 这是一个字符串数组，只能往里面放字符串，写别的类型会报错
let persion:string[] = ['poetries', 'jing']
// 另一个写法 
let persions:Array<string> = ['poetries', 'jing']

// 如果数组里放对象呢
let persionObject:Array<object> = [{name:'poetries',age:22}]
 let persionObjects:object[] = [{name:'poetries',age:22}]

 // 在数组中放string、number、boolean、object
 let arr:Array<number|object|string|boolean> = [22, 'test', true, {name:'poetries'}]

 // 数组中放什么都可以
 let arrAny:Array<any> = ['test',12,false]
    
// 元组类型tuple
// 什么是元组类型？其实元组是数组的一种
let per :[string,number,object] = ['poetries',22,{love: 'coding'}]


// 枚举类型enum

enum sex {
    BOY='男孩',
    GIRL='女孩'
}
console.log(sex)

enum orderStatus {
    WAIT_FOR_PAY = "待支付",
    UNDELIVERED = "完成支付，待发货",
    DELIVERED = "已发货",
    COMPLETED = "已确认收货"
}

// any
let btn:any = document.getElementById('btn');
btn.style.color = "blue";

// null undefined类型

// (string | number | null | undefined) 相当于这几种类型
// 是 string 或 number 或 null 或 undefined

let str:(string | number | null | undefined)

str = 'poetries'
str = 28
str = null 
str = undefined

// void 类型

// void 不能再函数里写return
// 怎么理解叫没有返回值呢？此时我们给函数return一个值
function say(name:string):void{
    console.log('hello:', name)
    // return "ok" 会报错
    return undefined;
    return //不会报错
}
say('poetries')

// 返回一个字符串类型
function say1(name:string):string {
    return 'ok'
}

// never类型

let job:never;
function error(message:string):never {
    throw new Error(message)
}
error('errorMsg')

function loop():never {
    while(true){
        console.log("陷入死循环啦")
    }
}

loop()

function sayOk():(never | string) {
    return 'ok'
}

// 函数 ====

// 函数是这样定义的
// 形参和实参一一对应，完全一样
function sayHello(name:string,age:number):void {
    console.log('hello', name, age)
}
sayHello('poetries',22)

// 形参和实参要完全一样，如想不一样，则需要配置可选参数，可选参数放在后面
// // 可选参数，用 ？ 处理，只能放在后面
function sayHelloToYou(name:string,age?:number):void {
    console.log('hello', name, age)
}
sayHelloToYou('poetries')

// 那么如何设置默认参数呢？

function ajax(url:string,method:string = 'GET') {
    console.log(url, method)
}

// 那么如何设置剩余参数呢？可以利用扩展运算符

function sum(...args:Array<number>):number {
    return eval(args.join("+"))
}
let total:number = sum(1,2,3,4,5)
console.log(total)

// 那么如何实现函数重载呢？函数重载是java中非常有名的，在java中函数的重载，是指两个或者两个以上的同名函数，参数的个数和类型不一样

// 比如我们现在有两个同名函数
// function eating(name:string) {
    
// }
// function eating(name:string,age:number) {
    
// }
// 那么我想达到一个效果
// 当我传参数name时，执行name:string这个函数
// 当我传参数name和age时，执行name:string,age:number这个函数
// 此时该怎么办？

// 接下来看一下typescript中的函数重载

// 首先声明两个函数名一样的函数
function eating(name: string):void;
function eating(name: number):void;

function eating(name:any): void {
    console.log(name)
}

eating("hello poetries")
eating(22)


// 四、类

// ts 写法
// 跟es6非常像 没有太大区别
class Persion {
    // 这里声明的变量 是实例上的属性
    name: string;
    age:number;

    constructor(name: string, age: number){
        // this.name和this.age 必须先在前面声明好类型
        // name: string
        // age: number
        this.name = name;
        this.age = age;
    }
    // 原型方法
    say():string {
        return 'hello poetries'
    }
}

let p = new Persion('poetries', 22)

// 类的继承

// 和es6也是差不多
class Parent {
    name: string;
    age: number;
    constructor(name:string, age: number){
        this.name = name;
        this.age = age;
    }
    say():string{
        return 'hello poetries'
    }
}

class Child extends Parent {
    childName: string;
    constructor(name: string,age:number,childName:string) {
        super(name,age)
        this.childName = childName
    }
    childSay():string {
        return this.childName
    }
}
let child = new Child('poetries', 22, '静观流叶')
console.log(child)

// 类的修饰符

class Parents {
    public name:string;
    protected age:number;
    private money:number;

   // 简写
   // constructor(public name:string,protected age:number,private money:number)

   constructor(name: string, age:number,money:number) {
       this.name = name;
       this.age = age;
       this.money = money;
   }
   getName():string {
       return this.name
   }
   getAge():number{
       return this.age
   }
   getMoney():number{
       return this.money
   }
}
let pare = new Parents('poetries', 22, 3000)
console.log(pare.name)
// console.log(pare.age)  报错
// console.log(pare.money) 报错


class Person2 {
    // 类的静态属性
    static name1 = 'poetries'

    // 类的静态方法
    static say() {
        console.log('hello poetries')
    }
}
let per2 = new Person2()
Person2.say() // hello poetries
// per2.say() 报错

// 抽象类

// 关键字 abstract抽象
// 定义抽象类

abstract class Animal {
    // 实际上是使用了public修饰符
    // 如果添加private修饰符会报错
    abstract eat():void;
}

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
class Dog extends Animal{
    eat(){
        console.log("吃骨头")
    }
}

// 接口

// 接口规范对象

//假设我们需要获取用户信息
// 我们通过这样的方式 规范必须传name和age的值
function getUserInfo(user:{name:string,age:number}) {
    console.log(user.name,user.age)
}
getUserInfo({name: 'poetries', age: 22})

// 这样看挺完美的， 那么问题就出现了，如果我另外还有一个方法，也是需要这个规范呢？

function getUserInfo1(user:{name:string,age:number}){
    console.log(`${user.name} ${user.age}`)
}
function getInfo(user:{name:string,age:number}){
    console.log(`${user.name} ${user.age}`)
}
getUserInfo1({name:"poetries",age:22})
getInfo({name:"poetries",age:22})

// 可以看出，函数getUserInfo和getInfo都遵循同一个规范，那么我们有办法对这个规范复用吗？

// 首先把需要复用的规范，写到接口 关键字interface
interface infoInterface {
    name: string,
    age: number;
}
// 然后把这个接口 替换到我们需要复用的地方
function getUserInfo2(user:infoInterface) {
    console.log(user.name,user.age)
}
function getInfo2(user:infoInterface) {
    console.log(user.name,user.age)
}

getUserInfo2({name:"poetries",age:22})
getInfo2({name:"poetries",age:22})

// 那么有些参数可传可不传，该怎么处理呢？

interface infoInterface2{
    name: string;
    age: number;
    city?:string;
}
function getUserInfo3(user:infoInterface2){
    console.log(`${user.name} ${user.age} ${user.city}`)
}
function getInfo3(user:infoInterface){
    console.log(`${user.name} ${user.age}`)
}
getUserInfo3({name:"poetries",age:22,city:"深圳"})
getInfo3({name:"iamswr",age:22})

// 规范函数

// 对一个函数的参数和返回值进行规范
interface mytotal {
    // 左侧是函数的参数，右侧是函数的返回类型
    (a:number,b:number):number;
}

let totalSum:mytotal = function(a:number,b:number):number {
    return a + b
}

console.log(totalSum(10, 20))

// 规范数组

interface userInterface {
    // index为数组索引 类型是number
    // 右边是数组里为字符串的数组成员
    [index: number]: string;
}
let arrTest: userInterface = ['poetries', '静观流叶']

console.log(arrTest)

// 规范类

// 首先实现一个接口
interface Animal2 {
    // 这个类必须有name
    name:string;

    // 这个类必须有eat方法
    eat(any:string):void;
}

// 关键字implements实现
// 因为接口是抽象的，需要通过子类是实现它

class Person6 implements Animal2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(any:string):void {
        console.log(`吃`+any)
    }
}

// 如果想遵循多个接口

interface Animal3 {
    name: string;
    eat(any: string):void;
}
// 新增一个接口
interface Animal4 {
    sleep():void;
}
// 可以在implements后面通过逗号添加和java一样
class Person7 implements Animal3,Animal4 {
    name: string;
    constructor(name:string){
        this.name = name;
    }
    eat(any:string) {
        console.log(`吃`+any)
    }
    sleep() {
        console.log('睡觉')
    }
}

// 接口可以继承接口

interface Animal5{
    name:string;
    eat(any:string):void;
}
// 像类一样 通过extends继承
interface Animal6 extends Animal5 {
    sleep():void;
}
// 因为Animal6类继承了Animal5
// 所以这里遵循Animal6就相当于把Animal5也继承了

class Person8 implements Animal2 {
    name: string;
    constructor(name:string) {
        this.name = name;
    }
    eat(any:string):void{
        console.log(`吃${any}`)
    }
    sleep(){
        console.log('睡觉')
    }
}

// 泛型

function deal<T>(value:T):T{
    return value
}

deal<string>('poetries')
deal<number>(22)

// 类的泛型

class MyMath<T> {
    // 定义一个私有属性

    private arr: T[] = []

    // 规定传参类型
    add(value: T) {
        this.arr.push(value)
    }
}
// 这里规定了类型为number
// 相当于把T替换为number

let mymath = new MyMath<number>()
mymath.add(1)
mymath.add(2)
mymath.add(3)
