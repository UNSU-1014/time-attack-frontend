"use client";

import API from "@/api/index.api";
import Page from "@/components/Page";
import { useAuth } from "@/contexts/auth.context";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useMutation } from "react-query";

function SignUpPage() {
  const { mutateAsync } = useMutation({ mutationFn: API.auth.signUp });
  const route = useRouter();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const pw1InputRef = useRef<HTMLInputElement>(null);
  const pw2InputRef = useRef<HTMLInputElement>(null);
  const { logIn } = useAuth();

  const handleClickSignUp = async () => {
    const emailValue = emailInputRef.current?.value;
    const pw1Value = pw1InputRef.current?.value;
    const pw2Value = pw2InputRef.current?.value;

    if (!emailValue || !pw1Value || !pw2Value)
      return alert("모든 값을 입력해주세요");

    if (pw1Value !== pw2Value)
      return alert("비밀번호와 비밀번호 확인이 일치하지 않아요.");

    const { accessToken } = await mutateAsync({
      email: emailValue,
      password: pw1Value,
    });
    logIn(accessToken);
    route.replace("/");
  };

  return (
    <Page>
      <h2 className=" font-bold text-3xl text-center my-12 text-black">
        회원가입
      </h2>
      <section className="flex flex-col  items-center gap-y-4 max-w-sm mx-auto w-full">
        <div className="grid gap-y-1.5 w-full">
          <label htmlFor="email" className=" text-sm font-medium text-gray-800">
            이메일
          </label>
          <input
            ref={emailInputRef}
            id="email"
            type="email"
            className=" block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
          <label
            htmlFor="password"
            className=" text-sm font-medium text-gray-800"
          >
            비밀번호
          </label>
          <input
            ref={pw1InputRef}
            id="password"
            type="password"
            className=" block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
          <label
            htmlFor="password_check"
            className=" text-sm font-medium text-gray-800"
          >
            비밀번호 확인
          </label>

          <input
            ref={pw2InputRef}
            id="password_check"
            type="password"
            className=" block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>
        <button
          onClick={handleClickSignUp}
          className="text-black border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white:"
        >
          회원가입하기
        </button>
      </section>
    </Page>
  );
}

export default SignUpPage;
