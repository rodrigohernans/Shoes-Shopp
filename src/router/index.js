import Home from './Home'
import { createBrowserRouter } from 'react-router-dom'

const indexRouter = createBrowserRouter([
    {path: "/", element: <Home/>}
]) 

export default indexRouter 