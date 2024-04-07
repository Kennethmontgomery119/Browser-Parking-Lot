import './App.css';
import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./Components/ParkingLotList/ParkingLotList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Browser Parking Lot</h1>
          <p>Free your browser!</p>
      </header>
      <main>
          <ParkingLotForm />
          <ParkingLotList />
      </main>
    </div>
  );
}

export default App;
