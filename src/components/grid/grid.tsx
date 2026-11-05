type GridProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Grid({ children, className = "" }: GridProps) {
  return <div className={`container grid ${className}`}>{children}</div>;
}
