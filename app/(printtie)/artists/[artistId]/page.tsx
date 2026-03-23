import Image from "next/image";
import { Container1440 } from "@/components/printtie/container-1440";
import { ArtistProfileClient } from "@/components/printtie/artist/artist-profile-client";

export default async function ArtistProfilePage({
  params,
}: {
  params: Promise<{ artistId: string }>;
}) {
  const { artistId } = await params;

  // mock only
  const artist = {
    id: artistId,
    name: "김수진",
    meta: "작가 · 판화·드로잉 · 서울 기반",
    tagline: "Tagline: 작가와 팬을 잇는, 작품 발견에서 배송까지",
    avatar: "/placeholders/artist-avatar-112.svg",
  };

  return (
    <Container1440>
      <main className="flex w-full flex-col">
        {/* Artist header */}
        <section className="w-full bg-white px-[32px] py-[40px]">
          <header className="flex w-full items-center justify-between">
            <div className="flex items-center gap-[20px]">
              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-[8px] border border-pt-border bg-cyan-50 shadow-pt-sm">
                <Image
                  src={artist.avatar}
                  alt="작가 아바타"
                  width={112}
                  height={112}
                  className="h-[112px] w-[112px] object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <h1 className="mb-[12px] text-[28px] text-pt-text">
                  {artist.name}
                </h1>
                <p className="mb-[8px] text-[14px] text-pt-text2/90">
                  {artist.meta}
                </p>
                <p className="text-[13px] text-pt-primary/70">
                  {artist.tagline}
                </p>
              </div>
            </div>

            <ArtistProfileClient />
          </header>
        </section>

        {/* Bio & socials */}
        <section className="w-full bg-cyan-50 px-[32px] py-[40px]">
          <div className="flex w-full flex-row gap-[24px]">
            <div className="flex w-[720px] flex-col">
              <h2 className="mb-[16px] text-[20px] text-pt-text">작가 소개</h2>
              <div className="w-full border border-pt-border bg-white p-[20px] shadow-pt-sm">
                <p className="mb-[12px] text-pt-text2/90">
                  김수진은 판화와 드로잉을 중심으로 작업하는 서울 기반 작가입니다.
                  전통적 판화기법과 디지털 프로세스를 결합해 한정판 에디션과
                  프린트를 제작합니다. 최근 개인전 '조용한 표면'을 열었으며
                  한정판 시리즈로 컬렉터들의 관심을 받고 있습니다.
                </p>
                <p className="text-pt-text2/90">
                  주요 활동: 개인전 2024 '조용한 표면' (서울), 그룹전 '선과 색'
                  (2023)
                </p>
              </div>

              <h3 className="mb-[12px] mt-[24px] text-[16px] text-pt-text">
                전시·아카이브
              </h3>
              <div className="w-full border border-pt-border bg-white p-[16px] shadow-pt-sm">
                <ul className="flex flex-col gap-[8px] text-pt-text2/90">
                  <li>2024 — 개인전 '조용한 표면' · 갤러리 산</li>
                  <li>2023 — 그룹전 '선과 색' · 아트스페이스</li>
                  <li>2021 — 레지던시 '판화의 시간' · 판화공방</li>
                </ul>
              </div>
            </div>

            <aside className="flex w-[360px] flex-col gap-[16px]">
              <div className="w-full border border-pt-border bg-white p-[16px] shadow-pt-sm">
                <h4 className="mb-[8px] text-pt-text">연락·SNS</h4>
                <div className="flex flex-col gap-[8px] text-pt-text2/90">
                  <a href="#">Instagram · @sujin_prints</a>
                  <a href="#">Twitter · @sujin_art</a>
                  <a href="#">Email · contact@sujinprints.com</a>
                </div>
              </div>

              <div className="w-full border border-pt-border bg-white p-[16px] shadow-pt-sm">
                <h4 className="mb-[8px] text-pt-text">구독 혜택</h4>
                <p className="mb-[8px] text-pt-text2/90">
                  구독 시 신작 알림, 한정판 우선 구매권, 배송 추적 업데이트를
                  제공합니다.
                </p>
                <div className="flex items-center gap-[12px]">
                  <button className="h-[40px] rounded-none border border-transparent bg-pt-primary px-[16px] text-white shadow-pt-md">
                    월 구독 시작
                  </button>
                  <button className="h-[40px] rounded-none border border-pt-border bg-white px-[16px] text-pt-primary/90 shadow-pt-sm">
                    혜택 보기
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Notices */}
        <section className="w-full bg-white px-[32px] py-[40px]">
          <h2 className="mb-[16px] text-pt-text">공지 & 신작 안내</h2>
          <div className="flex flex-col gap-[12px]">
            <article className="w-full border border-pt-border bg-cyan-50 p-[16px] shadow-pt-sm">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p className="text-pt-text">신작 에디션 발매</p>
                  <p className="text-pt-text2/90">
                    2026-03-10 · 한정 에디션 '물의 표면' 30부 발매 예정
                  </p>
                </div>
                <div className="text-pt-success">신규</div>
              </div>
            </article>

            <article className="w-full border border-pt-border bg-cyan-50 p-[16px] shadow-pt-sm">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p className="text-pt-text">전시 참여 안내</p>
                  <p className="text-pt-text2/90">
                    2026-02-05 · '지역 작가 그룹전' 참여, 전시 기간 예약 가능
                  </p>
                </div>
                <div className="text-cyan-400">지난 공지</div>
              </div>
            </article>
          </div>
        </section>

        {/* Portfolio */}
        <section className="w-full bg-cyan-50 px-[32px] py-[40px]">
          <div className="mb-[20px] flex w-full items-center justify-between">
            <h2 className="text-pt-text">포트폴리오</h2>
            <div className="flex items-center gap-[12px]">
              <button className="h-[40px] border border-pt-border bg-white px-[16px] text-pt-text shadow-pt-sm">
                판매중
              </button>
              <button className="h-[40px] border border-pt-border bg-white px-[16px] text-pt-primary/90 shadow-pt-sm">
                전체
              </button>
              <button className="h-[40px] border border-pt-border bg-white px-[16px] text-pt-primary/90 shadow-pt-sm">
                종료
              </button>
            </div>
          </div>

          <div className="w-full border border-pt-border bg-white p-[16px] shadow-pt-sm">
            <div className="mb-[12px] flex items-center justify-between">
              <div className="text-pt-text2/90">필터 · 정렬</div>
              <div className="text-[13px] text-pt-primary/70">총 48개 작품</div>
            </div>

            <div className="grid w-full grid-cols-3 gap-[16px]">
              {[1, 2, 3].map((i) => (
                <article
                  key={i}
                  className="border border-pt-border bg-white p-[12px] shadow-pt-sm"
                >
                  <Image
                    src="/placeholders/artwork-360x200.svg"
                    alt={`작품 ${i}`}
                    width={360}
                    height={200}
                    className="mb-[12px] h-[200px] w-full object-cover"
                  />
                  <h4 className="mb-[8px] text-pt-text">
                    {i === 1 ? "물의 표면 #1" : i === 2 ? "드로잉 시리즈 #3" : "판화 #7"}
                  </h4>
                  <p className="mb-[8px] text-pt-text2/90">
                    {i === 2
                      ? "오리지널 드로잉 · 21x29cm"
                      : "한정판 · 30부 · 30x40cm"}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-pt-text">
                      {i === 1 ? "₩180,000" : i === 2 ? "₩65,000" : "₩220,000"}
                    </span>
                    <button
                      className={
                        i === 2
                          ? "h-[36px] border border-pt-border bg-white px-[12px] text-pt-primary/90 shadow-pt-sm"
                          : "h-[36px] border border-transparent bg-pt-primary px-[12px] text-white shadow-pt-sm"
                      }
                    >
                      {i === 2 ? "상세보기" : "장바구니"}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-[20px] flex items-center justify-center">
              <button className="h-[40px] border border-pt-border bg-white px-[20px] text-pt-primary/90 shadow-pt-sm">
                더 보기
              </button>
            </div>
          </div>
        </section>

        {/* Trust & sharing */}
        <section className="w-full bg-white px-[32px] py-[40px]">
          <div className="flex w-full flex-row gap-[24px]">
            <aside className="flex w-[520px] flex-col gap-[12px]">
              <div className="w-full border border-pt-border bg-cyan-50 p-[16px] shadow-pt-sm">
                <Image
                  src="/placeholders/featured-520x300.svg"
                  alt="대표작 이미지"
                  width={520}
                  height={300}
                  className="mb-[12px] h-[300px] w-full object-cover"
                />
                <h3 className="mb-[8px] text-pt-text">대표작: 물의 표면 #1</h3>
                <p className="mb-[8px] text-pt-text2/90">
                  한정판 프린트 · 30부 · 작가 직접 서명 · 안전 포장 및 배송
                </p>
              </div>

              <div className="w-full border border-pt-border bg-white p-[12px] shadow-pt-sm">
                <h4 className="mb-[8px] text-pt-text">공유하기</h4>
                <div className="flex items-center gap-[12px]">
                  <button className="h-[40px] border border-pt-border bg-white px-[16px] text-pt-primary/90 shadow-pt-sm">
                    링크 복사
                  </button>
                  <button className="h-[40px] border border-pt-border bg-white px-[16px] text-pt-primary/90 shadow-pt-sm">
                    SNS 공유
                  </button>
                  <button className="h-[40px] border border-pt-border bg-white px-[16px] text-pt-primary/90 shadow-pt-sm">
                    추천하기
                  </button>
                </div>
              </div>
            </aside>

            <div className="flex flex-1 flex-col gap-[12px]">
              <div className="w-full border border-pt-border bg-white p-[16px] shadow-pt-sm">
                <h4 className="mb-[12px] text-pt-text">신뢰 정보</h4>
                <div className="flex flex-col gap-[8px] text-pt-text2/90">
                  <p>
                    평균 배송 리드타임: <span className="text-pt-text">5-8 영업일</span>
                  </p>
                  <p>
                    반품/교환 정책: <span className="text-pt-text">수령 후 7일 이내 접수</span>
                  </p>
                  <p>
                    구매자 후기: <span className="text-pt-text">4.8/5 (평균 만족도)</span>
                  </p>
                </div>
              </div>

              <div className="w-full border border-pt-border bg-cyan-50 p-[16px] shadow-pt-sm">
                <h4 className="mb-[12px] text-pt-text">대표 정보</h4>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="text-pt-text2/90">위치</span>
                    <span className="text-pt-text">서울</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-pt-text2/90">응답 속도</span>
                    <span className="text-pt-text">24시간 내</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-pt-text2/90">인증</span>
                    <span className="text-pt-text">신원 확인 완료</span>
                  </div>
                </div>
              </div>

              <div className="w-full border border-pt-border bg-white p-[16px] shadow-pt-sm">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="mb-[8px] text-[16px] text-pt-text">
                      작가 구독으로 더 많은 신작을 받아보세요
                    </p>
                    <p className="mb-[8px] text-pt-text2/90">
                      구독자는 우선 구매권, 전용 알림, 할인 혜택을 받습니다.
                    </p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <button className="h-[48px] border border-transparent bg-pt-primary px-[20px] text-white shadow-pt-md">
                      구독 시작
                    </button>
                    <button className="h-[48px] border border-pt-border bg-white px-[20px] text-pt-primary/90 shadow-pt-sm">
                      문의하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Container1440>
  );
}
