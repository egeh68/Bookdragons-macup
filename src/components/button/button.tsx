type ButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export default function Button({
  children,
  href,
  className = "",
}: ButtonProps) {
  return (
    <a href={href} className={`button ${className}`}>
      {children}
    </a>
  );
}
