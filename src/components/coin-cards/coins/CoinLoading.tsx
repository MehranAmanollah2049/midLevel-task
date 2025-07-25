
export default function CoinLoading() {
    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
                <div className="size-9 rounded-full bg-gray-500 animation-pluse"></div>
                <div className="flex flex-col gap-1">
                    <p className="w-18 h-2 bg-gray-500 animation-pluse rounded-full"></p>
                    <p className="w-10 h-2 bg-gray-500 animation-pluse rounded-full"></p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-1">
                <p className="w-10 h-2 bg-gray-500 animation-pluse rounded-full"></p>
                <p className="w-7 h-2 bg-gray-500 animation-pluse rounded-full"></p>
            </div>
        </div>
    )
}