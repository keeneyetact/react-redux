export default function Error({ message }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative max-w-xl px-4 py-2 rounded-md bg-red-200 shadow w-full text-center">
        <span className="block text-sm">{message}</span>
      </div>
    </div>
  );
}
