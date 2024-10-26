import React, { useCallback, useEffect, useState } from 'react';
import { IQuote, IQuoteAPI, IQuoteForm } from '../../types';
import { useNavigate, useParams } from 'react-router-dom';
import axiosAPI from '../../AxiosAPI.ts';
import QuoteForm from '../../Components/QuoteForm/QuoteForm.tsx';
import Loader from '../../Components/UI/Loader/Loader.tsx';

const EditQuote = () => {
  const [quote, setQuote] = useState<IQuote>();
  const params = useParams<{ idQuote: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);


  const fetchOneQuote = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const response = await axiosAPI.get<IQuoteAPI>(`quotes/${id}.json`)
      if (response.data) {
        setQuote(response.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (params.idQuote) {
      void fetchOneQuote(params.idQuote);
    }
  }, [params.idQuote, fetchOneQuote]);

  const submitForm = async (post: IQuoteForm) => {
    try {
      setLoading(true);
      if (params.idQuote) {
        await axiosAPI.put(`quotes/${params.idQuote}.json`, { ...post });
      }
      navigate("/");
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? <Loader /> : (
        <>
          {quote ? (
            <>
              <QuoteForm submitForm={submitForm} quoteToEdit={quote} />
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default EditQuote;