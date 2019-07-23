// 引入合并方法
import { combineReducers } from "redux";

// 引入需要合并的reducer
import counter from "./counter";

// 引入需要合并的reducer
import counter2 from "./counter2";

// 引入connectRouter
import { connectRouter } from "connected-react-router";
import history from "../../history";

// 合并
let reducers = combineReducers({
  counter,
  counter2,
  // 把history传到connectRouter函数中
  router: connectRouter(history)
});
export default reducers;