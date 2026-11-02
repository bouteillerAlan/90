import Button from "./components/button"
import Card from "./components/card"

function App() {
  return (
    <div>
      <h1>Hey</h1>

      {["peach", "orange", "red", "yellow"].map((color) => (
        <Button text="Click" color={color as "peach"}/>
      ))}

      <Card>
        <h1>test card</h1>
      </Card>
    </div>
  )
}

export default App
