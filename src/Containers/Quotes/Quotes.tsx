import React, {useCallback, useEffect, useState} from 'react';
import {IQuote, IQuoteAPI} from "../../types";
import axiosAPI from "../../AxiosAPI.ts";

const Quotes = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);

  const fetchData = useCallback(async () => {
    try {
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
    }
  }, [])

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <>
      <main className="container d-flex mb-5">
        <ul className=" list-groupme-5 fs-4 w-25">
          <li className="list-group-item"><a className="text-decoration-none" href="#">Star Wars</a></li>
          <li className="list-group-item"><a className="text-decoration-none" href="#">Famous people</a></li>
          <li className="list-group-item"><a className="text-decoration-none" href="#">Saying</a></li>
          <li className="list-group-item"><a className="text-decoration-none" href="#">Humour</a></li>
          <li className="list-group-item"><a className="text-decoration-none" href="#">Motivational</a></li>
        </ul>

        <div className="w-100">

          {quotes.length === 0 ? <h2 className="text-center">No quotes</h2> : (
              <>
                {quotes.map((quote) => (
                    <div className="card w-100 ms-5 mb-3" style={{width: '40rem'}}>
                      <div className="card-header bg-primary-subtle">
                        <p className="fs-4 fw-semibold">{quote.author}</p>
                      </div>
                      <div className="card-body">
                        <p className="card-title fs-5">Category: <strong>{quote.category}</strong></p>
                        <p className="card-text fs-4">{quote.text}</p>
                        <a href="#" className="card-link">Edit</a>
                        <a href="#" className="card-link">Delete</a>
                      </div>
                    </div>
                ))}
              </>
          )}

        </div>
      </main>
    </>
  );
};

export default Quotes;