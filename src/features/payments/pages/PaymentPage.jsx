import styles from './PaymentPage.module.css';
import PaymentTable from "../components/PaymentTable"; //no payment table page/component 
// yet so it will throw an error
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const PaymentPage = () => {
  useDocumentTitle("Payment | AKTC");

  return (
    <>
      <h1>Payment (all)</h1>

      <PaymentTable />
    </>
  );
};

export default PaymentPage