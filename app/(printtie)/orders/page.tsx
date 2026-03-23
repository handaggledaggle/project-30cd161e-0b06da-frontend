import Image from "next/image";
import Link from "next/link";
import { Container1440 } from "@/components/printtie/container-1440";

export default function OrdersPage() {
  return (
    <Container1440>
      <div className="flex w-full flex-col">
        <header className="w-full border-b border-pt-border bg-white px-[32px] py-[24px] backdrop-blur-sm">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-[20px] text-pt-text">printtie</h1>
              <p className="text-[12px] text-pt-text2/90">
                작가와 팬을 잇는, 작품 발견에서 배송까지
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <button className="h-[40px] border border-pt-border bg-white px-[16px] text-pt-primary/90 shadow-pt-sm">
                계정
              </button>
              <button className="h-[40px] border border-pt-border bg-white px-[16px] text-pt-primary/90 shadow-pt-sm">
                고객센터
              </button>
            </div>
          </div>
        </header>

        <main className="flex w-full flex-row gap-[24px] bg-cyan-50 px-[32px] py-[32px]">
          {/* Orders list */}
          <section className="flex w-[520px] flex-col gap-[16px] border border-pt-border bg-white p-[16px] shadow-pt-sm">
            <header className="flex flex-col">
              <h2 className="mb-[16px] text-[18px] text-pt-text">주문 목록</h2>
              <div className="mb-[12px] flex gap-[12px]">
                {["전체", "배송중", "배송완료", "반품/교환"].map((t) => (
                  <button
                    key={t}
                    className="h-[40px] border border-pt-border bg-white px-[12px] text-pt-primary/90 hover:bg-cyan-50"
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-[8px]">
                <input
                  className="h-[40px] w-full border border-pt-border bg-white px-[10px] text-pt-primary/90 outline-none"
                  placeholder="주문번호 또는 작품명 검색"
                />
                <select className="h-[40px] border border-pt-border bg-white px-[10px] text-pt-primary/90 outline-none">
                  <option>전체 기간</option>
                  <option>지난 30일</option>
                  <option>지난 90일</option>
                </select>
              </div>
            </header>

            <div className="flex flex-col gap-[12px] overflow-y-auto" style={{ maxHeight: 560 }}>
              {[
                {
                  id: "20260317-0012",
                  status: "배송중",
                  date: "2026-03-15",
                  title: "꽃의 연대기",
                  option: "A4 · 무광액자",
                  price: "₩45,000",
                },
                {
                  id: "20260310-0098",
                  status: "배송완료",
                  date: "2026-03-10",
                  title: "도시의 오후",
                  option: "A3 · 유광",
                  price: "₩68,000",
                },
              ].map((o, idx) => (
                <article
                  key={o.id}
                  className="flex flex-col gap-[8px] border border-pt-border bg-white p-[12px] shadow-pt-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <p className="text-[14px] text-pt-text2/90">
                        주문번호 <span className="text-cyan-400">#{o.id}</span>
                      </p>
                      <p className="text-[12px] text-cyan-400">
                        주문일 {o.date} · 결제완료
                      </p>
                    </div>
                    <div className="text-[14px] text-pt-text2/90">{o.status}</div>
                  </div>

                  <div className="flex items-center gap-[8px]">
                    <Image
                      src="/placeholders/artwork-56.svg"
                      width={56}
                      height={56}
                      alt="작품 썸네일"
                      className="h-[56px] w-[56px] bg-cyan-50"
                    />
                    <div className="flex flex-col">
                      <p className="text-[14px] text-pt-text">작품명: {o.title}</p>
                      <p className="text-[12px] text-pt-text2/90">옵션: {o.option}</p>
                    </div>
                    <div className="ml-auto text-[14px] text-pt-text2/90">{o.price}</div>
                  </div>

                  <div className="flex gap-[8px]">
                    <Link
                      className="h-[40px] border border-pt-border bg-white px-[12px] py-[10px] text-[14px] text-pt-primary/90"
                      href={idx === 0 ? "/orders/20260317-0012" : "/orders/20260310-0098"}
                    >
                      상세보기
                    </Link>
                    <button className="h-[40px] border border-pt-border bg-white px-[12px] text-pt-primary/90">
                      {idx === 0 ? "배송조회" : "반품요청"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Right: detail preview (static) */}
          <section className="flex flex-1 flex-col gap-[24px]">
            <div className="border border-pt-border bg-white p-[20px] shadow-pt-sm">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <p className="text-[14px] text-pt-text2/90">주문번호</p>
                  <h2 className="mb-[12px] text-[18px] text-pt-text">#20260317-0012</h2>
                  <p className="text-[12px] text-cyan-400">주문일 2026-03-15 · 결제수단: 신용카드</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-[14px] text-pt-text2/90">주문 상태</p>
                  <p className="text-[16px] text-pt-text">배송중</p>
                </div>
              </div>
            </div>

            <div className="border border-pt-border bg-white p-[20px] shadow-pt-sm">
              <h3 className="mb-[16px] text-[16px] text-pt-text">주문 항목</h3>
              <article className="flex items-start gap-[12px] border border-pt-border p-[12px]">
                <Image
                  src="/placeholders/artwork-96.svg"
                  width={96}
                  height={96}
                  alt="작품 썸네일"
                  className="h-[96px] w-[96px] bg-cyan-50"
                />
                <div className="flex flex-col">
                  <p className="text-[14px] text-pt-text">꽃의 연대기</p>
                  <p className="text-[12px] text-pt-text2/90">옵션: A4 · 무광액자</p>
                  <p className="text-[12px] text-pt-text2/90">작가: 이민호</p>
                  <p className="text-[12px] text-cyan-400">수량 1</p>
                </div>
                <div className="ml-auto flex flex-col items-end">
                  <p className="text-[14px] text-pt-text2/90">₩45,000</p>
                  <p className="text-[12px] text-cyan-400">배송비: ₩3,000</p>
                </div>
              </article>

              <div className="mt-[12px] flex flex-col gap-[8px] border-t border-pt-border pt-[12px]">
                {[
                  ["상품합계", "₩45,000"],
                  ["배송비", "₩3,000"],
                  ["할인", "₩0"],
                  ["결제금액", "₩48,000"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span className="text-pt-text2/90">{k}</span>
                    <span className="text-pt-text">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-pt-border bg-white p-[20px] shadow-pt-sm">
              <h3 className="mb-[12px] text-[16px] text-pt-text">배송 정보</h3>
              <div className="mb-[12px] flex items-center gap-[16px]">
                <div className="flex flex-col">
                  <p className="text-[14px] text-pt-text2/90">택배사</p>
                  <p className="text-[14px] text-pt-text">한빛택배</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[14px] text-pt-text2/90">운송장 번호</p>
                  <p className="text-[14px] text-pt-text">HB123456789KR</p>
                </div>
                <div className="ml-auto">
                  <button className="h-[40px] border border-pt-border bg-white px-[12px] text-pt-primary/90">
                    택배사 사이트에서 보기
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-[12px]">
                {[
                  { dot: "bg-green-600", t: "2026-03-16 10:12 · 집하완료", s: "서울 강남구 → 출발지" },
                  { dot: "bg-pt-primary", t: "2026-03-17 08:45 · 배송중", s: "배송기사 배차 완료" },
                  { dot: "bg-cyan-200", t: "예정 · 배송완료", s: "도착 후 배송완료로 업데이트" },
                ].map((e, idx) => (
                  <div key={idx} className="flex items-start gap-[12px]">
                    <div className={"mt-[6px] h-[8px] w-[8px] rounded-full " + e.dot} />
                    <div className="flex flex-col">
                      <p className="text-[13px] text-pt-text2/90">{e.t}</p>
                      <p className="text-[12px] text-cyan-400">{e.s}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-pt-border bg-white p-[20px] shadow-pt-sm">
              <h3 className="mb-[12px] text-[16px] text-pt-text">요청하기</h3>
              <div className="mb-[12px] flex gap-[12px]">
                <button className="h-[44px] rounded-lg bg-pt-primary px-[16px] text-white shadow-pt-md">
                  반품/교환 요청
                </button>
                <button className="h-[44px] border border-pt-border bg-white px-[16px] text-pt-primary/90">
                  판매자에 문의
                </button>
                <button className="h-[44px] border border-pt-border bg-white px-[16px] text-pt-primary/90">
                  영수증 다운로드
                </button>
              </div>

              <div className="flex flex-col gap-[8px]">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-[14px] text-pt-text2/90">배송지 변경</p>
                    <p className="text-[12px] text-cyan-400">상품 출고 전만 변경 가능합니다</p>
                  </div>
                  <button className="h-[40px] border border-pt-border bg-white px-[12px] text-pt-primary/90">
                    배송지 변경
                  </button>
                </div>

                <div className="flex flex-col">
                  <label className="mb-[8px] text-[13px] text-pt-text2/90">반품/교환 사유</label>
                  <textarea
                    className="h-[80px] w-full border border-pt-border bg-white p-[8px] text-pt-primary/90 outline-none"
                    placeholder="상세 사유를 적어주세요"
                  />
                  <div className="mt-[8px] flex gap-[8px]">
                    <button className="h-[44px] rounded-lg bg-pt-primary px-[16px] text-white shadow-pt-md">
                      요청 제출
                    </button>
                    <button className="h-[44px] border border-pt-border bg-white px-[16px] text-pt-primary/90">
                      임시저장
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Container1440>
  );
}
