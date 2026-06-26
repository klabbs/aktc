import "./Payments.css";
import PaymentCard from "../components/PaymentCard";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { usePayments } from "../hooks/usePayments";

const PaymentsPage = () => {
  useDocumentTitle("Payments | AKTC");

  const { payments, loading } = usePayments();

  if (loading) return <p>Loading payments...</p>;

  return (
    <section className="catalog">
      <h1>Payments</h1>

      <p>View and manage all course payments.</p>

      <div className="course-grid">
        {payments.length === 0 ? (
          <p>No payments found</p>
        ) : (
          payments.map((payment) => (
            <PaymentCard key={payment._id} payment={payment} />
          ))
        )}
      </div>
    </section>
  );
};

export default PaymentsPage;