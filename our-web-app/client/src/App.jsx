import "./App.css"

function ToggleButton({ color }) {
  const [active, setActive] = useState(false)
  return (
    <button
      className="toggle-button"
      style={{ backgroundColor: active ? color : "black" }}
      onClick={() => setActive(!active)}
    />
  )
}

function App() {
  return (
    <div>
      <div id="buttons">
        <ToggleButton color="#F00" />
        <ToggleButton color="#0F0" />
        <ToggleButton color="#00F" />
      </div>
    </div>
  )
}

export default App
