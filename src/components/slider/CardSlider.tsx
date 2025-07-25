
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavigationButtons from './NavigationButtons';
import CoinCard from '../coin-cards/CoinCard';
import { useEffect, useState } from 'react';
import type { Coin } from '../../types/coin';

export default function CardSlider() {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [List1, setList1] = useState<Coin[]>([]);
    const [List2, setList2] = useState<Coin[]>([]);
    const [List3, setList3] = useState<Coin[]>([]);

    // این متد صرفا تستی بوده و برای تغییر رمز ارز ها استفاده میشه
    const fetch_coins = async (): Promise<void> => {
        const api = await fetch("https://api.coinranking.com/v2/coins?limit=15");
        const res = await api.json();
        const coins: any[] = res.data.coins;
        const mapedCoins = coins.map(coin => ({
            uuid: coin.uuid,
            iconUrl: coin.iconUrl,
            name: coin.name,
            symbol: coin.symbol,
            price: coin.price,
            change: coin.change
        }))

        const shuffled = [...mapedCoins].sort(() => 0.3 - Math.random());

        setList1(shuffled.slice(0, 5));
        setList2(shuffled.slice(5, 10));
        setList3(shuffled.slice(10, 15));

        setIsLoading(false)
    }

     // این متد صرفا تستی بوده و برای تغییر رمز ارز ها استفاده میشه
    useEffect(() => {
        // برای نمایش لودینگ به مدت بلند تر
        setTimeout(() => {
            fetch_coins();
        }, 1400);

        let reload = setInterval(() => {
            console.log("COINS UPDATED");

            fetch_coins()
        }, 6000);

        return () => clearInterval(reload)
    }, [])

    return (
        <div className="w-full mt-9 relative flex items-center justify-center flex-col gap-3 px-4 min-[450px]:px-0 z-5">
            <div className="w-full relative">
                <NavigationButtons mode="prev" />

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    navigation={{
                        prevEl: '.prev-btn',
                        nextEl: '.next-btn',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.pagination'
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        500: {
                            slidesPerView: 2,
                        },
                        800: {
                            slidesPerView: 3
                        }
                    }}
                >
                    <SwiperSlide>
                        <CoinCard list={List1.sort((a, b) => Number(b.price) - Number(a.price))} isLoading={isLoading} tag="Hot List" icon={<svg xmlns="http://www.w3.org/2000/svg" className='size-[13.5px] -translate-y-[1px] fill-theme' viewBox="0 0 24 24" width="512" height="512"><path d="M18.044,5.529c-1.098-1.426-2.233-2.9-3.036-4.495C14.669,.359,13.995-.048,13.256-.008c-.713,.041-1.314,.496-1.569,1.188-.342,.933-.687,2.638-.687,4.345,0,2.209,.688,3.701,1.24,4.901,.469,1.017,.839,1.82,.746,2.847-.09,.979-.946,1.735-2.027,1.727-2.585-.029-3.243-3.303-3.338-6.043-.032-.897-.637-1.655-1.505-1.885-.868-.229-1.77,.132-2.241,.896-1.208,1.961-1.874,4.103-1.874,6.031,0,5.514,4.523,10,10.006,10,5.511-.033,9.994-4.52,9.994-9.983,.056-3.276-1.983-5.925-3.956-8.487Zm-6.05,16.471c-4.38,0-7.994-3.589-7.994-8,0-1.54,.575-3.356,1.622-4.973,.179,5.104,2.066,7.936,5.315,7.973h.047c2.061,0,3.811-1.548,3.994-3.544,.142-1.56-.398-2.732-.921-3.866-.52-1.128-1.057-2.294-1.057-4.064,0-1.153,.196-2.384,.423-3.206,.863,1.606,1.967,3.04,3.037,4.431,1.843,2.395,3.584,4.656,3.541,7.25,0,4.385-3.591,7.974-8.006,8Z" /></svg>} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CoinCard list={List2.sort((a, b) => Number(b.price) - Number(a.price))} isLoading={isLoading} tag="New Coins" icon={<svg xmlns="http://www.w3.org/2000/svg" className='size-[13.5px] -translate-y-[1px] fill-theme' id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.836,8.794a3.179,3.179,0,0,0-3.067-2.226H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832L4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6A3.177,3.177,0,0,0,23.836,8.794Zm-2.343,1.991-4.144,3.029a1,1,0,0,0-.362,1.116L18.562,19.8a1.227,1.227,0,0,1-1.895,1.365l-4.075-3a1,1,0,0,0-1.184,0l-4.075,3a1.227,1.227,0,0,1-1.9-1.365L7.013,14.93a1,1,0,0,0-.362-1.116L2.507,10.785a1.227,1.227,0,0,1,.724-2.217h5.1a1,1,0,0,0,.952-.694l1.55-4.831a1.227,1.227,0,0,1,2.336,0l1.55,4.831a1,1,0,0,0,.952.694h5.1a1.227,1.227,0,0,1,.724,2.217Z" /></svg>} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CoinCard list={List3.sort((a, b) => Number(b.price) - Number(a.price))} isLoading={isLoading} tag="Top Gainers" icon={<svg xmlns="http://www.w3.org/2000/svg" className='size-[13.5px] -translate-y-[1px] fill-theme' viewBox="0 0 24 24" width="512" height="512"><path d="M23,22H5a3,3,0,0,1-3-3V1A1,1,0,0,0,0,1V19a5.006,5.006,0,0,0,5,5H23a1,1,0,0,0,0-2Z" /><path d="M6,20a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7A1,1,0,0,0,6,20Z" /><path d="M10,10v9a1,1,0,0,0,2,0V10a1,1,0,0,0-2,0Z" /><path d="M15,13v6a1,1,0,0,0,2,0V13a1,1,0,0,0-2,0Z" /><path d="M20,9V19a1,1,0,0,0,2,0V9a1,1,0,0,0-2,0Z" /><path d="M6,9a1,1,0,0,0,.707-.293l3.586-3.586a1.025,1.025,0,0,1,1.414,0l2.172,2.172a3,3,0,0,0,4.242,0l5.586-5.586A1,1,0,0,0,22.293.293L16.707,5.878a1,1,0,0,1-1.414,0L13.121,3.707a3,3,0,0,0-4.242,0L5.293,7.293A1,1,0,0,0,6,9Z" /></svg>} />
                    </SwiperSlide>
                </Swiper>

                <NavigationButtons mode="next" />
            </div>
            {/* pagination */}
            <div className="w-full flex items-center justify-center pagination mt-1"></div>
        </div>
    )
}