import { useEffect, useState } from "react";
import { getWallets } from "../api/walletsApi";

export const useWallets = () => {
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const res = await getWallets();

        setWallets(res.data.data); 
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWallets();
  }, []);

  return { wallets, loading };
};