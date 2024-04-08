export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row flex-auto items-center justify-center align-top gap-2 sm:gap-5 px-2 py-2 sm:px-5 sm:py-5 bg-cyan-600">
      <div className="outline-dashed outline-1">
        <h2>Project Name</h2>
      </div>
      <div className="flex flex-row flex-auto justify-end outline-dashed outline-1">
        <div className="px-2">About</div>
        <div className="px-2">Pricing</div>
        <div className="px-2">Get started</div>
      </div>
    </div>
  )
}
