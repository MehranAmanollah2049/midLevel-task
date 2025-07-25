import type { Coin } from "../../../types/coin"
import { motion } from "motion/react"
import { formatSubzeroPrice } from "../../../utils/FormantSubZero"
import React from "react"

type Props = {
    coin: Coin,
    index: number
}

const CoinVariants = {
    hidden: { opacity: 0, scale: 0.70 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

export default React.memo(function CoinBox({ coin, index }: Props) {


    return (
        <motion.div
            layout
            variants={CoinVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-full absolute left-0 flex items-center justify-between gap-2"
            style={{ top: `${index * 52}px` }}
        >
            <div className="w-6/10 flex items-center justify-start gap-2">
                <img src={coin.iconUrl} className="size-8 rounded-full object-cover" />
                <div className="flex flex-col">
                    <p className="w-35 truncate text-white text-[14px]">{coin.name}</p>
                    <p className="text-white opacity-50 text-[11px]">{coin.symbol}</p>
                </div>
            </div>
            <div className="w-3/10 flex flex-col items-start justify-start">
                <p className="text-white text-[12px] w-full text-right">{formatSubzeroPrice(coin.price)}</p>
                <p className={`${Number(coin.change) > 0 ? 'text-green-500' : 'text-red-500'} text-[12px] w-full text-right`}>{coin.change}</p>
            </div>
        </motion.div>
    )
})