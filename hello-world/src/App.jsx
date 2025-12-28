import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
<section>
  <header className="presentation">
    <h1>Hello World</h1>
  </header>
  <main className="main">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas natus vel perspiciatis mollitia tempora, enim saepe quisquam reprehenderit officiis tenetur itaque voluptates? Dignissimos, ratione dicta. Esse veniam voluptatem necessitatibus.</p>
  </main>
  <aside className="sidebar">
    <img src={viteLogo} alt="vite logo" />
    <img src={reactLogo} alt="react logo" />
  </aside>

  <footer className="footer">
    <p>© 2025 footer thing. All rights reserved.</p>
  </footer>
</section>  
    </>
  )
}

export default App
