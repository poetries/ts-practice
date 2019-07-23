// import React from "react"; // 之前的写法
// 在ts中引入的写法
import * as React from "react";

// 引入connect，让组件和仓库建立连接
import { connect } from "react-redux";

// 引入actions，用于传给connect
import actions from "../store/actions/counter";

// 引入接口约束
import { Store,Counter } from "../types";

// 接口约束
interface IProps{
  number:number,

  name:string, //如果我们不写校验的话，在外部传name进来会报错的

  // add是一个函数
  add:any,

  // subtract是一个函数
  subtract:any,
  
   // addAsync是一个函数
  addAsync:any,

  goto:any
}

// 我们还可以用接口约束state的状态
interface IState{
    number: number
}

// 把接口约束的规则写在这里
// 如果传入的name不符合类型会报错
// 如果state的number属性不符合类型也会报错
class CounterComponent extends React.Component<IProps,IState>{
  // 状态state
  state = {
    number:0
  }
  render(){
    // 利用解构赋值取出
    // 这里比如和IProps保持一致，不对应则会报错，因为接口约束了必须这样
    let { number,add,subtract, addAsync, goto } = this.props

    return(
        <div>
            <h1>{this.props.name || 'poetries'}</h1>
            <button onClick={add}>+</button><br />
            <button onClick={subtract}>-</button>  <br />
            <button onClick={addAsync}>异步加1</button> <br />
            {/* 增加一个按钮,并且点击的时候执行goto方法实现跳转 */}
              <button onClick={()=>goto('/counter2')}>跳转到/counter2</button>
            <p>{number}</p>
      </div>
    )
  }
}

// 这个connect需要执行两次，第二次需要我们把这个组件CounterComponent传进去
// connect第一次执行，需要两个参数，

// 需要传给connect的函数
let mapStateToProps = function (state: Store): Counter {
    return state.counter;
}
  
export default connect(
    mapStateToProps,
    actions
)(CounterComponent);