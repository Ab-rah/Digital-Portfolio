'use client';

export default function TodoList({
  todos,
  onDelete,
}: {
  todos: string[];
  onDelete: (index: number) => void;
}) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ marginBottom: 10 }}>
          {todo}
          <button style={{ marginLeft: 10 }} onClick={() => onDelete(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
