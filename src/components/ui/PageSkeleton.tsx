const PageSkeleton = () => (
  <div className="min-h-[60vh] flex items-center justify-center pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center max-w-3xl mx-auto mb-20 animate-pulse">
        <div className="h-12 bg-zinc-800 rounded-lg mx-auto mb-6 w-3/4" />
        <div className="h-6 bg-zinc-800/60 rounded w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 bg-zinc-900/50 border border-white/5 rounded-xl animate-pulse" />
        ))}
      </div>
    </div>
  </div>
);

export default PageSkeleton;
