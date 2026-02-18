import React, { useState, useEffect } from 'react';

function QuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    
    setTimeout(() => {
      try {
        const fakeQuotes = [
          { id: 101, text: 'The best way to predict the future is to invent it.', description: 'Alan Kay' },
          { id: 102, text: 'Life is what happens when you\'re busy making other plans.', description: 'John Lennon' },
          { id: 103, text: 'Get busy living or get busy dying.', description: 'Stephen King' },
          { id: 104, text: 'You only live once, but if you do it right, once is enough.', description: 'Mae West' },
          { id: 105, text: 'The only way to do great work is to love what you do.', description: 'Steve Jobs' },
          { id: 106, text: 'Simplicity is the ultimate sophistication.', description: 'Leonardo da Vinci' }
        ];
        setQuotes(fakeQuotes);
        setLoading(false);
      } catch (err) {
        setError('Failed to load quotes');
        setLoading(false);
      }
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="text-center p-8">
        <div className="spinner w-10 h-10 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full mx-auto"></div>
        <p className="mt-4 text-gray-600 font-medium">Loading inspirational quotes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 m-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
        Inspirational Quotes
      </h1>
      
      <ul className="space-y-3">
        {quotes.map(quote => (
          <li 
            key={quote.id} 
            className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-center"
          >
            <span className="text-lg text-gray-800">
              &ldquo;{quote.text}&rdquo;  
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
               {quote.description}
            </span>
          </li>
        ))}
      </ul>
      
      
    </div>
  );
}

export default QuotesPage;
