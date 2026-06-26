import { Routes, Route } from "react-router-dom";
import PaymentsPage from "../pages/PaymentsPage";
// import CreatePaymentsPage from "../pages/CreatePaymentsPage";


const PaymentsRoutes = () => {
 return (
   <Routes>
     <Route index element={<PaymentsPage />} />
     {/* <Route path="new" element={<CreatePaymentsPage />} /> */}
     <Route path=":id" element={<PaymentPage />} />
     <Route path=":id/edit" element={<PaymentPage />} />
   </Routes>
 );
};


export default PaymentsRoutes;

