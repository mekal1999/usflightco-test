export function Card({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  )
}