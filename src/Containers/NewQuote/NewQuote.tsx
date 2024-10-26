import React from 'react';
import { IQuoteForm } from '../../types';
import AxiosAPI from '../../AxiosAPI.ts';
import QuoteForm from '../../Components/QuoteForm/QuoteForm.tsx';

const NewQuote = () => {

  const submitForm = async (quote: IQuoteForm) => {
    try {
      await AxiosAPI.post("quotes.json", {...quote});
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <QuoteForm submitForm={submitForm} />
    </>
  );
};

export default NewQuote;