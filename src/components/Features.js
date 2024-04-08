export default function Features() {
    return (
        <div className="flex flex-col bg-pink-600 py-5 gap-10">
            <FeatureCard title="Feature 1"/>
            <FeatureCard title="Feature 2"/>
            <FeatureCard title="Feature 3"/>
        </div>
    )
}

function FeatureCard({ title }) {
    return (
      <div className={`flex flex-col-reverse sm:flex-row gap-5 sm:gap-10 px-2 py-2 sm:px-5 sm:py-5 outline outline-2`}>
        <div className="flex flex-col flex-1 outline-dashed outline-1">
          <div>{title}</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className="flex flex-col flex-1">
          <div className={`min-h-full min-w-full outline-dashed outline-1`}>
            Feature Image goes here
          </div>
        </div>
      </div>
    );
}
