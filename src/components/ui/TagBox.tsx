
type Props = {
    title: string,
    children: React.ReactNode
}

export default function TagBox({ title , children }: Props) {
    return (
        <div className="h-8 rounded-full border border-gray-200 px-3 flex items-center justify-center gap-[6px] text-gray-100 text-[13px]">
            {children}
            {title}
        </div>
    )
}