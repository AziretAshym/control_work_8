import React, { useEffect, useState } from 'react';
import { IQuoteForm } from '../../types';

const initialForm = {
  category: "",
  author: "",
  text: "",
};

interface Props {
  quoteToEdit?:IQuoteForm
  submitForm: (quote: IQuoteForm) => void;
}


const QuoteForm: React.FC<Props> = ({quoteToEdit,submitForm}) => {
  const [quote, setQuote] = useState<IQuoteForm>({...initialForm});

  useEffect(() => {
    if (quoteToEdit) {
      setQuote(prevState => ({
        ...prevState,
        ...quoteToEdit
      }))
    }
  }, [quoteToEdit]);

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setQuote((prevState) => ({
      ...prevState,
      [name]: value
    }))
  };

  const onFormSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitForm({...quote});

    if (!quoteToEdit) {
      setQuote({...initialForm});
    }
  };

  return (
    <>
      <h1 className="text-center mb-5">{quoteToEdit ? "Edit quote" : "Add new quote"}</h1>
      <form className="w-50 ms-auto me-auto" onSubmit={onFormSubmit}>
        <div className="container">
          <div className="mb-3">
            <select
              className="form-select"
              aria-label="Default select example"
              name="category"
              value={quote.category}
              onChange={onChangeField}
            >
              <option value="">Select category</option>
              <option value="Star Wars">Star Wars</option>
              <option value="Famous people">Famous people</option>
              <option value="Saying">Saying</option>
              <option value="Humour">Humour</option>
              <option value="Motivational">Motivational</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              value={quote.author}
              onChange={onChangeField}
              name="author"
              id="author"
              placeholder="Enter your name"
              required/>
          </div>

          <div className="mb-3">
            <label htmlFor="quote_text" className="form-label">Quote</label>
            <textarea
              className="form-control"
              value={quote.text}
              onChange={onChangeField}
              name="text"
              id="quote_text"
              placeholder="Enter quote text"
              required/>
          </div>

          <button type="submit" className="btn btn-primary">{quoteToEdit ? "Edit" : "Add"}</button>
        </div>
      </form>
    </>
  );
};

export default QuoteForm;