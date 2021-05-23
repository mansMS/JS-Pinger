import { useState } from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState('https://ya.ru/')
  const [time, setTime] = useState(null)

  function handleChange(e) {
    setUrl(e.target.value)
    setTime('')
  }

  async function ping() {
    const img = new Image()
    const start = (new Date()).getTime()
    img.src = await url + '?random-no-cache=' + Math.floor((1 + Math.random()) * 0x10000).toString(16)

    img.onload = () => {
      const end = (new Date()).getTime()
      setTime(end - start)
    }
    img.onerror = () => {
      const end = (new Date()).getTime()
      setTime(end - start)
    }
  }

  return (
    <div className="App">
      <input type="text" name="Url" value={url} onChange={handleChange} />
      <button onClick={ping}>ping</button>
      {time && <span>~{time}</span>}
    </div>
  )
}

export default App
