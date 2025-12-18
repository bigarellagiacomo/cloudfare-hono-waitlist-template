export default function Button({ text }: { text: string }) {
  const handleClick = () => alert("clicked!");

  return (
    <button
      onClick={handleClick}
      className="rounded-xl bg-blue-400 px-5 py-3 text-white shadow"
    >
      {text}
    </button>
  );
}
