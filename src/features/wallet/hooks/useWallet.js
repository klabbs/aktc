import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWallet } from "../api/walletsApi";

export const useWallet = () => {
  const { id } = useParams();

  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        setLoading(true);

        const res = await getWallet(id);

        setWallet(res.data.data); // correct
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWallet();
  }, [id]);

  return { wallet, loading };
};