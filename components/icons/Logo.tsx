import * as React from "react";


interface Props {
  
  alt: string;
  crossOrigin?: "anonymous" | "use-credentials";
  decoding?: "async" | "auto" | "sync";
  height: string | number;
  loading?: "lazy" | "eager";
  src: string;
  className:string;
}

const Logo: React.FC<Props> = ({className = '', ...props }) => (
   <div>
     <img src="logo.jpg" height="34px" width="35px" style={{verticalAlign: 'bottom'}} />
  </div>
)
export default Logo;