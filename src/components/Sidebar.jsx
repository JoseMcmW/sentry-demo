import React from 'react';

const Sidebar = ({ categories, onSelectCategory, onCreateNew }) => {
  return (
    <aside className="w-64 bg-gray-100 p-4 border-r">
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={onCreateNew}
      >
        Crear nueva
      </button>
      <ul>
        <li
          className="cursor-pointer py-1"
          onClick={() => onSelectCategory(null)}
        >
          Todas
        </li>
        {categories.map((cat) => (
          <li
            key={cat}
            className="cursor-pointer py-1"
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
      <button onClick={() => {throw new Error("This is your first error!");}}>Break the world</button>;
    </aside>
  );
};

export default Sidebar;
