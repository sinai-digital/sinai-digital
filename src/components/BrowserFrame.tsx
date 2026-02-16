interface BrowserFrameProps {
  url: string
  children: React.ReactNode
}

export default function BrowserFrame({ url, children }: BrowserFrameProps) {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/[0.08] shadow-[0_8px_60px_-12px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.01]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/[0.04]">
        {/* Traffic light dots */}
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        {/* URL bar */}
        <div className="flex-1 ml-3">
          <div className="bg-white/[0.04] rounded-lg px-3 py-1.5 text-[11px] text-white/30 font-body truncate">
            {url}
          </div>
        </div>
      </div>
      {/* Content area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-white">
        {children}
      </div>
    </div>
  )
}
