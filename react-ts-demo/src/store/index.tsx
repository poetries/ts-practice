// 需要使用到thunk，所以引入中间件applyMiddleware
import { createStore, applyMiddleware } from "redux";

// 引入reducers
import reducers from "./reducers";

// 引入redux-thunk，处理异步
// 现在主流处理异步的是saga和thunk
import thunk from "redux-thunk";

// 引入日志
import logger from "redux-logger";

// 引入中间件
import { routerMiddleware } from "connected-react-router";
import history from "../history";

// 接着创建仓库和中间件
let store = createStore(reducers, applyMiddleware(routerMiddleware(history),thunk,logger));

// 导出store仓库
export default store;