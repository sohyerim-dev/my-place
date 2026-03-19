import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  // 요청 헤더에서 Authorization 토큰으로 유저 확인
  const authHeader = request.headers.get("Authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const adminClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const {
    data: { user },
  } = await adminClient.auth.getUser(authHeader.replace("Bearer ", ""));

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // 내 게시글의 관련 데이터 삭제
  const { data: posts } = await adminClient
    .from("posts")
    .select("id")
    .eq("user_id", user.id);

  if (posts && posts.length > 0) {
    const postIds = posts.map((p) => p.id);
    await adminClient.from("comments").delete().in("post_id", postIds);
    await adminClient.from("likes").delete().in("post_id", postIds);
    await adminClient.from("saves").delete().in("post_id", postIds);
    await adminClient.from("tags").delete().in("post_id", postIds);
    await adminClient.from("post_images").delete().in("post_id", postIds);
    await adminClient.from("posts").delete().eq("user_id", user.id);
  }

  // 다른 사람 글에 남긴 활동 삭제
  await adminClient.from("comments").delete().eq("user_id", user.id);
  await adminClient.from("likes").delete().eq("user_id", user.id);
  await adminClient.from("saves").delete().eq("user_id", user.id);
  await adminClient.from("place_saves").delete().eq("user_id", user.id);
  await adminClient.from("profiles").delete().eq("id", user.id);

  // auth 유저 삭제
  await adminClient.auth.admin.deleteUser(user.id);

  return NextResponse.json({ success: true });
}
