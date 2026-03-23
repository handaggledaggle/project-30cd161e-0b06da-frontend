"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // UI-only 단계: API 호출 없음
    setTimeout(() => {
      setLoading(false);
      router.push("/feed");
    }, 450);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-pt-bg px-6">
      <div className="w-full max-w-[400px] rounded-lg border border-pt-border bg-white p-8 shadow-pt-sm">
        <h1 className="mb-6 text-center text-2xl font-semibold text-pt-text">회원가입</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="name" className="text-pt-text2/90">이름</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력하세요"
              className="border-pt-border"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-pt-text2/90">이메일</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
              required
              className="border-pt-border"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-pt-text2/90">비밀번호</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              required
              minLength={6}
              className="border-pt-border"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full bg-pt-primary hover:bg-pt-primary/90">
            {loading ? "가입 중..." : "회원가입"}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-pt-primary/70">
          이미 계정이 있으신가요?{" "}
          <Link href="/login" className="text-pt-primary hover:underline">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}
