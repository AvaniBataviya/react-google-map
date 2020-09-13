import React from 'react';
import './App.css';
import Header from "./component/Header";
import Map from "./component/Map";

function App() {
  return (
    <main>
      <Header/>
      <h1 className="text-center header mt-5">Hello Developers...!</h1>
      <Map/>
    </main>
  );
}

export default App;
