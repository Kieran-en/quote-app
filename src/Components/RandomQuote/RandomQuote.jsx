import React, {useState, useEffect} from 'react'
import './RandomQuote.css'
import reload_icon from '../Assets/reload.jpg'




export const RandomQuote = () => {

    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState({
        quote: "putting in the work!!!",
        author: "Kieran"
    });
    const [currentColor, setCurrentColor] = useState(["#4c9196"]);


    useEffect(() => {
        async function loadQuotes() {
            const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
                headers: {
                    'X-Api-Key': 'N2cuUR9MWu1pL85QBDXpbw==I20xpn1kHm31h6fV', // Replace with your actual API key
                },
            });
            const data = await response.json();
            setQuotes(data);  // Store the quotes in state
        }

        loadQuotes();  // Call the function to load quotes when the component mounts


    });  // Empty dependency array ensures this runs only once

    const random = () => {
        if (quotes.length > 0) {
            const select = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote(select);
        }
        
    };

    const changeColor = () => {
        const color = ["#ba4949", "#4c9196", "#4d7fa2", "#3f3434"];
        const select = color[Math.floor(Math.random() * color.length)];
        setCurrentColor(select);
    }

  return (
    
    <div className='container' style={{
        backgroundColor: currentColor
    }}>
        <div className="quote">"{quote.quote}"</div>
        <div>
            <div className="line"></div>
            <div className="bottom">
               <div className="author">{quote.author}</div>
               <div className="icon">
                    <img src={reload_icon} onClick={event => {
                        random();
                        changeColor();
                    }}
                     alt="reload" />
                </div> 
            </div>
        </div>

    </div>
  )
}
