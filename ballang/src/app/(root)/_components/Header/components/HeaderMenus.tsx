import Link from "next/link";

function HeaderMenus() {
  return (
    <div className=" ml-auto flex items-center gap-x-4">
      <Link
        href="/sign-up"
        className="text-sm text-black px-5 py-2  font-semibold hover:bg-black/5 transition "
      >
        회원가입
      </Link>
      <Link
        href="/log-in"
        className="text-sm text-black px-5 py-2 font-semibold hover:bg-black/70 transition"
      >
        로그인하기
      </Link>
    </div>
  );
}

export default HeaderMenus;
