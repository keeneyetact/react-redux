export default function NoContent ({ message }) {
    return (
    <div className="flex items-center justify-center">
        <div className="relative max-w-xl px-4 py-2 rounded-md shadow w-full text-center">
            <span className="empty-text">{message}</span>
        </div>
    </div>
    )
}