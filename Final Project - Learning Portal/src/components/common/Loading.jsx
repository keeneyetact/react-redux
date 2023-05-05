import loader from "../../assets/image/loader.gif";
export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative max-w-xl px-4 py-2 text-green-800 rounded shadow w-full text-center">
        <img className="mx-auto" src={loader} alt="Loading..." />
      </div>
    </div>
  );
}
