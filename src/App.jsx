import React from 'react';
import TasksPage from './pages/TasksPage';
import QuotesPage from './pages/QuotesPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 text-white py-4 px-6 shadow-lg sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-center space-x-8">
          <a 
            href="#tasks" 
            className="hover:text-blue-300 transition-colors font-medium px-4 py-2 rounded-md hover:bg-gray-700"
          >
            Tasks
          </a>
          <a 
            href="#quotes" 
            className="hover:text-purple-300 transition-colors font-medium px-4 py-2 rounded-md hover:bg-gray-700"
          >
            Quotes
          </a>
        </div>
      </nav>
      
      <div className="max-w-6xl mx-auto">
        <section id="tasks" className="scroll-mt-16">
          <TasksPage />
        </section>
        
        <section id="quotes" className="scroll-mt-16 border-t-2 border-gray-300 mt-8">
          <QuotesPage />
        </section>
      </div>
    </div>
  );
}

export default App;