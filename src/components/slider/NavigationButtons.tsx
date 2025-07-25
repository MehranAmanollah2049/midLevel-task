
type Props = {
    mode: "prev" | "next"
}

export default function NavigationButtons({ mode }: Props) {
    return (
        <div className={`${mode == "prev" ? "prev-btn" : "next-btn"} size-10 flex items-center justify-center rounded-full bg-gray-200 cursor-pointer absolute ${mode == "prev" ? "-left-4" : "-right-4"} top-1/2 -translate-y-1/2 z-2 transition-all`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`size-6 fill-gray-300 ${mode == "prev" ? "rotate-180" : ""}`} id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z" /></svg>
        </div>
    )
}