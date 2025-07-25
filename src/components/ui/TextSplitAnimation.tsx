import { motion } from "motion/react"

type Props = {
    text: string,
    className: string
}

export default function TextSplitAnimation({ text, className }: Props) {
    const words = text.trim().split(" ")

    return (
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3 }} viewport={{ once: true }} className={`flex flex-wrap justify-center gap-[3px] ${className}`}>
            {
                words.map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 12, filter: "blur(17px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.350, delay: (index !== -1 ? index * 0.040 : 0) }}
                        style={{ display: "inline-block" }}
                    >
                        {word}
                    </motion.span>
                ))
            }
        </motion.h1>
    )
}