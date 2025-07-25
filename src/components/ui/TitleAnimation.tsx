import { motion } from "motion/react"

type Props = {
    text: string,
    animatedTexts: string[],
    coloredTexts: string[],
    className: string
}

export default function TitleAnimation({ text, animatedTexts, coloredTexts, className }: Props) {

    const words = text.trim().split(" ")

    return (
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3 }} viewport={{ once: true }} className={className}>
            {words.map((word, index) => {
                const isAnimated = animatedTexts.includes(word);
                const isColored = coloredTexts.includes(word);

                const classNames = [isColored ? "text-theme" : "", "mx-1"].filter(Boolean).join(" ");

                if (isAnimated) {

                    const delayIndex = animatedTexts.findIndex((t) => t === word);
                    const delay = delayIndex !== -1 ? delayIndex * 0.1 : 0;

                    return (
                        <motion.span
                            key={index}
                            initial={{ y: 5 , filter: "blur(5px)" }}
                            whileInView={{ y: 0 , filter: "blur(0)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay }}
                            style={{ display: "inline-block" }}
                            className={classNames}
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