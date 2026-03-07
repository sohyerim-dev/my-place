import Input from "@/components/ui/Input";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center h-svh">
      <h1 className="sr-only">로그인</h1>
      <Image
        src="/images/text-logo.svg"
        alt="마이 플레이스 로고"
        width={98.15}
        height={125.96}
      />
      <p className="text-[16px] mt-6.25 mb-10">사진으로 발견하는 나만의 장소</p>
      <form className="flex flex-col gap-2.5">
        <Input
          label={{ name: "email", labelClass: "sr-only", text: "이메일" }}
          required
          type="email"
          placeholder="이메일"
          className="text-[20px] rounded-xl border px-5 py-2.5 w-75"
        />
        <Input
          label={{ name: "password", labelClass: "sr-only", text: "비밀번호" }}
          required
          type="password"
          placeholder="비밀번호"
          className="text-[20px] rounded-xl border px-5 py-2.5 w-75"
        />
        <div className="flex justify-between">
          <label htmlFor="auto-login">
            <input id="auto-login" type="checkbox" className="mr-1.25" />
            자동 로그인
          </label>
          <Link href="/signup">회원가입</Link>
        </div>
        <button
          type="submit"
          className="mt-10 rounded-xl bg-[#161616] text-[20px] text-[#fafafa] px-5 py-2.5"
        >
          로그인
        </button>
      </form>
    </main>
  );
}
