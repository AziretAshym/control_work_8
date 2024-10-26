import React, { useCallback, useEffect, useState } from "react";
import { IQuote, IQuoteAPI } from "../../types";
import axiosAPI from "../../AxiosAPI.ts";
import { NavLink } from "react-router-dom";
import Loader from "../../Components/UI/Loader/Loader.tsx";
import Categories from "../../Components/Categories/Categories.tsx";

const Quotes = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const fetchData = useCallback(async (category?: string) => {
    try {
      setLoading(true);
      const query = category ? `?orderBy="category"&equalTo="${category}"` : "";
      const response = await axiosAPI.get<IQuoteAPI>(`quotes.json${query}`);

      if (response.data) {
        const quotesFromAPI: IQuote[] = Object.keys(response.data).map(
          (quoteKey) => ({
            id: quoteKey,
            ...response.data[quoteKey],
            datetime: response.data[quoteKey].datetime,
          }),
        );
        setQuotes(quotesFromAPI);
      } else {
        setQuotes([]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchData(selectedCategory);
  }, [fetchData, selectedCategory]);

  const deleteQuote = async (id: string) => {
    try {
      await axiosAPI.delete(`/quotes/${id}.json`);
      setQuotes((prevQuotes) => prevQuotes.filter((quote) => quote.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="container d-flex mb-5 mt-3">
      <Categories onSelectCategory={setSelectedCategory} />

      <div className="w-100">
        {loading ? (
          <Loader />
        ) : (
          <>
            {quotes.length === 0 ? (
              <h2 className="text-center">No quotes</h2>
            ) : (
              quotes.map((quote) => (
                <div
                  key={quote.id}
                  className="card w-100 ms-5 mb-3"
                  style={{ width: "40rem" }}
                >
                  <div className="card-header bg-primary-subtle d-flex justify-content-between">
                    <p className="fs-4 fw-semibold">{quote.author}</p>
                    <p className="fs-4 fw-semibold">{new Date(quote.datetime).toLocaleDateString()}</p>
                  </div>
                  <div className="card-body">
                    <p className="card-title fs-5">
                      Category: <strong>{quote.category}</strong>
                    </p>
                    <p className="card-text fs-4">{quote.text}</p>
                    <NavLink
                      to={`quotes/${quote.id}/edit`}
                      className="btn btn-primary me-3"
                    >
                      Edit
                    </NavLink>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => deleteQuote(quote.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Quotes;
