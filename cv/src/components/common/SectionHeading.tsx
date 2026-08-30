interface SectionHeadingProps {
  className?: string;
  kicker: string;
  title: string;
  titleClassName?: string;
}

export function SectionHeading({ className = "", kicker, title, titleClassName = "" }: SectionHeadingProps) {
  const headingClassName = className ? `section-heading reveal ${className}` : "section-heading reveal";
  const headingTitleClassName = titleClassName ? `section-title ${titleClassName}` : "section-title";

  return (
    <div data-reveal className={headingClassName}>
      <p className="section-kicker">{kicker}</p>
      <h2 className={headingTitleClassName}>{title}</h2>
    </div>
  );
}
