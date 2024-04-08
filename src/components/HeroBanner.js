export default function HeroBanner() {

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-5 sm:gap-10 px-2 py-2 sm:px-5 sm:py-5 bg-emerald-500">
        <div className="flex flex-col flex-1 outline-dashed outline-1">
            <h1>Responsive Tailwind Starter code</h1>
            <p>Kickstart your web projects swiftly and efficiently using responsive component in flexbox for all screen sizes.</p>
            <p>View now button</p>
        </div>
        <div className="flex flex-col flex-1">
            <div className="min-h-full min-w-full outline-dashed outline-1">
                Hero Image goes here
            </div>
        </div>
    </div>
)
}
