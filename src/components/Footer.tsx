import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-dark-bg border-t border-white/[0.06]">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: copyright */}
          <p className="text-white/30 text-sm font-body md:flex-1">
            &copy; {new Date().getFullYear()} Sinai Digital. All rights reserved.
          </p>

          {/* Center: logo — use flex-1 on siblings for true centering */}
          <div className="flex-shrink-0">
            <Image
              src="/images/sinai-digital-lockup-vertical-inverse-512.png"
              alt="Sinai Digital"
              width={120}
              height={120}
            />
          </div>

          {/* Right: email */}
          <div className="md:flex-1 md:text-right">
            <a
              href="mailto:matt@sinaidigital.dev"
              className="text-white/30 hover:text-white/60 text-sm font-body transition-colors duration-300"
            >
              matt@sinaidigital.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
