/**
 * Created by Administrator on 2017/11/16/016.
 */
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import App from './container/app';
import '../stylesheets/style.css';

// import { initNotes, addNote, deleteNote } from "./actions";

var loggerMiddleware = createLogger();

//创建携带所传入中间件的store
var createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

var store = createStoreWithMiddleware(rootReducer);

// store.dispatch(addNote('Learn about actions'));
//监听state的每一次变化，若调用所返回函数unsubscribe( )，则监听取消
// var unsubscribe = store.subscribe( () => console.log(store.getState()) );

ReactDOM.render(
    <Provider store = { store }>
        <App/>
    </Provider>,
    document.getElementById("app")
);

if (module.hot) {
    module.hot.accept()
}