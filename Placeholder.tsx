import { Image } from "./Icons";

type Props = { src?: string; alt: string; className?: string; fit?: "cover" | "contain" };

// Shows the photo if a path is set, otherwise a gray placeholder.
export default function Placeholder({ src, alt, className = "", fit = "cover" }: Props) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`fill-img fit-${fit} ${className}`} />;
  }
  return (
    <div className={`img-placeholder ${className}`} role="img" aria-label={alt}>
      <Image />
      <span>{alt}</span>
    </div>
  );
}
