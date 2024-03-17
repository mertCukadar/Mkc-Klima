import { Logo } from "../Logo/Logo";
import "./style.css"
export function Header() {
  return (
    <div className="header_conatiner">
        <Logo heigth="70px"/>
        
        <div className="header_nav">
            <a href="#home">Biz Kimiz</a>
            <a href="#about">Hakkımızda</a>
            <a href="#services">Hizmetlerimiz</a>
            <a href="#contact">İletişim</a>
        </div> 

    </div>
  );
}