import Image from "next/image";
import Link from "next/link";
import logo1 from "../../public/assets/icons/logo.svg"
import logo2 from "../../public/assets/icons/logo-icon.svg"


const Header = ({children}:HeaderProps) => {
  return (
    <div className="header">
      <Link className="md:flex-1" href={'/'}><Image src={logo1} alt="Logo" width={120} height={32}  className="hidden md:block"/></Link>
      <Link className="md:flex-1" href={'/'}><Image src={logo2} alt="Logo" width={32} height={32}  className="md:hidden mr-2"/></Link>
      {children}
    </div>
  );
};

export default Header;