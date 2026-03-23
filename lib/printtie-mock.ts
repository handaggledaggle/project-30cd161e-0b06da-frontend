export type Artwork = {
  id: string;
  title: string;
  artistName: string;
  priceLabel: string;
  imageSrc: string;
};

export type ShelfItem = {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
};

export const mockArtworkGrid: Artwork[] = [
  {
    id: "a1",
    title: "작가 F — 작품 1",
    artistName: "작가 F",
    priceLabel: "64,000원",
    imageSrc: "/placeholders/artwork-320x200.svg",
  },
  {
    id: "a2",
    title: "작가 G — 작품 2",
    artistName: "작가 G",
    priceLabel: "120,000원",
    imageSrc: "/placeholders/artwork-320x200.svg",
  },
  {
    id: "a3",
    title: "작가 H — 작품 3",
    artistName: "작가 H",
    priceLabel: "한정판",
    imageSrc: "/placeholders/artwork-320x200.svg",
  },
  {
    id: "a4",
    title: "작가 I — 작품 4",
    artistName: "작가 I",
    priceLabel: "45,000원",
    imageSrc: "/placeholders/artwork-320x200.svg",
  },
];

export const mockPopularShelf: ShelfItem[] = [
  {
    id: "p1",
    title: "작가 A — 작품명 1",
    subtitle: "25,000원",
    imageSrc: "/placeholders/artwork-196x120.svg",
  },
  {
    id: "p2",
    title: "작가 B — 작품명 2",
    subtitle: "120,000원",
    imageSrc: "/placeholders/artwork-196x120.svg",
  },
  {
    id: "p3",
    title: "작가 C — 작품명 3",
    subtitle: "한정판",
    imageSrc: "/placeholders/artwork-196x120.svg",
  },
];

export const mockNewShelf: ShelfItem[] = [
  {
    id: "n1",
    title: "작가 D — 신작 1",
    subtitle: "출시 2일 전",
    imageSrc: "/placeholders/artwork-196x120.svg",
  },
  {
    id: "n2",
    title: "작가 E — 신작 2",
    subtitle: "출시 1주일 전",
    imageSrc: "/placeholders/artwork-196x120.svg",
  },
];

export const mockCuratorShelf: ShelfItem[] = [
  {
    id: "c1",
    title: "큐레이터 추천 A",
    subtitle: "전시 연계",
    imageSrc: "/placeholders/artwork-196x120.svg",
  },
];
