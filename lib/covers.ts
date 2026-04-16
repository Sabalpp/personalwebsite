const DAY = 86400;

export async function fetchMangaCover(title: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.jikan.moe/v4/manga?q=${encodeURIComponent(title)}&limit=1&order_by=popularity`,
      { next: { revalidate: DAY } },
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data?.data?.[0]?.images?.jpg?.large_image_url ?? null;
  } catch {
    return null;
  }
}

export async function fetchBookCover(
  title: string,
  author: string,
): Promise<string | null> {
  try {
    const q = encodeURIComponent(`intitle:${title} inauthor:${author}`);
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=1`,
      { next: { revalidate: DAY } },
    );
    if (!res.ok) return null;
    const data = await res.json();
    const thumb: string | undefined =
      data?.items?.[0]?.volumeInfo?.imageLinks?.thumbnail ??
      data?.items?.[0]?.volumeInfo?.imageLinks?.smallThumbnail;
    if (!thumb) return null;
    return thumb.replace(/^http:/, "https:").replace("zoom=1", "zoom=2");
  } catch {
    return null;
  }
}
