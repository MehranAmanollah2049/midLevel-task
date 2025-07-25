import { motion } from "motion/react"

type Props = {
    text: string,
    animatedTexts: string[],
    coloredTexts: string[],
    className: string
}

const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.6,
            staggerChildren: 0.4,
            delayChildren: 0.4
        }
    }
}

const wordVariant = {
    hidden: { scale: 0.9, opacity: 0, filter: "blur(8px)" },
    visible: { scale: 1, opacity: 1, filter: "blur(0)" },
    transition: { type: "spring", stiffness: 300, damping: 20 }
};

export default function TitleAnimation({ text, animatedTexts, coloredTexts, className }: Props) {

    const words = text.trim().split(" ")

    return (
        <motion.h1
            className={className}
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
        >
            {words.map((word, index) => {
                const isAnimated = animatedTexts.includes(word);
                const isColored = coloredTexts.includes(word);

                const classNames = [isColored ? "text-theme" : "", "mx-1"].filter(Boolean).join(" ");

                if (isAnimated) {
                    return (
                        <motion.span
                            key={index}
                            variants={wordVariant}
                            className={`inline-block ${classNames}`}
                        >
                            {word}
                        </motion.span>
                    );
                }

                return (
                    <span key={index} className={classNames}>
                        {word}
                    </span>
                );
            })}
        </motion.h1>
    )
}