import React, { useEffect, useState } from 'react';
import FlashcardForm from './components/FlashcardForm';
import FlashcardList from './components/FlashcardList';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('flashcards');
    if (stored) {
      setFlashcards(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  const handleSave = (card) => {
    if (flashcards.some((c) => c.id === card.id)) {
      // Editar
      const updated = flashcards.map((c) => (c.id === card.id ? card : c));
      setFlashcards(updated);
    } else {
      // Nuevo
      setFlashcards([...flashcards, card]);
    }
    setSelectedCard(null);
  };

  const handleEdit = (card) => {
    setSelectedCard(card);
  };

  const handleDelete = (id) => {
    const updated = flashcards.filter((c) => c.id !== id);
    setFlashcards(updated);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">📚 Flashcards</h1>
      <FlashcardForm card={selectedCard} onSave={handleSave} />
      <FlashcardList
        flashcards={flashcards}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
