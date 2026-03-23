const baseUrl = "http://localhost:5000";

type cmsRequestProps = {
  region: string;
  path?: string;
};

export async function fetchCMSData({
  region,
  path,
}: cmsRequestProps) {
  const url = `${baseUrl}/api/locale/${region}${
    path ? `?path=${path}` : ""
  }`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch CMS data");
  }
  return res.json();
}
