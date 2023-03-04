import "./App.css";
import MainLayout from "./Components/MainLayout";
import { MonthlyUpdates } from "./Components/MonthlyUpdates";
import PreviousEditions from "./Components/PreviousEditions";
import Slider from "./Components/Slider";

function App() {
  return (
    <>
      <MainLayout>
        <Slider />
        <MonthlyUpdates />
        <PreviousEditions />
      </MainLayout>
    </>
  );
}

export default App;
