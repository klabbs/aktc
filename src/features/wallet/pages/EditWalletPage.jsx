import { useEffect, useState } from "react";
import { useWallet } from "../hooks/useWallet";
import { updateWallet } from "../api/walletsApi";
import WalletForm from "../components/WalletForm";

const EditWalletPage = () => {
  const { wallet, loading } = useWallet();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (wallet) {
      setFormData(wallet);
    }
  }, [wallet]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateWallet(wallet._id, formData);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <WalletForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
      submitText="Update Wallet"
    />
  );
};

export default EditWalletPage;