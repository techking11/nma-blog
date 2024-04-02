import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../logo/logo.component";
import { Dialog } from "@headlessui/react";
import { useContext } from "react";
import { MobileContext } from "../context/mobile.context";
import NavigationItems from "../navigation-items/navigation-items.component";
import { Link } from "react-router-dom";

const Mobile = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useContext(MobileContext);
  return (
    <>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavigationItems />
              </div>
              <div className="py-6">
                <Link
                  to="/signin"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}

export default Mobile;