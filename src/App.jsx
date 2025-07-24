import React from 'react'
import './App.css'

function App() {
  return (
    <>
      <header>
        <input type="text" placeholder="Filter by city / state" />
        <div className="separator" />
        <label>Add a record:</label>
        <input type="text" placeholder="City Name" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="Temperature (F)" />
        <button>SAVE</button>
      </header>
      <main>
        <h3>Cities</h3>
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>State</th>
              <th>Temperature (F)</th>
              <th>Humidity</th>
              <th>Conditions</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </main>
    </>
  )
}

export default App
