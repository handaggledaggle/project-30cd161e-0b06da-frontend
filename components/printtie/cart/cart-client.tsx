"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type CartItem = {
  id: string;
  title: string;
  artist: string;
  type: string;
  price: number;
  qty: number;
  options: string[];
  imageSrc: string;
};

function formatKRW(n: number) {
  return new Intl.NumberFormat("ko-KR").format(n);
}

export function CartClient() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "c1",
      title: "작품 제목",
      artist: "작가명",
      type: "한정판 리프린트",
      price: 120000,
      qty: 1,
      options: ["사이즈: M", "액자: 없음"],
      imageSrc: "/placeholders/artwork-96.svg",
    },
    {
      id: "c2",
      title: "포스터 컬렉션",
      artist: "작가B",
      type: "리프린트",
      price: 45000,
      qty: 2,
      options: ["사이즈: A2", "액자: 블랙"],
      imageSrc: "/placeholders/artwork-96.svg",
    },
    {
      id: "c3",
      title: "원화 소품",
      artist: "작가C",
      type: "원작",
      price: 420000,
      qty: 1,
      options: ["사이즈: 원본", "배송: 특송"],
      imageSrc: "/placeholders/artwork-96.svg",
    },
  ]);

  const [editing, setEditing] = useState<CartItem | null>(null);

  const subtotal = useMemo(
    () => items.reduce((acc, it) => acc + it.price * it.qty, 0),
    [items]
  );
  const shipping = 12000;
  const tax = 58700;
  const total = subtotal + shipping + tax;

  function decQty(id: string) {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it
      )
    );
  }
  function incQty(id: string) {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it)));
  }
  function remove(id: string) {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }

  return (
    <div className="flex w-full flex-col font-atkinson">
      <header className="w-full bg-white px-[32px] py-[24px] shadow-pt-sm">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[20px] text-pt-text">printtie</h1>
            <p className="text-[12px] text-pt-text2/90">
              작가와 팬을 잇는, 작품 발견에서 배송까지
            </p>
          </div>
          <div className="flex items-center gap-[12px]">
            <Button
              variant="outline"
              className="h-[44px] rounded-none border-pt-border bg-white px-[16px] text-pt-primary/90 shadow-pt-sm"
              asChild
            >
              <Link href="/feed">계속 쇼핑</Link>
            </Button>
            <Button
              variant="outline"
              className="h-[44px] rounded-none border-pt-border bg-white px-[16px] text-pt-primary/90 shadow-pt-sm"
            >
              내 계정
            </Button>
          </div>
        </div>
      </header>

      <main className="flex w-full flex-row gap-[32px] bg-cyan-50/60 px-[32px] py-[32px]">
        {/* Left: items */}
        <section className="flex w-[880px] flex-col rounded-md border border-pt-border bg-white p-[20px] shadow-pt-sm">
          <header className="mb-[20px]">
            <h2 className="mb-[12px] text-[18px] text-pt-text">
              장바구니 ({items.length})
            </h2>
            <p className="text-[14px] text-pt-text2/90">
              옵션을 확인하고 필요한 경우 수정하세요. 작가별 묶음 배송이 적용됩니다.
            </p>
          </header>

          <div className="flex w-full flex-col gap-[12px]">
            {items.map((it, idx) => (
              <article
                key={it.id}
                className={
                  "flex w-full flex-row items-start gap-[12px] " +
                  (idx !== items.length - 1
                    ? "border-b border-pt-border pb-[12px]"
                    : "")
                }
              >
                <Image
                  src={it.imageSrc}
                  alt="작품 썸네일"
                  width={96}
                  height={96}
                  className="h-[96px] w-[96px] rounded-sm bg-cyan-50"
                />

                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[16px] text-pt-text">
                        {it.title} — {it.artist}
                      </h3>
                      <p className="mt-[6px] text-[13px] text-pt-text2/90">
                        {it.type}
                      </p>
                    </div>
                    <div className="text-[16px] text-pt-text">
                      ₩{formatKRW(it.price)}
                    </div>
                  </div>

                  <div className="mt-[10px] flex flex-row items-center gap-[12px]">
                    <div className="flex items-center gap-[8px]">
                      <span className="text-[13px] text-pt-primary/70">옵션:</span>
                      {it.options.map((o) => (
                        <span
                          key={o}
                          className="border border-pt-border bg-white/70 px-[8px] py-[4px] text-[13px] text-pt-text2/90"
                        >
                          {o}
                        </span>
                      ))}
                    </div>

                    <div className="ml-auto flex items-center gap-[8px]">
                      <Button
                        variant="outline"
                        className="h-[32px] rounded-md border-pt-border bg-white/70 px-[8px] text-pt-primary/90"
                        onClick={() => decQty(it.id)}
                      >
                        -
                      </Button>
                      <Input
                        value={String(it.qty)}
                        readOnly
                        className="h-[32px] w-[48px] rounded-md border-pt-border bg-white text-center text-pt-primary/90"
                      />
                      <Button
                        variant="outline"
                        className="h-[32px] rounded-md border-pt-border bg-white/70 px-[8px] text-pt-primary/90"
                        onClick={() => incQty(it.id)}
                      >
                        +
                      </Button>
                      <Button
                        variant="outline"
                        className="h-[32px] rounded-md border-pt-border bg-white/70 px-[12px] text-pt-primary/90"
                        onClick={() => setEditing(it)}
                      >
                        옵션수정
                      </Button>
                      <Button
                        variant="outline"
                        className="h-[32px] rounded-md border-pt-border bg-white/70 px-[12px] text-red-600"
                        onClick={() => remove(it.id)}
                      >
                        삭제
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="mt-[20px] flex w-full items-center justify-between">
            <div className="text-[13px] text-pt-text2/90">
              <p>
                총 작가 수: <span className="text-pt-text">3</span>
              </p>
              <p className="mt-[6px]">배송 그룹별 합산이 적용됩니다.</p>
            </div>
            <div className="flex items-center gap-[12px]">
              <Button
                variant="outline"
                className="h-[44px] rounded-none border-pt-border bg-white/80 px-[16px] text-pt-primary/90"
              >
                장바구니 저장
              </Button>
              <Button
                variant="outline"
                className="h-[44px] rounded-none border-pt-border bg-white/80 px-[16px] text-pt-primary/90"
              >
                선택 품목 저장
              </Button>
            </div>
          </aside>
        </section>

        {/* Right: summary */}
        <aside className="flex w-[400px] flex-col gap-[20px]">
          <section className="w-full rounded-md border border-pt-border bg-white p-[20px] shadow-pt-sm">
            <h3 className="mb-[12px] text-[16px] text-pt-text">주문 요약</h3>
            <div className="flex w-full flex-col gap-[8px]">
              <div className="flex justify-between text-pt-text2/90">
                <span>상품 합계</span>
                <span className="text-pt-text">₩{formatKRW(subtotal)}</span>
              </div>
              <div className="flex justify-between text-pt-text2/90">
                <span>배송비</span>
                <span>₩{formatKRW(shipping)}</span>
              </div>
              <div className="flex justify-between text-pt-text2/90">
                <span>세금</span>
                <span>₩{formatKRW(tax)}</span>
              </div>
              <div className="mt-[12px] flex items-center justify-between border-t border-pt-border pt-[12px]">
                <span className="text-[16px] text-pt-text">총액</span>
                <span className="text-[18px] text-pt-text">₩{formatKRW(total)}</span>
              </div>
            </div>

            <div className="mt-[16px] text-[13px] text-pt-text2/90">
              <p className="mb-[8px]">
                할인 코드 적용 또는 배송 옵션 변경은 결제 단계에서 확인할 수 있습니다.
              </p>
              <Button
                className="h-[44px] w-full rounded-md bg-pt-primary text-white shadow-pt-md hover:bg-pt-primary/90"
                asChild
              >
                <Link href="/checkout">결제 진행하기</Link>
              </Button>
            </div>
          </section>

          <section className="w-full rounded-md border border-pt-border bg-white p-[20px] shadow-pt-sm">
            <h4 className="mb-[12px] text-[15px] text-pt-text">다음 단계</h4>
            <div className="flex w-full flex-col gap-[12px]">
              <Button
                className="h-[44px] w-full rounded-md bg-green-600 text-white shadow-pt-md hover:bg-green-600/90"
                asChild
              >
                <Link href="/checkout">체크아웃(결제로 이동)</Link>
              </Button>
              <div className="flex gap-[12px]">
                <Button
                  variant="outline"
                  className="h-[44px] flex-1 rounded-md border-pt-border bg-white text-pt-primary/90"
                  asChild
                >
                  <Link href="/feed">계속 쇼핑</Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-[44px] flex-1 rounded-md border-pt-border bg-white text-pt-primary/90"
                >
                  장바구니 저장
                </Button>
              </div>
            </div>
          </section>

          <section className="w-full rounded-md border border-pt-border bg-white p-[20px] shadow-pt-sm">
            <h4 className="mb-[12px] text-[15px] text-pt-text">
              이런 작품도 관심 있어할 수 있어요
            </h4>
            <ul className="flex w-full flex-col gap-[12px]">
              {["한정판 드로잉 — 작가D", "프린트 시리즈 — 작가E"].map((t) => (
                <li key={t} className="flex items-center gap-[12px]">
                  <Image
                    src="/placeholders/artwork-56.svg"
                    alt="추천작"
                    width={56}
                    height={56}
                    className="h-[56px] w-[56px] rounded-sm bg-cyan-50"
                  />
                  <div className="flex-1">
                    <p className="text-[13px] text-pt-text">{t}</p>
                    <p className="text-[12px] text-pt-text2/90">
                      사이즈: A2 · ₩34,000
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="h-[32px] rounded-md border-pt-border bg-white/80 px-[8px] text-pt-primary/90"
                  >
                    추가
                  </Button>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </main>

      {/* Option editor dialog */}
      <Dialog open={!!editing} onOpenChange={(o) => !o && setEditing(null)}>
        <DialogContent className="max-w-[520px] border border-pt-border bg-white p-[20px]">
          <DialogHeader>
            <DialogTitle className="text-[16px] text-pt-text">옵션 수정</DialogTitle>
            <DialogDescription className="text-[13px] text-pt-text2/90">
              사이즈, 액자, 원작/리프린트 여부를 선택하세요. (mock UI)
            </DialogDescription>
          </DialogHeader>

          <div className="mt-[12px] flex flex-col gap-[12px]">
            <div className="flex flex-col gap-[8px]">
              <Label className="text-[13px] text-pt-text2/90">사이즈</Label>
              <select className="h-[40px] rounded-md border border-pt-border bg-white px-[10px] text-pt-text outline-none">
                <option>선택하세요</option>
                <option>A3</option>
                <option>A2</option>
                <option>M</option>
                <option>원본</option>
              </select>
            </div>

            <div className="flex flex-col gap-[8px]">
              <Label className="text-[13px] text-pt-text2/90">액자</Label>
              <select className="h-[40px] rounded-md border border-pt-border bg-white px-[10px] text-pt-text outline-none">
                <option>없음</option>
                <option>심플 화이트</option>
                <option>심플 블랙</option>
                <option>우드</option>
              </select>
            </div>

            <div className="flex flex-col gap-[8px]">
              <Label className="text-[13px] text-pt-text2/90">원작 / 리프린트</Label>
              <select className="h-[40px] rounded-md border border-pt-border bg-white px-[10px] text-pt-text outline-none">
                <option>리프린트</option>
                <option>원작</option>
              </select>
            </div>

            <div className="mt-[8px] flex gap-[12px]">
              <Button
                variant="outline"
                className="h-[44px] flex-1 rounded-md border-pt-border bg-white text-pt-primary/90"
                onClick={() => setEditing(null)}
              >
                취소
              </Button>
              <Button
                variant="outline"
                className="h-[44px] flex-1 rounded-md border-pt-border bg-white text-pt-text shadow-pt-sm"
                onClick={() => setEditing(null)}
              >
                변경 적용
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Empty state (structural) */}
      <section className="w-full border-t border-pt-border bg-white px-[32px] py-[32px]">
        <div className="flex w-full items-start gap-[24px]">
          <div className="flex w-[280px] flex-col">
            <h3 className="text-[18px] text-pt-text">장바구니가 비어 있습니다</h3>
            <p className="mt-[8px] text-[13px] text-pt-text2/90">
              좋아하는 작가의 작품을 발견하고 장바구니에 담아보세요. 옵션 비교 후 결제까지
              자연스럽게 이어집니다.
            </p>
            <div className="mt-[16px] flex gap-[12px]">
              <Button
                variant="outline"
                className="h-[44px] rounded-md border-pt-border bg-white text-pt-primary/90"
                asChild
              >
                <Link href="/feed">추천 작품 보기</Link>
              </Button>
              <Button
                variant="outline"
                className="h-[44px] rounded-md border-pt-border bg-white text-pt-primary/90"
              >
                구매 가이드
              </Button>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-[12px]">
            <h4 className="text-[15px] text-pt-text">추천 작품</h4>
            <ul className="flex flex-row gap-[12px]">
              {[1, 2, 3].map((i) => (
                <li
                  key={i}
                  className="h-[160px] w-[160px] rounded-sm bg-cyan-50"
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
