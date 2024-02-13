import HeaderNavItem from "./HeaderNavItem";

function HeaderNav() {
  return (
    <nav className="ml-20">
      <ul className="flex gap-x-4 text-black">
        <HeaderNavItem href="/brands" label="BRANDS" />
      </ul>
    </nav>
  );
}

export default HeaderNav;
