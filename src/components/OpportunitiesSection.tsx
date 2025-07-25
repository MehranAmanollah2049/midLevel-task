import CardSlider from "./slider/CardSlider";
import Button from "./ui/Button";
import TagBox from "./ui/TagBox";
import TextSplitAnimation from "./ui/TextSplitAnimation";
import TitleAnimation from "./ui/TitleAnimation";
import { motion } from "motion/react"

export default function OpportunitiesSection() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-custom flex items-center justify-center flex-col gap-3 relative">
                <div className='absolute -top-20 size-[300px] rounded-full bg-white opacity-30 min-[500px]:opacity-40 blur-[100px] pointer-events-none -z-1'></div>
                <TagBox title="New Opportunities">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-[14.5px] fill-gray-100" viewBox="0 0 24 24" width="512" height="512"><path d="M18.713,12H14a2,2,0,0,1-2-2V5.274a3,3,0,0,0-1.166-2.383,2.871,2.871,0,0,0-2.481-.534,10.969,10.969,0,0,0,.553,21.414A11,11,0,0,0,21.64,15.657a2.876,2.876,0,0,0-.533-2.485A3.055,3.055,0,0,0,18.713,12Zm.988,3.168A8.969,8.969,0,1,1,8.842,4.3a.871.871,0,0,1,.764.172,1.016,1.016,0,0,1,.4.806V10a4,4,0,0,0,4,4h4.712a1.041,1.041,0,0,1,.816.4A.884.884,0,0,1,19.7,15.168Z" /><path d="M23.651,7.446A10.073,10.073,0,0,0,16.582.372,2.1,2.1,0,0,0,16.038.3a2,2,0,0,0-2.019,2V7a3,3,0,0,0,3,3h4.719A2.008,2.008,0,0,0,23.651,7.446ZM21.153,8H17.015a1,1,0,0,1-1-1l-.008-4.693a.048.048,0,0,1,.025-.009l.026,0A8.072,8.072,0,0,1,21.734,8Z" /></svg>
                </TagBox>
                <TitleAnimation text="TRADE YOUR FAVOURATE MARKETS" animatedTexts={["FAVOURATE"]} coloredTexts={["TRADE"]} className="text-[29px]/9 min-[385px]:text-[31px]/9 min-[430px]:text-[34px]/10 min-[470px]:text-[36px]/10 min-[800px]:text-[35px] text-white font-inter-bold mt-1 text-center" />
                <TextSplitAnimation text="Want to buy Bitcoin outright or trade CFDs on Gold or EUR/USD? We've got you covered with access to 100+ global markets on one platform." className="text-gray-400 text-[14px]/5 min-[400px]:text-[15px]/5 min-[460px]:text-[17px] w-full min-[1150px]:w-[64%]" />
                <motion.div initial={{ opacity: 0 , scale: 0.60 }} whileInView={{ opacity: 1 , scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 , type: "spring", bounce: 0.6 , duration: 1 }}>
                    <Button className="mt-5">
                        View All Coins
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 fill-white translate-y-[1px]" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" /></svg>
                    </Button>
                </motion.div>

                <CardSlider />
            </div>
        </div>
    )
}