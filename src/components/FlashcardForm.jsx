import React, { useState, useEffect } from 'react';

const FlashcardForm = ({ card, onSave }) => {
  const [form, setForm] = useState({
    id: Date.now(),
    title: '',
    description: '',
    category: ''
  });

  useEffect(() => {
    if (card) {
      setForm(card);
    } else {
      setForm({
        id: Date.now(),
        title: '',
        description: '',
        category: ''
      });
    }
  }, [card]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        className="w-full p-2 border rounded"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Título"
        required
      />
      <textarea
        className="w-full p-2 border rounded"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Descripción"
        required
      />
      <input
        className="w-full p-2 border rounded"
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Categoría"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
      >
        Guardar
      </button>
    </form>
  );
};

export default FlashcardForm;
