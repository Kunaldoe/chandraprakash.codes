import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  extra?: string;
}
const Heading3 = ({ children, extra }: Props) => {
  return (
    <h3
      className={`relative font-Roboto text-2xl font-bold italic tracking-wide before:text-base before:font-normal before:not-italic before:text-mainDark before:content-['<h2>'] after:text-base after:font-normal  after:not-italic after:text-mainDark after:content-['</h2>'] md:text-4xl md:before:text-lg md:after:text-lg ${
        extra && extra
      }`}
    >
      {children}
    </h3>
  );
};

export default Heading3;
