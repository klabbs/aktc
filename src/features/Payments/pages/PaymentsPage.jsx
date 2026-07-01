import "./Payments.css";
import PaymentCard from "../components/PaymentCard";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { usePayments } from "../hooks/usePayments";
import { useWallets } from "../../wallet/hooks/useWallets";
import api from "../../../api/axios";

const PaymentsPage = () => {
  useDocumentTitle("Payments | AKTC");

  const { payments, loading, setPayments } = usePayments();
  const { wallets, loading: walletLoading } = useWallets();
  const wallet = wallets?.[0]; // assuming one wallet per user

 const upcomingPayment = payments?.find(
  (p) => p.status === "Pending"
);

const handlePayNow = async () => {
  if (!upcomingPayment?._id) return;

  try {
    await api.put(`/payments/${upcomingPayment._id}`, {
      status: "Paid",
    });

    alert("Payment successful");

    // ✅ PROPER STATE UPDATE (NO reload, NO mutation)
    setPayments((prev) =>
      prev.map((p) =>
        p._id === upcomingPayment._id
          ? { ...p, status: "Paid" }
          : p
      )
    );

  } catch (err) {
    console.error(err);
  }
};
  return (
    
    <div>
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

          <main className="main">

        <header className="topbar">
            <div>
                <h1>Payments & Wallet</h1>
                <p>Manage your tuition, balance and financial history</p>
            </div>

            <div className="icons">
                <i className="fa-regular fa-bell"></i>
                <i className="fa-regular fa-credit-card"></i>
                <img src="https://i.pravatar.cc/40" alt="user" />
            </div>
        </header>

       
        <div className="top-grid">

            <div className="wallet-card">

                <small>AVAILABLE BALANCE</small>

                <h2>
                  {walletLoading
                    ? "Loading..."
                    : `₦${wallet ? wallet.balance.toLocaleString() : "0.00"}`}
                </h2>


                <div className="wallet-actions">
                    <button>Add Funds</button>
                    <button>Installment Plan</button>
                    <button>Transaction Logs</button>
                </div>

            </div>

            <div className="payment-card">

                <span className="danger">
                    ● ACTION REQUIRED
                </span>

                <h3>Upcoming Payment</h3>

                <p>
                  {upcomingPayment?.DataAnalysis || "No pending payment"}
                </p>

                <div className="due-row">

                    <div>
                        <small>Due Date</small>
                       <h4>
                          {upcomingPayment?.dueDate
                            ? new Date(upcomingPayment.dueDate).toDateString()
                            : "N/A"}
                        </h4>
                    </div>

                    <div>
                        <small>Amount Due</small>
                        <h4>
                          ₦{upcomingPayment?.amount?.toLocaleString() || "0.00"}
                        </h4>
                        <p>
                          {upcomingPayment?.courseName || "No pending payment"}
                        </p>
                    </div>

                </div>

                <button className="pay-btn" onClick={handlePayNow}>
                  Pay Now
                </button>
            </div>

        </div>

     

        <div className="bottom-grid">

            <div className="invoice-card">

                <div className="card-header">
                    <h3>Recent Invoices</h3>
                    <a href="/invoices">View All</a>
                </div>

                <div className="invoice">

                    <div>
                        <strong>INV-2023-089</strong>
                        <p>Applied Data Science - Installment 2</p>
                    </div>

                    <div>
                        <strong>₦450.00</strong>
                        <span>PAID</span>
                    </div>

                </div>

                <div className="invoice">

                    <div>
                        <strong>INV-2023-084</strong>
                        <p>UI/UX Design Masterclass</p>
                    </div>

                    <div>
                        <strong>₦800.00</strong>
                        <span>PAID</span>
                    </div>

                </div>

                <div className="invoice">

                    <div>
                        <strong>INV-2023-072</strong>
                        <p>Cloud Fundamentals Exam Fee</p>
                    </div>

                    <div>
                        <strong>₦200.00</strong>
                        <span>PAID</span>
                    </div>

                </div>

            </div>

            <div className="side-column">

                <div className="credit-card">

                    <h3>Scholarship Credits</h3>

                    <div className="progress">
                        <div className="fill"></div>
                    </div>

                    <div className="credit-info">
                        <span>Used ₦650</span>
                        <span>₦1,000 Total</span>
                    </div>

                </div>

                <div className="methods-card">

                    <h3>Payment Methods</h3>

                    <div className="method">
                        <span>💳 •••• 4412</span>
                    </div>

                    <div className="method">
                        <span>💳 •••• 9088</span>
                    </div>

                    <button className="add-card">
                        + Add New Card
                    </button>

                </div>

            </div>

        </div>

    </main>

    </div>
  );
};

export default PaymentsPage;