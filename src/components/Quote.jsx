import React, { useState } from "react";
import axios from "axios";
import './Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getQuoteData = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.log(error);
    }
  };

  const copyToClipboard = () => {
    if ( quote === '')
        return;
    const textToCopy = `${quote} - ${author}`;
    navigator.clipboard.writeText(textToCopy).then( () => {
        alert("Copied Successfully.");
    }).catch( (error) => {
        console.log("Error while copying.");
    });
  }

  return (
    <>
      <div className="container">
      <h1 style = { {padding: '20px', margin: '0', backgroundColor: 'gray', color: 'azure'} } className="title" >Random Quote Generator</h1>
        <div className="quote-box"> 
            <p className="quote"> <span> Quote </span> {quote} </p>
            <p className="author"> <span> Author </span> {author} </p>
            <div className="btn">
                <button onClick={getQuoteData }>generate quote</button>
                <button onClick={ copyToClipboard }>Copy</button>
            </div>
        </div>
        <div className="footer">Copyright <span> &#169; </span> by rohit {new Date().getFullYear()} </div>
      </div>
    </>
  );
};

export default Quote;
