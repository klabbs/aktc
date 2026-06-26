import './Wallets.css';
import WalletCard from "../components/WalletCard";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const WalletsPage = () => {
  useDocumentTitle("Wallets | AKTC");
  return (
    <>
      <section className="catalog">

        <h1>Wallets</h1>

        <p>
        Manage and view all user wallets and balances.
        </p>

        <div className="tabs">
            <button className="active">All Wallets</button>
            <button>UI/UX Design</button>
            <button>Full Stack Dev</button>
            <button>Data Science</button>
            <button>Digital Marketing</button>
        </div>

        <div className="wallet-grid">

          <WalletCard />
        </div>
        
        <div className="promo-section">

                <div className="promo-card">

                    <div>

                        <span>NEW PATHWAY</span>

                        <h2>
                            Mobile App Development
                            with Flutter
                        </h2>

                        <p>
                            Build cross-platform applications
                            using Flutter.
                        </p>

                        <div className="promo-buttons">
                            <button>View Syllabus</button>
                            <button className="purple">
                                Join Cohort
                            </button>
                        </div>

                    </div>

                </div>

                <div className="membership">

                    <i className="fa-solid fa-desktop"></i>

                    <h3>Annual Membership</h3>

                    <p>
                        Unlock all premium courses.
                    </p>

                    <button>
                        Learn More
                    </button>

                </div>

            </div>
      </section>
    </>
  );
};

export default WalletsPage