import { AnimatePresence, motion } from "motion/react"
import type { Coin } from "../../types/coin"
import CoinBox from "./coins/CoinBox"
import CoinLoading from "./coins/CoinLoading"

type Props = {
    tag: string,
    icon: React.ReactNode,
    isLoading: boolean,
    list: Coin[]
}

const containerVariants = {
  hidden: { opacity: 0, y: 180 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
};

export default function CoinCard({ tag, icon, isLoading, list }: Props) {
    return (
        <div className="relative w-full h-85 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 overflow-hidden text-white transition-all duration-300 p-5 flex items-start justify-start flex-col">
            <div className="h-[28px] rounded-full bg-theme-exra-light flex items-center justify-center gap-1 px-3">
                {icon}
                <span className="text-[13.5px] text-theme -translate-y-[0.6px]">{tag}</span>
            </div>
            <div className="w-full flex flex-col gap-4 mt-6 relative">
                {
                    isLoading ? (
                        <>
                            <CoinLoading />
                            <CoinLoading />
                            <CoinLoading />
                            <CoinLoading />
                            <CoinLoading />
                        </>
                    ) : (
                        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <AnimatePresence>
                                {list.map((coin, index) => (<CoinBox key={coin.uuid} coin={coin} index={index} />))}
                            </AnimatePresence>
                        </motion.div>
                    )
                }

            </div>
        </div>
    )
}
