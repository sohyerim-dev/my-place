"use client";
import SignupInput from "@/components/ui/SignupInput";
import { useState } from "react";

export default function SignUp() {
  function handleSubmit() {
    const [email, setEmail] = useState("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-fit m-auto min-h-svh justify-center"
    >
      <h1 className="text-[25px] font-bold mb-5">회원가입</h1>
      <SignupInput
        type="email"
        label="이메일"
        autoComplete="new"
        placeholder="이메일을 입력해주세요."
      />
      <button
        type="button"
        className="mt-5 w-70 bg-[#EE6300] h-12 rounded-2xl text-white self-end focus:bg-white hover:cursor-pointer focus:outline-none focus:text-[#EE6300] focus:border-2 focus:border-[#EE6300] hover:bg-white hover:text-[#EE6300] hover:border hover:border-[#EE6300] "
      >
        이메일 중복확인
      </button>
      <SignupInput
        type="password"
        label="비밀번호"
        autoComplete="current-password"
        placeholder="비밀번호를 입력해주세요."
        className="mt-5"
      />
      <SignupInput
        type="re-password"
        label="비밀번호 확인"
        autoComplete="current-password"
        placeholder="비밀번호를 입력해주세요."
        className="mt-5"
      />
      <SignupInput
        type="nickname"
        label="닉네임"
        placeholder="닉네임을 입력해주세요. (영문 및 숫자)"
        className="mt-5"
      />
      <button
        type="submit"
        className="mt-5 w-70 bg-[#EE6300] h-12 rounded-2xl text-white self-end focus:outline-none hover:cursor-pointer hover:bg-white hover:text-[#EE6300] hover:border hover:border-[#EE6300]"
      >
        회원가입 완료
      </button>
    </form>
  );
}
