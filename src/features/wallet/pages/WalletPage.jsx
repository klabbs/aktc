// import WalletTable from "../components/WalletTable";
import "../styles/walletPage.css"
import { useWallet } from "../hooks/useWallet";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const WalletPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector(
    (state) => state.auth
  );

  const { wallet, loading } = useWallet();
  
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <main className="main-content">
        <div className="overview-grid">

          <div className="overview-card">

              <div className="card-header">
                  <div>
                      <h2>{wallet.user}</h2>
                      <p>Currency: {wallet.currency}</p>
                      <hr />

                      <h3>Balance: ₦{wallet.balance}</h3>
                      {user?.role === "admin" &&  (
                        <button
                          className="add-wallet-btn"
                          onClick={() => navigate(`/wallets/${wallet._id}/edit`)}
                        >
                          <i className="fas fa-pencil"></i>
                          Edit Wallet
                        </button>
                      )}
                      
                  </div>

                  <div className="tabs">
                      <span className="active-tab">Active</span>
                      <span>Planned</span>
                      <span>Archived</span>
                  </div>
              </div>

          
          </div>

          <div className="stats-column">

              <div className="mini-stat">
                  <h2>12,482</h2>
                  <p>Total Enrolled Students</p>
                  <span className="green">+12%</span>
              </div>

              <div className="mini-stat">
                  <h2>156</h2>
                  <p>Active Course Modules</p>
                  <span>42 Faculty</span>
              </div>

          </div>

          </div>
      </main>
    </>
  );
};

export default WalletPage;