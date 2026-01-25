import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
// import Search from "../search";

export default function Header() {
  return (
    <header className="flex flex-col gap-3 px-4 py-3 bg-background md:flex-row md:items-center md:gap-4">

      {/* Row 1: Logo + search bar + icons */}
      <div className="flex items-center justify-between w-full mx-4">
        
        {/* Logo */}
        <div className="font-bold text-2xl text-text">
          HCF HV
        </div>

        {/* Search Bar */}
        {/* <div className="flex-1 mx-4">
          <Search placeholder="Search products..." />
        </div> */}

        {/* Icons */}
        <div className="flex gap-4 mx-4">
          <ShoppingCartIcon className="h-6 w-6 cursor-pointer text-text" />
          <UserIcon className="h-6 w-6 cursor-pointer text-text" />
        </div>
      </div>

    </header>
  );
}
