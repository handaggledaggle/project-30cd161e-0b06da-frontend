import Link from "next/link";
import { Container1440 } from "@/components/printtie/container-1440";

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;

  return (
    <Container1440>
      <div className="w-full bg-white px-[32px] py-[24px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[20px] text-pt-text">주문 상세</h1>
            <p className="text-[14px] text-pt-text2/90">주문번호 #{orderId}</p>
          </div>
          <div className="flex gap-[12px]">
            <Link
              href="/orders"
              className="h-[40px] border border-pt-border bg-white px-[16px] py-[10px] text-[14px] text-pt-primary/90 shadow-pt-sm"
            >
              목록으로
            </Link>
            <Link
              href={`/orders/${orderId}/complete`}
              className="h-[40px] border border-pt-border bg-white px-[16px] py-[10px] text-[14px] text-pt-primary/90 shadow-pt-sm"
            >
              완료 화면(샘플)
            </Link>
          </div>
        </div>
      </div>

      {/* OrdersPage의 우측 디테일 UI를 상세 라우트에서도 그대로 사용하도록, MVP에서는 /orders에서 확인 권장 */}
      <div className="w-full bg-cyan-50 px-[32px] py-[32px]">
        <div className="border border-pt-border bg-white p-[20px] shadow-pt-sm">
          <p className="text-pt-text2/90">
            이 화면은 UI-only 단계의 상세 라우트 placeholder입니다. 좌측 목록 + 우측
            디테일이 필요한 경우 <Link className="text-pt-primary underline" href="/orders">/orders</Link>
            에서 확인하세요.
          </p>
        </div>
      </div>
    </Container1440>
  );
}
