"use client";

import Modal from "@/components/ui/Modal";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ChangePassword() {
  const supabase = createClient();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("비밀번호는 6자 이상이어야 합니다.");
      return;
    }

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setError(error.message);
    } else {
      setShowModal(true);
    }
  }
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">비밀번호 변경</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="password"
          placeholder="새 비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-lg px-4 py-3 outline-none"
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border rounded-lg px-4 py-3 outline-none"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-[#ee6300] text-white rounded-lg py-3 font-semibold"
        >
          변경하기
        </button>
      </form>
      {showModal && (
        <Modal title="알림" onClose={() => router.push("/mypage")}>
          <p>비밀번호가 변경되었습니다</p>
          <button
            onClick={() => router.push("/mypage")}
            className="w-full mt-4 py-3 rounded-lg bg-[#ee6300] text-white font-semibold"
          >
            확인
          </button>
        </Modal>
      )}
    </div>
  );
}
