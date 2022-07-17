import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetUps";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetUps";
import Layout from "./components/layout/Layout"

function App() {
  return (
    <Layout>
      
      <Routes>
       <Route path='/' element={<AllMeetupsPage/>} />
          
        
        <Route path="/favourites" element={<FavouritesPage/>} />
          

        <Route path="/newmeetup" element={<NewMeetupPage/>} />
         
      </Routes>
    </Layout>
  );
}

export default App;
