import "./App.css";

import Header from "./components/Header/Header";
import MainArea from "./components/MainArea/MainArea";
import Card from './components/Card/Card'

function App() {
  return (
    <>
      <Header />
      <div className="main-area">
        <MainArea />
      </div>
    </>
  );
}

export default App;
