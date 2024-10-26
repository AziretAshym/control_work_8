import React, { useState } from "react";
import { IQuoteForm } from "../../types";
import AxiosAPI from "../../AxiosAPI.ts";
import QuoteForm from "../../Components/QuoteForm/QuoteForm.tsx";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/UI/Loader/Loader.tsx";

const NewQuote = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const submitForm = async (quote: IQuoteForm) => {
    try {
      setLoading(true);
      await AxiosAPI.post("quotes.json", { ...quote });
      navigate("/");
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return <>{loading ? <Loader /> : <QuoteForm submitForm={submitForm} />}</>;
};

export default NewQuote;
