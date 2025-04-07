import clsx from "clsx";

type Props = {
  text: string;
  className?: string;
  display?: "inline-block" | "block";
  onlyWords?: boolean;
};

function TextSplitter({
  text,
  className,
  display = "inline-block",
  onlyWords = false,
}: Props) {
  if (!text) return null;

  const words = text.split(" ");

  return words.map((word: string, wordIndex: number) => {
    const splitText = word.split("");
    return (
      <span
        className={clsx("split-word", className)}
        style={{ display, whiteSpace: "pre" }}
        key={`${wordIndex}-${word}`}
      >
        {onlyWords
          ? word
          : splitText.map((char, charIndex) => {
              if (char === " ") return ` `;
              return (
                <span
                  key={charIndex}
                  className={`split-char inline-block split-char--${wordIndex}-${charIndex}`}
                >
                  {char}
                </span>
              );
            })}
        {!onlyWords && wordIndex < words.length - 1 ? (
          <span className="split-char">{` `}</span>
        ) : (
          ""
        )}
      </span>
    );
  });
}

export default TextSplitter;
