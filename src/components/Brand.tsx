interface Props {
  className?: string;
}

export default function Brand({ className = "" }: Props) {
  return (
    <span className={`font-serif tracking-[0.35em] text-[15px] md:text-base text-ink dark:text-white ${className}`}>
      Y . AMÍLCAR
    </span>
  );
}
