import { Link } from "react-router-dom";

const navs = [
  { name: 'Home', href: '/' },
  { name: 'Blogs', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const NavigationItems = () => <> {
  navs.map((item, index) => (
    <Link key={index}
      to={item.href}
      className="text-sm font-semibold leading-6 text-gray-900 block py-2"
    > {item.name} </Link>
  ))
}
</>

export default NavigationItems;