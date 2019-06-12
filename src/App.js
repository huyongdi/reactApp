import React from 'react';
import { Button } from 'antd';
import { Router, Link } from "@reach/router"
import { Page1, Page2 } from "./components"

let Home = () => (
  <div>
    <h1>左侧跳转模块</h1>
    <nav>
      <Link to="page1">跳转到PAGE1</Link> &nbsp;&nbsp;&nbsp;
      <Link to="page2">跳转到PAGE2</Link>
    </nav>
  </div>
)


function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <Home path="/" />
      <Router>
    
        <Page1 path="page1" />
        <Page2 path="page2" />
      </Router>
    </div>
  );
}

export default App;
