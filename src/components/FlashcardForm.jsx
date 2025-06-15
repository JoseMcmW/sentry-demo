import React, { useState, useEffect } from 'react';

const FlashcardForm = ({ card, onSave }) => {
  const [form, setForm] = useState({
    id: Date.now(),
    title: '',
    description: '',
    category: ''
  });

  const [errors, setErrors] = useState({});

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
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = 'El título es obligatorio.';
    if (!form.description.trim()) newErrors.description = 'La descripción es obligatoria.';
    if (!form.category.trim()) newErrors.category = 'La categoría es obligatoria.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      const camposFaltantes = Object.keys(validationErrors).join(', ');
      throw new Error(`Formulario inválido: faltan los campos obligatorios: ${camposFaltantes}`);
    }

    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <div>
        <input
          className="w-full p-2 border rounded"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Título"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div>
        <textarea
          className="w-full p-2 border rounded"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Descripción"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      <div>
        <input
          className="w-full p-2 border rounded"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Categoría"
        />
        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
      </div>

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
