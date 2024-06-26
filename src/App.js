import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./Components/ParkingLotList/ParkingLotList";
import Timer from './Components/Timer/Timer';

import './App.css';

function App() {
    let [parkingLotItems, setParkingLotItems] = useState([]);

    function initializePageState() {
      let savedState = localStorage.getItem("items");
      if (typeof savedState === "string") {
          let parsedState = JSON.parse(savedState);
          setParkingLotItems(parsedState);
      }
    }
    useEffect(initializePageState, []);

    function addItem(date, link, description, priority) {
      setParkingLotItems(function (oldItems) {
        let newItems = [
              ...oldItems,
              {
                id: nanoid(),
                date,
                description,
                link,
                priority,
              },
      ];
      localStorage.setItem('items', JSON.stringify(newItems));
      return newItems;
     });
    }

    function deleteItem(id) {
      setParkingLotItems(function(oldItems) {
          let newItems = oldItems.filter((item) => item.id !== id);
          localStorage.setItem("items", JSON.stringify(newItems));
          return newItems;
      });
    }

  return (
    <div className="App">
      <header>
          <h1>Browser Parking Lot</h1>
          <p>Free Your Browser</p>
          <Timer />
      </header>
      <main>
          <ParkingLotForm addItem={addItem} />
          <ParkingLotList 
          parkingLotItems={parkingLotItems}
          deleteItem={deleteItem} />
      </main>
      <footer>
        <p> The right choice was made!</p>
      </footer>
    </div>
  );
}

export default App;