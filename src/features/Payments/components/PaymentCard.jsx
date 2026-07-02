import "../pages/Payments.css";
import { Link } from "react-router-dom";

const PaymentCard = ({ payment }) => {
  return (
    <Link to={`/payments/${payment._id}`}>
      <div className="payment-card">
        <img
          src={`https://picsum.photos/seed/${payment._id}/400/250`}
          alt="payment"
        />

        <h3>₦{payment.amount}</h3>
        
        <p>{payment.courseName}</p>

        <p><strong>Method:</strong> {payment.paymentMethod}</p>

        <p><strong>Status:</strong> {payment.status}</p>

        <p className="transaction">
          {payment.transactionId}
        </p>
        
        

        <div className="price-row">
          <button>View Details</button>
        </div>
      </div>
    </Link>
  );
};

export default PaymentCard;