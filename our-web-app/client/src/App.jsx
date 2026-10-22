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
      <main>
          <h1>Big title</h1>
          <p>This is some example text. Isn't that funny. Huh, there you go.</p>
          <p>This is some more example text. This is some more example text. This is some more example text. This is some more example text. </p>
          <div id="buttons">
              <ToggleButton color="#F00" />
              <ToggleButton color="#0F0" />
              <ToggleButton color="#00F" />
          </div> 
      </main>
    </div>
  )
}

export default App
