import logo from "../../../public/images/logo.jpeg";


export function Logo(props){
    return (
              <img src={logo} alt="MKC Klima" style = {{height: props.heigth}}/>
        
      );
}