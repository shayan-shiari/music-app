import React, { Component } from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./pages/Home";
import LastDetail from "./components/common/LastDetail";
import PlayList from "./pages/PlayList";
import TopDetail from "./components/common/TopDetail";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="play-list" element={<PlayList />} />
          <Route path="music/:id" element={<TopDetail />} />
          <Route path="/last-detail/:id" element={<LastDetail />} />
        </Routes>
      </div>
    );
  }
}

export default App;
