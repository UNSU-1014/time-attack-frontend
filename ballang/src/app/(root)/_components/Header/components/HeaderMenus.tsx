import Link from "next/link";

function HeaderMenus() {
  return (
    <div className=" ml-auto flex items-center gap-x-4">
      <>
        <Link
          href="/sign-up"
          className="bg-white text-sm text-black px-5 py-2 rounded font-semibold hover:bg-black/5 transition border border-black"
        >
          회원가입하기
        </Link>
      </>
    </div>
  );
}

export default HeaderMenus;
