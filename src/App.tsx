import "./App.css"
//import MyContainer from "./layout/MyContainer"
// import Login from "./components/Login"
import { Outlet } from "react-router-dom"
import HeaderBar from "./components/Header"
import { Stack } from "@mui/material"

function App() {
  return (
    <>
      <Stack spacing={5}>
        <HeaderBar />
        <Outlet />
      </Stack>
    </>
  )
}

export default App
