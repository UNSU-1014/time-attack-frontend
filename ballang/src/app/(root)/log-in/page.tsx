"use client";
import API from "@/api/index.api";
import { useAuth } from "@/contexts/auth.context";
import { useAppDispatch } from "@/redux/store";
import { useState } from "react";
import { useMutation } from "react-query";
import Modal from "../Modal/Modal";

function LogInPage() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync } = useMutation({ mutationFn: API.auth.logIn });
  const { logIn } = useAuth();

  const handleClickLogIn = async () => {
    const { accessToken } = await mutateAsync({ email, password });
  };
  return (
    <Modal title="로그인하기">
      <section className="flex flex-col  items-center gap-y-4 max-w-sm mx-auto w-full">
        <div className="grid gap-y-1.5 w-full">
          <label htmlFor="email" className=" text-sm font-medium text-gray-800">
            이메일
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
          <label
            htmlFor="password"
            className=" text-sm font-medium text-gray-800"
          >
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>
        <button className="text-black border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white:">
          로그인하기
        </button>
      </section>
    </Modal>
  );
}

export default LogInPage;
