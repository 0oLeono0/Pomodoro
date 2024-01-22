import React from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root"
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { Instruction } from "./shared/Content/Instruction";
import { Timer } from "./shared/Content/Timer";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./store/store";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

function AppComponent() {
    return (
        <Provider store={store}>
            <Layout>
                <Header />
                <Content>
                    <Instruction />
                    <Timer />
                </Content>
            </Layout>
        </Provider>
    );
}

export const App = hot(() => <AppComponent />);