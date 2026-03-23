export async function fetchArtworks() {
  const res = await fetch('/api/artworks');
  if (!res.ok) throw new Error('artworks fetch failed');
  return res.json();
}

export async function fetchShelf(key: string) {
  const res = await fetch(`/api/shelves?key=${encodeURIComponent(key)}`);
  if (!res.ok) throw new Error('shelf fetch failed');
  return res.json();
}
