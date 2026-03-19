"use client";

import Modal from "@/components/ui/Modal";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MyPage() {
  const supabase = createClient();
  const router = useRouter();
  const [logoutModal, setLogoutModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  async function handleDeleteAccount() {
    const { data: { session } } = await supabase.auth.getSession();
    await fetch("/api/delete-account", {
      method: "DELETE",
      headers: { Authorization: `Bearer ${session?.access_token}` },
    });
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <>
      <div className="px-5 pt-8">
        <h1 className="text-[20px] font-bold mb-8">마이페이지</h1>
        <div className="flex flex-col">
          <button
            onClick={() => router.push("/mypage/change-password")}
            className="flex justify-between items-center py-4 border-b border-gray-100 text-[15px]"
          >
            비밀번호 변경
            <Image src="/icons/more.svg" alt="" width={14} height={14} />
          </button>
          <button
            onClick={() => setLogoutModal(true)}
            className="flex justify-between items-center py-4 border-b border-gray-100 text-[15px]"
          >
            로그아웃
            <Image src="/icons/more.svg" alt="" width={14} height={14} />
          </button>
          <button
            onClick={() => setDeleteModal(true)}
            className="flex justify-between items-center py-4 text-[15px] text-red-500"
          >
            회원탈퇴
            <Image src="/icons/more.svg" alt="" width={14} height={14} />
          </button>
        </div>
      </div>
      {logoutModal && (
        <Modal title="로그아웃" onClose={() => setLogoutModal(false)}>
          <p>정말 로그아웃하시겠습니까?</p>
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setLogoutModal(false)}
              className="flex-1 py-3 rounded-lg bg-gray-100 font-semibold"
            >
              취소
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 py-3 rounded-lg bg-[#ee6300] text-white font-semibold"
            >
              로그아웃
            </button>
          </div>
        </Modal>
      )}
      {deleteModal && (
        <Modal title="회원탈퇴" onClose={() => setDeleteModal(false)}>
          <p>정말 탈퇴하시겠습니까? 모든 게시글이 삭제됩니다.</p>
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setDeleteModal(false)}
              className="flex-1 py-3 rounded-lg bg-gray-100 font-semibold"
            >
              취소
            </button>
            <button
              onClick={handleDeleteAccount}
              className="flex-1 py-3 rounded-lg bg-red-500 text-white font-semibold"
            >
              탈퇴
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
