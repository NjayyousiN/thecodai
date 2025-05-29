import { ReactNode } from "react";
import { Link } from "react-scroll";

interface HeroButtonProps {
  children: ReactNode;
  scrollTo?: string;
  primary?: boolean;
}

interface NavButtonProps {
  children: ReactNode;
  scrollTo?: string;
  primary?: boolean;
}

export const NavButton: React.FC<NavButtonProps> = ({
  children,
  scrollTo,
  primary = false,
}) => {
  const className = primary
    ? "px-6 py-2 bg-foreground text-caption rounded-md hover:bg-opacity-90 transition-all ease-in-out duration-300 font-medium"
    : "px-4 py-2 rounded-md hover:bg-foreground hover:text-title transition-all ease-in-out duration-300 text-foreground font-medium";

  return scrollTo ? (
    <Link to={scrollTo} smooth={true} className={className}>
      {children}
    </Link>
  ) : (
    <button className={className}>{children}</button>
  );
};

export const HeroButton: React.FC<HeroButtonProps> = ({
  children,
  scrollTo,
  primary = false,
}) => {
  const className = primary
    ? "px-8 py-4 bg-foreground text-caption rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
    : "px-8 py-4 border-2 border-foreground text-foreground rounded-lg font-semibold text-lg hover:bg-foreground hover:text-caption transition-all duration-300 hover:scale-105";

  return scrollTo ? (
    <Link to={scrollTo} smooth={true} className={className}>
      {children}
    </Link>
  ) : (
    <button className={className}>{children}</button>
  );
};

export default NavButton;
