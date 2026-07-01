import { Routes, Route } from "react-router-dom";
import WalletsPage from "../pages/WalletsPage";
import WalletPage from "../pages/WalletPage";
// import CreateWalletsPage from "../pages/CreateWalletsPage";


const WalletsRoutes = () => {
 return (
   <Routes>
     <Route index element={<WalletsPage />} />
     {/* <Route path="new" element={<CreateWalletsPage />} /> */}
     <Route path=":id" element={<WalletPage />} />
     <Route path=":id/edit" element={<WalletPage />} />
   </Routes>
 );
};


export default WalletsRoutes;

