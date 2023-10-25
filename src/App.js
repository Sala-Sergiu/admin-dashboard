import { Header } from "./Header";
import { Main } from "./Main";
import { Navigation } from "./Navigation";
import { Trending } from "./Trending";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Header />
      <Main />
      <Trending />
    </div>
  );
}

export default App;
