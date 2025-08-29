import { FaLinkedin } from "react-icons/fa";

type Props = {
  className?: string;
  logoComponent?: string;
};

export default function Logo({ className, logoComponent }: Props) {
  return (
    <a href="/" className={`${className} flex  items-center text-2xl font-bold`}>
      <p className="max-[640px]:hidden">Linked</p>
      <FaLinkedin className={`text-3xl ${logoComponent}`} />
    </a>
  );
}
