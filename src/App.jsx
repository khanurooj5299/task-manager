import "./App.css";

import Header from "./components/Header/Header";
import MainArea from "./components/MainArea/MainArea";

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
