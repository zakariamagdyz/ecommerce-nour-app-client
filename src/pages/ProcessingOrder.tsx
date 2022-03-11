import React from "react";
import axios from "../axios/callConfig";
// types
import { AxiosResponse, AxiosError } from "axios";
// hooks
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProcessingOrder: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);
  console.log(state);
  useEffect(() => {
    const placeOrder = async () => {
      try {
        setLoading(true);
        const res: AxiosResponse = await axios.post("/orders", state);
        setLoading(false);
        navigate("/oreder-details", {
          state: res.data.data.order,
          replace: true,
        });
      } catch (error) {
        let err = error as AxiosError;
        if (!err.response) {
          throw err;
        }
        setError(err.response.data);
      }
    };

    if (state) placeOrder();
    else navigate("/", { replace: true });
  }, []);
  return (
    <div>
      {loading && (
        <p>You Order is being processed, Please wait for it to complete :)</p>
      )}

      {error && <p>{error.message}</p>}
    </div>
  );
};

export default ProcessingOrder;
