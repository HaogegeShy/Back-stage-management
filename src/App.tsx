import { useState } from 'react'
import {useRoutes} from 'react-router-dom'
import {routerList} from './router/routerList'

function App() {
  const [count, setCount] = useState(0)
  const outlets=useRoutes(routerList)

  return (
    <div className="App">
      {outlets}
    </div>
  )
}

export default App
