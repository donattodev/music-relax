import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import Link from 'next/link'
import { LikeHeroHeart } from '../like/like-hero-heart'
import { Topbar } from '../navs/topbar'

export function Hero() {
  return (
    <header className="relative min-h-[420px] md:h-[50vh] w-full overflow-hidden bg-background-950">
      {/* Background Image with Layers of Gradients */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url(../assets/hero/hero-cover.png)] bg-cover bg-center max-sm:bg-right" />
          {/* Bottom Fade Out */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-950/40 to-zinc-950/90" />
          {/* Side Fade Out */}
          <div className="absolute inset-0 bg-linear-to-r from-zinc-950/90 via-zinc-950/20 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="w-full">
            <Topbar />
        </div>

        <div className="px-8 md:px-14 pb-20 pt-12 flex flex-col justify-start gap-2 animate-in fade-in slide-in-from-left-6 duration-1000">
            <div className="flex flex-col">
                <span className="text-primary text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] block drop-shadow-md leading-none mb-1">
                    Recém Lançado
                </span>
                <Heading size="lg" className="text-5xl md:text-7xl mb-4 tracking-tighter drop-shadow-2xl leading-none">
                    Reborn
                </Heading>
                
                <div className="flex items-center flex-wrap gap-4">
                    {/* Author Badge */}
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md w-fit px-3 py-1.5 rounded-xl border border-white/5 shadow-2xl">
                        <div className="size-5 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-black text-[8px] font-black italic">FD</span>
                        </div>
                        <Text size="md" className="font-bold text-white/90 text-[11px] tracking-wide">
                            Felippe Donatto <span className="text-white/20 mx-2">|</span> <span className="text-white/40 font-bold italic uppercase text-[8px] tracking-widest">Single</span>
                        </Text>
                    </div>

                    {/* Action Buttons next to author */}
                    <div className="flex items-center gap-1">
                        <Link href="/albuns/reborn">
                            <button type="button" className="px-5 py-2.5 bg-primary text-black font-black text-[9px] uppercase tracking-[0.2em] rounded-lg hover:scale-105 hover:bg-white transition-all shadow-xl shadow-primary/20 cursor-pointer active:scale-95">
                                Ouvir Agora
                            </button>
                        </Link>
                        <div className="p-2 transition-all cursor-pointer group">
                            <LikeHeroHeart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </header>
  )
}
