import { RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import router from './Router'

export default function App() {
  return (
    <>
  <RouterProvider router={router} />,
    </>
  )
}
