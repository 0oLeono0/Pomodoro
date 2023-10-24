import React, { useEffect, useState } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root"
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./shared/NotFound";

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
            </Content>
        </Layout>
    );
}

export const App = hot(() => <AppComponent />);