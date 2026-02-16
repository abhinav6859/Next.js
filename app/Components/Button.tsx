// components/Button.tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
    >
      {text}
    </button>
  );
}
