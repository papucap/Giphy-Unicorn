import "./App.css";
import Header from "./components/Header/Header.jsx";
import SearchContainer from "./components/SearchContainer/SearchContainer.jsx";
import Media from "./components/Media/Media.jsx"; 

function App() {
  return (
    <>
      <div className="App">
        <div className="main">
          <Header />
          <SearchContainer />
          <Media />
        </div>
      </div>
    </>
  );
}

export default App;
