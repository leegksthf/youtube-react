import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";


function App({ youtube }) {
  // 여기 안에서 const youtube = new Youtube(); 해주면 계속적으로 호출되기때문에 app을 사용하는 최종위치(index)인 외부에서 받아와야함.
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home youtube={ youtube } />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
