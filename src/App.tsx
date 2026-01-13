import './App.css'
import { Button } from './components/ui/Button'

function App() {

  return (
    <>
      <div className="bg-(--gray-700) text-(--gray-100)">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <div></div>
    </>
  )
}

export default App
