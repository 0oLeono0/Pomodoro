import React, { useEffect, useState } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root"
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./shared/NotFound";
import { Instruction } from "./shared/Content/Instruction";
import { Timer } from "./shared/Content/Timer";

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <Instruction />
                <Timer />
            </Content>
        </Layout>
    );
}

export const App = hot(() => <AppComponent />);