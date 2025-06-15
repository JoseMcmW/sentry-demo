import React from 'react';

const FlashcardList = ({ flashcards, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 curs">
      {flashcards.map((card) => (
        <div
          key={card.id}
          className="p-4 border rounded shadow-sm bg-white"
        >
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p>{card.description}</p>
          <span className="text-sm text-gray-500">{card.category}</span>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => onEdit(card)}
              className="text-blue-500 cursor-pointer"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(card.id)}
              className="text-red-500 cursor-pointer"
            >
              Borrar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlashcardList;
