import "./App.css";
import Header from "./components/Header/Header.jsx";
import SearchContainer from "./components/SearchContainer/SearchContainer.jsx";

function App() {
  return (
    <>
      <div className="App">
        <div className="main">
          <Header />
          <SearchContainer />
          <h1>Media</h1>
        </div>
      </div>
    </>
  );
}

export default App;
