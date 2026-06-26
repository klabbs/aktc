import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createWallet } from "../api/walletsApi";
import WalletForm from "../components/WalletForm";

const CreateWalletPage = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createWallet(formData);
      navigate("/wallets"); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <WalletForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
      submitText="Create Wallet"
    />
  );
};

export default CreateWalletPage;