import '../pages/Wallets.css';
import { useWallets } from "../hooks/useWallets";
import { Link } from "react-router-dom";

const WalletCard = () => {
  const { wallets, loading } = useWallets();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="wallet-grid">
      {wallets.map((wallet) => (
        <Link to={wallet._id} key={wallet._id}>
          <div className="wallet-card">

            <img
              src={`https://picsum.photos/seed/${wallet._id}/400/250`}
              alt="wallet"
            />

            <h3>{wallet.user}</h3>

            <small>{wallet.currency}</small>

            <p>Wallet balance information</p>

            <div className="price-row">
              <h4>₦{wallet.balance}</h4>
              <button>View</button>
            </div>

          </div>
        </Link>
      ))}
    </div>
  );
};

export default WalletCard;