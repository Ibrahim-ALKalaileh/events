import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetUps";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetUps";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
       <Route path='/' element={<AllMeetupsPage/>} />
          
        
        <Route path="/favourites" element={<FavouritesPage/>} />
          

        <Route path="/newmeetup" element={<NewMeetupPage/>} />
         
      </Routes>
    </div>
  );
}

export default App;
