import styles from './PaymentsPage.module.css';
// import PaymentsTable from "../components/PaymentsTable";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const PaymentsPage = () => {
  useDocumentTitle("Payments | AKTC");

  return (
    <>
      <h1>Payments (all)</h1>

      {/* <PaymentsTable /> */}
    </>
  );
};

export default PaymentsPage