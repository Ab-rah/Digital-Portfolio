'use client';

import { useState } from 'react';

export default function TodoInput({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="text"
        value={text}
        placeholder="Enter a task"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
