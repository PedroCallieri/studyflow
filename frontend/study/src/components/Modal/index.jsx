export default function Modal({ titulo, aberto, onClose, children }) {
  if (!aberto) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B4332]/40"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl border border-[#95D5B2]">
        <div className="p-4 bg-[#D8F3DC] border-b border-[#95D5B2] flex justify-between items-center">
          <h2 className="font-bold text-[#1B4332] text-lg">{titulo}</h2>
          <button onClick={onClose} className="text-[#1B4332]/60 hover:text-[#1B4332] font-bold text-lg">
            X
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}