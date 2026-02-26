function Items({title, items}) {
    return(
        <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
        {title}
      </h1>
      
      <ul className="space-y-3">
        {items.map(item => (
          <li 
            key={item.id} 
            className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-center"
          >
            <span className="text-lg text-gray-800">
              {item.text} 
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
               {item.description}
            </span>
          </li>
        ))}
      </ul>
      
      
    </div>
    )
}

export default Items;