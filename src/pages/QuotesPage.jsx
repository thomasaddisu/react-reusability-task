import React, { useState, useEffect } from 'react';

function QuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    // Simulating API call with different pattern
    setTimeout(() => {
      try {
        const fakeQuotes = [
          { id: 101, text: 'The best way to predict the future is to invent it.', author: 'Alan Kay' },
          { id: 102, text: 'Life is what happens when you\'re busy making other plans.', author: 'John Lennon' },
          { id: 103, text: 'Get busy living or get busy dying.', author: 'Stephen King' },
          { id: 104, text: 'You only live once, but if you do it right, once is enough.', author: 'Mae West' },
          { id: 105, text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
          { id: 106, text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' }
        ];
        setQuotes(fakeQuotes);
        setIsFetching(false);
      } catch (err) {
        setErrorMsg('Oops! Quotes could not be loaded');
        setIsFetching(false);
      }
    }, 1500); // Different timeout
  }, []);

  // Different loading UI (text only, no spinner)
  if (isFetching) {
    return (
      <div className="text-center p-12 bg-purple-50 rounded-lg">
        <h3 className="text-xl font-semibold text-purple-800 mb-2">
          Please wait while we fetch some inspiration...
        </h3>
        <p className="text-purple-600 animate-pulse">Loading quotes</p>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="m-6 p-4 bg-red-100 border-2 border-red-300 text-red-700 rounded-lg text-center">
        <p className="font-bold text-lg">⚠️ Error</p>
        <p>{errorMsg}</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-b from-purple-50 to-pink-50 min-h-screen">
      <h2 className="text-3xl font-bold text-purple-700 border-l-4 border-purple-500 pl-4 mb-8">
        Inspirational Quotes
      </h2>
      
      {/* Different list style from TasksPage - cards instead of list */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quotes.map(item => (
          <div 
            key={item.id} 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-purple-100"
          >
            <p className="text-lg text-gray-700 font-serif italic mb-4">
              "{item.text}"
            </p>
            <p className="text-right text-purple-600 font-bold border-t-2 border-purple-100 pt-3">
              — {item.author}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center text-gray-500 border-t-2 border-purple-200 pt-6">
        <p className="text-sm uppercase tracking-wide">✨ {quotes.length} quotes of wisdom ✨</p>
      </div>
    </div>
  );
}

export default QuotesPage;