import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { updateWallet, getWallet  } from "../api/walletsApi";
import WalletForm from "../components/WalletForm";

const EditWalletPage = () => {
    const { id } = useParams();

    const [formData, setFormData] = useState({});
  
    useEffect(() => {
      const loadWallet = async () => {
        const res = await getWallet(id);
        setFormData(res.data.data);
      };
  
      loadWallet();
    }, [id]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      await updateWallet(id, formData);
  
      // navigate(...)
    };
  
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