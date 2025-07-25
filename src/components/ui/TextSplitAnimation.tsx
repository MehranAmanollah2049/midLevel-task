import { motion } from "motion/react"

type Props = {
    text: string,
    className: string
}

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
        },
    },
};

const child = {
    hidden: { y: 10, opacity: 0, filter: "blur(17px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
};


export default function TextSplitAnimation({ text, className }: Props) {
    const words = text.trim().split(" ")

    return (
        <motion.h1
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-wrap justify-center gap-[3px] ${className}`}
        >
            {words.map((word, index) => (
                <motion.span key={index} variants={child} className="inline-block">
                    {word}
                </motion.span>
            ))}
        </motion.h1>
    )
}