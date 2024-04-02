import { Bars3Icon } from "@heroicons/react/24/outline";
import NavigationItems from "../navigation-items/navigation-items.component";
import Logo from "../logo/logo.component";
import { useContext } from "react";
import { MobileContext } from "../context/mobile.context";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  const { setMobileMenuOpen } = useContext(MobileContext);
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Logo />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <NavigationItems />
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/signin" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Navigation;