// App.js
import { Routes, Route } from 'react-router-dom'
import MainPage from './routes/MainPage'
import AboutPage from './routes/AboutPage'
import TodoPage from './routes/TodoPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </>
  )
}

export default App
