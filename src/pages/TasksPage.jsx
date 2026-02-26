import React, { useState, useEffect } from 'react';
import Items from '../components/Items';

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        const fakeTasks = [
          { id: 1, text: 'Buy groceries', description: 'pending' },
          { id: 2, text: 'Finish report', description: 'in-progress' },
          { id: 3, text: 'Call mom', description: 'completed' },
          { id: 4, text: 'Pay bills', description: 'pending' },
          { id: 5, text: 'Schedule meeting', description: 'pending' },
          { id: 6, text: 'Book dentist', description: 'completed' }
        ];
        setTasks(fakeTasks);
        setLoading(false);
      } catch (err) {
        setError('Failed to load tasks');
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="text-center p-8">
        <div className="spinner w-10 h-10 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full mx-auto"></div>
        <p className="mt-4 text-gray-600 font-medium">Loading your tasks...</p>
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
   <Items title="My Tasks" items={tasks} />
  );
}

export default TasksPage;