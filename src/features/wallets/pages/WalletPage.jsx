import styles from './WalletsPage.module.css';
// import WalletTable from "../components/WalletTable";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const WalletPage = () => {
  useDocumentTitle("Wallet | AKTC");

  return (
    <>
      <h1>Wallet (all)</h1>

      {/* <WalletTable /> */}
    </>
  );
};

export default WalletPage