import { FaLinkedin } from "react-icons/fa";

type Props = {
  className?: string;
  logoComponent?: string;
  textstyles? : string;
};

export default function Logo({ className, logoComponent , textstyles }: Props) {
  return (
    <a href="/" className={`${className} flex  items-center text-2xl font-bold`}>
      <p className={`max-[640px]:hidden ${textstyles}`}>Linked</p>
      <FaLinkedin className={`text-3xl ${logoComponent}`} />
    </a>
  );
}
