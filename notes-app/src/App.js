import "./App.css";
import Header from "./components/Header";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CategoryPage from "./components/CategoryPage";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryPage />
    </div>
  );
}

export default App;
