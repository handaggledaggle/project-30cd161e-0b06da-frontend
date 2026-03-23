import Link from "next/link";
import { Container1440 } from "@/components/printtie/container-1440";

export default async function OrderCompletePage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;

  return (
    <Container1440>
      <div className="w-full px-[32px] py-[40px]">
        <div className="border border-pt-border bg-white p-[24px] shadow-pt-sm">
          <h1 className="text-[20px] text-pt-text">주문이 완료되었습니다</h1>
          <p className="mt-[8px] text-[14px] text-pt-text2/90">
            주문번호 <span className="text-pt-text">#{orderId}</span>
          </p>

          <div className="mt-[20px] grid grid-cols-2 gap-[12px]">
            <div className="border border-pt-border bg-cyan-50 p-[12px]">
              <div className="text-[13px] text-pt-primary/70">결제 금액</div>
              <div className="text-[18px] text-pt-text">₩125,000</div>
            </div>
            <div className="border border-pt-border bg-cyan-50 p-[12px]">
              <div className="text-[13px] text-pt-primary/70">예상 배송</div>
              <div className="text-[18px] text-pt-text">3~5 영업일</div>
            </div>
            <div className="col-span-2 border border-pt-border bg-white p-[12px]">
              <div className="text-[13px] text-pt-primary/70">배송지</div>
              <div className="text-[14px] text-pt-text2/90">
                홍길동 · 010-1234-5678 · 서울특별시 강남구 테헤란로 12, 3층
              </div>
            </div>
          </div>

          <div className="mt-[20px] flex gap-[12px]">
            <Link
              href="/orders"
              className="h-[44px] border border-pt-border bg-white px-[16px] py-[12px] text-[14px] text-pt-primary/90 shadow-pt-sm"
            >
              주문 조회로 이동
            </Link>
            <Link
              href="/feed"
              className="h-[44px] border border-pt-border bg-white px-[16px] py-[12px] text-[14px] text-pt-primary/90 shadow-pt-sm"
            >
              계속 쇼핑
            </Link>
          </div>
        </div>
      </div>
    </Container1440>
  );
}
