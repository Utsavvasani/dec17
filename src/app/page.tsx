import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: 'var(--secondary-surface)' }}
    >
      <div
        className="rounded-2xl w-[1000px] max-w-full flex flex-col justify-between overflow-hidden"
        style={{
          backgroundColor: 'var(--background)',
          boxShadow: '15px 15px 30px var(--primary)',
        }}
      >
        <div className="flex flex-col md:flex-row flex-1">
          {/* Left side: Text content */}
          <div className="flex-1 p-10" style={{ color: 'var(--primary)' }}>
            <div className="mb-4">
              <Image
                src="/dec17_logo.png"
                alt="DEC17 IMPEX Logo"
                width={160}
                height={160}
                className="mx-auto md:mx-0 w-40 h-40"
              />
            </div>

            <h1 className="text-4xl font-extrabold mb-6 leading-tight">
              Under Maintenance
            </h1>

            <p className="text-lg mb-8">
              We’re currently making some improvements to serve you better.
              Please check back soon!
            </p>

            <div className="text-left text-sm mb-8 space-y-2">
              <p>
                <strong className="font-semibold">Business:</strong> DEC17 IMPEX LLP
              </p>
              <p>
                <strong className="font-semibold">Email:</strong> info@dec17impex.com
              </p>
              <p>
                <strong className="font-semibold">Phone:</strong> +91 81419 25344
              </p>
            </div>
          </div>

          {/* Right side: Illustration */}
          <div
            className="flex-1 hidden md:block"
            style={{ backgroundColor: 'var(--background)' }}
          >
            <Image 
              src="/under_construction.svg"
              alt="Under Construction Illustration"
              width={500}
              height={500}
              className="w-full h-full object-contain p-6"
            />
          </div>
        </div>

        {/* Bottom centered line */}
        <div className="text-center text-sm py-4">
          <a
            href="https://kelvyoverseas.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-blue-600 transition-colors"
          >
            Kelvy Overseas
          </a>{' '}
          , Powered by Dec17 Impex
        </div>
      </div>
    </div>
  );
}
