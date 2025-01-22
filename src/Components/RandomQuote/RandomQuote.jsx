import React, { useState, useEffect, useRef } from 'react';
import './RandomQuote.css';
import reload_icon from '../Assets/reload.jpg';

export const RandomQuote = ({ currentBackgroundColor, changeColor }) => {
  const [quote, setQuote] = useState({
    quote: "putting in the work!!!",
    author: "Kieran",
  });
  const initialFetchDone = useRef(false); // Track if the initial fetch is complete

//   const colorWithOpacity = currentBackgroundColor + "80";

  // Function to fetch a random quote from the API
  const fetchNewQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
          'X-Api-Key': 'N2cuUR9MWu1pL85QBDXpbw==I20xpn1kHm31h6fV', // Replace with your actual API key
        },
      });
      const data = await response.json();
      if (data.length > 0) {
        setQuote(data[0]); // Set the first quote from the API response
      }
    } catch (error) {
      console.error('Error fetching a new quote:', error);
    }
  };

  // Fetch an initial quote when the component mounts
  useEffect(() => {
    if (!initialFetchDone.current) {
      fetchNewQuote();
      initialFetchDone.current = true; // Mark the fetch as done
    }
  }, []);

  return (
    <div
      className="container"
      style={{
        color: currentBackgroundColor,
      }}
    >
      <div className="quote">"{quote.quote}"</div>
      <div>
        <div
          className="line"
          style={{
            background: currentBackgroundColor,
          }}
        ></div>
        <div className="bottom">
          <div className="author">{quote.author}</div>
          <div className="icon">
            <img
              src={reload_icon}
              onClick={() => {
                fetchNewQuote(); // Fetch a new quote on click
                changeColor();  // Change the background color
              }}
              alt="reload"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
