import React from 'react';

const QuoteForm = () => {
  return (
    <>
      <form className="w-50 ms-auto me-auto">
        <div className="container">
          <div className="mb-3">
            <select className="form-select" aria-label="Default select example">
              <option selected>Select category</option>
              <option value="Star Wars">Star Wars</option>
              <option value="Famous people">Famous people</option>
              <option value="Saying">Saying</option>
              <option value="Humour">Humour</option>
              <option value="Motivational">Motivational</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Author</label>
            <input type="text" className="form-control" id="author" placeholder="Enter your name" required/>
          </div>

          <div className="mb-3">
            <label htmlFor="quote_text" className="form-label">Quote</label>
            <textarea className="form-control" id="quote_text" placeholder="Enter quote text" required/>
          </div>

          <button type="submit" className="btn btn-primary">Add new quote</button>
        </div>
      </form>
    </>
  );
};

export default QuoteForm;