import Button from "./components/button"
import Card from "./components/card"
import ProgressBar from "./components/progressBar"
import { eColors } from "./types/enums"

function App() {
  return (
    <div>
      <h1>Hey</h1>

      {["peach", "orange", "red", "yellow"].map((color) => (
        <Button text="Click" color={color as eColors}/>
      ))}

      <Card>
        <h1>test card</h1>
      </Card>

      <ProgressBar step={25}/>

    </div>
  )
}

export default App
