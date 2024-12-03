interface BadgeProps {
    text: string
    color?: string
    bgColor?: string
}

export const Badge = ((props: BadgeProps) => {
    return (
        <div className="p-0.5 rounded-lg pr-2 pl-2" style={{ backgroundColor: props.bgColor }}>
            <p className="text-xs text-center" style={{ color: props.color }}>{props.text}</p>
        </div>
    )
})