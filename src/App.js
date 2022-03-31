import "./App.scss";
import ScreenLeft from "./components/ScreenLeft";
import ScreenRight from "./components/ScreenRight";

function App() {
  return (
    <div className="App">
      <div className="">
        <div className="grid grid-cols-12 min-h-screen">
          <div className="col-span-4">
            <ScreenLeft />
          </div>
          <div className="col-span-8">
            <ScreenRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
