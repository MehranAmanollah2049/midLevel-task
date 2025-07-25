
type Props = {
    children: React.ReactNode,
    className?: string
}

export default function Button({ children , className }: Props) {
    return (
        <button className={`btn-theme cursor-pointer ${className}`}>
            {children}
        </button>
    )
}