import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

const data = {
  title: 'Card',
  text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
}

function App() {
  const [hide, setHide] = useState(false)

  const onToggle = () => {
    setHide(!hide)
  }

  const dataRest = { ...data, hide }

  return (
    <div className="App">
      <Card {...dataRest} onToggle={onToggle} />
    </div>
  )
}

export default App
