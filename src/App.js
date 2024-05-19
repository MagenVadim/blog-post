import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Container from "@mui/material/Container";

function App() {
  return (
   <>
    <Header />

    <Container maxWidth="lg">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Container>

   </>
  );
}

export default App;
