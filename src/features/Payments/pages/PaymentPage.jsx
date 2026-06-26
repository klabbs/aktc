// import CourseTable from "../components/CourseTable";
import "../styles/paymentPage.css"
import { usePayment } from "../hooks/usePayment";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector(
    (state) => state.auth
  );

  const { payment, loading } = usePayment();
  
  if (loading) return <p>Loading...</p>;
   if (!payment) return <p>No payment found</p>;

  return (
    <>
      <main className="main-content">
        <div className="overview-grid">

          <div className="overview-card">

              <div className="card-header">
                  <div>
                      <h2>Payment Details</h2>

                      <p><strong>User ID:</strong> {payment.userId}</p>
                      <p><strong>Course ID:</strong> {payment.courseId}</p>
                      <p><strong>Amount:</strong> ₦{payment.amount}</p>
                      <p><strong>Method:</strong> {payment.paymentMethod}</p>
                      <p><strong>Status:</strong> {payment.status}</p>
                      <p><strong>Transaction ID:</strong> {payment.transactionId}</p>

                      <hr />

                      {user.role === "admin" && (
                        <button
                          className="add-course-btn"
                          onClick={() => navigate(`/payments/${payment._id}/edit`)}
                        >
                          Edit Payment
                        </button>
                      )}
                  </div>
              </div>
          </div>
        </div>
      </main>
    </>
  );
};


export default PaymentPage;