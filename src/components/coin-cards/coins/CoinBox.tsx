import type { Coin } from "../../../types/coin"
import { motion } from "motion/react"
import { formatSubzeroPrice } from "../../../utils/FormantSubZero"
import React from "react"

type Props = {
    coin: Coin,
    index: number
}

const CoinVariants = {
    hidden: { opacity: 0, scale: 0.70 , transition: { duration: 0.3 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

export default React.memo(function CoinBox({ coin, index }: Props) {


    return (
        <motion.div
            layout
            variants={CoinVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-full absolute left-0 flex items-center justify-between gap-2 will-change-transform will-change-opacity px-5 py-1 cursor-pointer hover:bg-white/7 group"
            style={{ top: `${index * 51}px` }}
        >
            <div className="w-6/10 flex items-center justify-start gap-2">
                <img src={coin.iconUrl} className="size-8 rounded-full object-cover" />
                <div className="flex flex-col">
                    <p className="w-35 truncate text-white text-[14px]">{coin.name}</p>
                    <p className="text-white opacity-50 text-[11px]">{coin.symbol}</p>
                </div>
            </div>
            <div className="w-3/10 flex flex-col items-start justify-start">
                <p className="text-white text-[12px] w-full text-right">{formatSubzeroPrice(Number(coin.price))}</p>
                <p className={`${Number(coin.change) > 0 ? 'text-green-500' : 'text-red-500'} text-[12px] w-full text-right`}>{coin.change}</p>
            </div>
            <div className="size-6 bg-theme rounded-full flex items-center justify-center absolute -right-3 z-1 transition-all opacity-0 scale-60 group-hover:scale-100 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-3 fill-white" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.421,16.583,20.13,13.292a1,1,0,1,0-1.413,1.414L21.007,17A9.332,9.332,0,0,1,14.321,14.2a.982.982,0,0,0-1.408.08L12.9,14.3a1,1,0,0,0,.075,1.382A11.177,11.177,0,0,0,21.01,19l-2.293,2.293A1,1,0,1,0,20.13,22.7l3.291-3.291A2,2,0,0,0,23.421,16.583Z" /><path d="M21.007,7l-2.29,2.29a.892.892,0,0,0-.054.082.992.992,0,0,0,1.467,1.332L21.836,9l1.586-1.585a2,2,0,0,0,.457-2.1,1.969,1.969,0,0,0-.458-.728L20.13,1.3a1,1,0,1,0-1.413,1.413L21.01,5.005c-4.933.012-7.637,2.674-10.089,5.474C8.669,7.937,6,5.4,1.487,5.046L1.006,5a1,1,0,0,0-1,1,1.02,1.02,0,0,0,1,1c.072,0,.287.033.287.033C5.189,7.328,7.425,9.522,9.6,12c-2.162,2.466-4.383,4.7-8.247,4.96l-.4.021a.994.994,0,1,0,.124,1.985c.156-.007.41-.013.535-.023,5.02-.387,7.743-3.6,10.171-6.409C14.235,9.7,16.551,7.018,21.007,7Z" /></svg>
            </div>
        </motion.div>
    )
})