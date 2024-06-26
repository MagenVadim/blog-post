import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import Container from "@mui/material/Container";

function App() {
  return (
   <>
    <Header />

    <Container maxWidth="lg">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts/:id' element={<FullPost/>}/>
        <Route path='/add-post' element={<AddPost/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>

      </Routes>
    </Container>

   </>
  );
}

export default App;
