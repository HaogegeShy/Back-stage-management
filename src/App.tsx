import { useState } from 'react'
import {Outlet, Link, useRoutes} from 'react-router-dom'
import {Button} from 'antd'
import {routerList} from './router/routerList'

function App() {
  const [count, setCount] = useState(0)
  const outlets=useRoutes(routerList)

  return (
    <div className="App">
      {/* <Outlet></Outlet> */}
      {outlets}
    </div>
  )
}

export default App
