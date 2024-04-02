import { Link } from "react-router-dom";

const Logo = () => <>
  <Link to="/" className="-m-1.5 p-1.5">
    <span className="sr-only">NMA BLOG</span>
    <img
      className="h-8 w-auto"
      src="https://cdn.icon-icons.com/icons2/838/PNG/512/circle-blogger_icon-icons.com_66825.png"
      alt=""
    />
  </Link>
</>

export default Logo;