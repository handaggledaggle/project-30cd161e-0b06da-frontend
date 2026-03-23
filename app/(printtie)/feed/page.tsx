import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Container1440 } from "@/components/printtie/container-1440";
import {
  mockArtworkGrid,
  mockCuratorShelf,
  mockNewShelf,
  mockPopularShelf,
} from "@/lib/printtie-mock";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-8">
      <h2 className="px-6 text-[18px] font-semibold text-pt-text">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Shelf({
  items,
}: {
  items: Array<{ id: string; title: string; subtitle: string; imageSrc: string }>;
}) {
  return (
    <div className="flex gap-4 overflow-x-auto px-6 pb-2">
      {items.map((it) => (
        <Link
          key={it.id}
          href="/feed"
          className="w-[196px] shrink-0"
        >
          <Card className="rounded-none border-pt-border bg-white shadow-pt-sm">
            <CardContent className="p-3">
              <div className="relative h-[120px] w-[196px] overflow-hidden">
                <Image
                  src={it.imageSrc}
                  alt={it.title}
                  fill
                  className="object-cover"
                  sizes="196px"
                />
              </div>
              <div className="mt-3">
                <div className="text-[13px] font-medium text-pt-text">{it.title}</div>
                <div className="mt-1 text-[12px] text-pt-text2/70">{it.subtitle}</div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default function FeedPage() {
  return (
    <Container1440>
      <div className="w-full bg-pt-bg">
        <div className="px-6 pt-10">
          <div className="relative h-[300px] w-full overflow-hidden border border-pt-border bg-white shadow-pt-sm">
            <Image
              src="/placeholders/featured-520x300.svg"
              alt="featured"
              fill
              className="object-cover"
              sizes="(max-width: 1440px) 100vw, 1440px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />
            <div className="absolute left-8 top-1/2 -translate-y-1/2">
              <h1 className="text-[28px] font-semibold text-pt-text">오늘의 추천 작품</h1>
              <p className="mt-2 text-[14px] text-pt-text2/80">
                UI-only 피드 샘플입니다. 작품/셸프 데이터는 mock 기반으로 렌더링돼요.
              </p>
              <Link
                href="/artists/kim-sujin"
                className="mt-4 inline-flex h-[44px] items-center border border-pt-border bg-white px-[16px] text-[14px] text-pt-primary/90 shadow-pt-sm"
              >
                아티스트 보러가기
              </Link>
            </div>
          </div>
        </div>

        <Section title="Popular">
          <Shelf items={mockPopularShelf} />
        </Section>

        <Section title="New">
          <Shelf items={mockNewShelf} />
        </Section>

        <Section title="Curator Pick">
          <Shelf items={mockCuratorShelf} />
        </Section>

        <Section title="Artwork Grid">
          <div className="grid grid-cols-4 gap-4 px-6 pb-10">
            {mockArtworkGrid.map((art) => (
              <Link key={art.id} href="/feed">
                <Card className="rounded-none border-pt-border bg-white shadow-pt-sm">
                  <CardContent className="p-3">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src={art.imageSrc}
                        alt={art.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1440px) 25vw, 360px"
                      />
                    </div>
                    <div className="mt-3">
                      <div className="text-[13px] font-medium text-pt-text">{art.title}</div>
                      <div className="mt-1 text-[12px] text-pt-text2/70">
                        {art.artistName} · {art.priceLabel}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </Container1440>
  );
}
