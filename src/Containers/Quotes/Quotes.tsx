import React, {useCallback, useEffect, useState} from 'react';
import {IQuote, IQuoteAPI} from "../../types";
import axiosAPI from "../../AxiosAPI.ts";
import { NavLink } from 'react-router-dom';
import Loader from '../../Components/UI/Loader/Loader.tsx';

const Quotes = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosAPI.get<IQuoteAPI>('quotes.json');
      if (response.data) {
        const quotesFromAPI: IQuote[] = Object.keys(response.data).map(quoteKey => ({
          id: quoteKey,
          ...response.data[quoteKey],
        }));
        setQuotes(quotesFromAPI);
      }
    }catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const deleteQuote = async (id: string) => {
    try {
      await axiosAPI.delete(`/quotes/${id}.json`);
      setQuotes(prevPosts => prevPosts.filter(quote => quote.id !== id));
    } catch (e) {
      console.error(e);
    }
  };



  return (
    <>

      <main className="container d-flex mb-5 mt-3">
        <ul className=" list-groupme-5 fs-4 w-25">
          <li className="list-group-item"><a className="text-decoration-none" href="#">Star Wars</a></li>
          <li className="list-group-item"><a className="text-decoration-none" href="#">Famous people</a></li>
          <li className="list-group-item"><a className="text-decoration-none" href="#">Saying</a></li>
          <li className="list-group-item"><a className="text-decoration-none" href="#">Humour</a></li>
          <li className="list-group-item"><a className="text-decoration-none" href="#">Motivational</a></li>
        </ul>

        <div className="w-100">

          {loading ? <Loader /> : (
            <>
              {quotes.length === 0 ? <h2 className="text-center">No quotes</h2> : (
                <>
                  {quotes.map((quote) => (
                    <div key={quote.id} className="card w-100 ms-5 mb-3" style={{width: '40rem'}}>
                      <div className="card-header bg-primary-subtle">
                        <p className="fs-4 fw-semibold">{quote.author}</p>
                      </div>
                      <div className="card-body">
                        <p className="card-title fs-5">Category: <strong>{quote.category}</strong></p>
                        <p className="card-text fs-4">{quote.text}</p>
                        <NavLink to={`quotes/${quote.id}/edit`} className="btn btn-primary me-3">Edit</NavLink>
                        <button type="button" className="btn btn-primary" onClick={() => deleteQuote(quote.id)}>Delete</button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Quotes;