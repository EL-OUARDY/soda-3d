import clsx from "clsx";

interface BoundedProps {
  className?: string;
  children: React.ReactNode;
}

function Bounded({ className, children, ...restProps }: BoundedProps) {
  return (
    <section
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </section>
  );
}

export default Bounded;
