import React, { useState, useEffect } from 'react';

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      try {
        const fakeTasks = [
          { id: 1, name: 'Buy groceries', status: 'pending' },
          { id: 2, name: 'Finish report', status: 'in-progress' },
          { id: 3, name: 'Call mom', status: 'completed' },
          { id: 4, name: 'Pay bills', status: 'pending' },
          { id: 5, name: 'Schedule meeting', status: 'pending' },
          { id: 6, name: 'Book dentist', status: 'completed' }
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
        {/* Using the spinner class from index.css */}
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
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
        My Task List
      </h1>
      
      {/* Ugly inline task list with repetitive Tailwind classes */}
      <ul className="space-y-3">
        {tasks.map(task => {
          // Determine status color (hardcoded logic inside JSX)
          let statusColor = '';
          if (task.status === 'completed') statusColor = 'bg-green-100 text-green-800';
          else if (task.status === 'in-progress') statusColor = 'bg-yellow-100 text-yellow-800';
          else statusColor = 'bg-red-100 text-red-800';
          
          return (
            <li 
              key={task.id} 
              className={`p-4 border rounded-lg shadow-sm flex justify-between items-center ${
                task.status === 'completed' ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <span className={`text-lg ${task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {task.name}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}>
                {task.status}
              </span>
            </li>
          );
        })}
      </ul>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-600">
          <span className="font-semibold">Total tasks:</span> {tasks.length}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Completed:</span> {tasks.filter(t => t.status === 'completed').length}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">In progress:</span> {tasks.filter(t => t.status === 'in-progress').length}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Pending:</span> {tasks.filter(t => t.status === 'pending').length}
        </p>
      </div>
    </div>
  );
}

export default TasksPage;