"use client";
import useStore from "@/hooks/useStore";

interface Props {
  className?: string;
}
function VerticalFadeLayer({ className }: Props) {
  const { background } = useStore();

  return (
    <div
      style={{
        background: `linear-gradient(to top, ${background}, transparent)`,
      }}
      className={className}
    ></div>
  );
}

export default VerticalFadeLayer;
