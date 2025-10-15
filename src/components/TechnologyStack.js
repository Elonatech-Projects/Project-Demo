import Image from 'next/image'

export default function TechnologyStack() {
  const icons = [
    '/images/csharp.png',
    '/images/android.png',
    '/images/postgres.png',
    '/images/nodejs.png',
    '/images/gulp.png',
    '/images/react.png',
    '/images/css3.png',
    '/images/python.png',
    '/images/php.png',
    '/images/csharp.png',
  ];

  return (
    <section className="bg-[#333232] text-white py-20 max-h-1/2">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Technology stack</h2>
        {/* <p className="text-sm text-blue-300 mb-6 mt-2">Meet our tech stack</p> */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {icons.map((src, i) => (
            <div key={i} className="w-24 h-16 flex items-center justify-center opacity-90">
              <Image src={src} alt={`tech-${i}`} width={60} height={60} style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
