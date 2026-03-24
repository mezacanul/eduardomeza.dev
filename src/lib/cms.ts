// const baseUrl = "http://localhost:5000";

type cmsRequestProps = {
  region: string;
  path?: string;
};

export async function fetchCMSData({
  region,
  path,
}: cmsRequestProps) {
  const url = `${
    process.env.NEXT_PUBLIC_CMS_URL
  }/api/locale/${region}${path ? `?path=${path}` : ""}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch CMS data");
  }
  return res.json();
}

export async function fetchProjectData({
  region,
  projectId,
}: {
  region: string;
  projectId: string;
}) {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/api/locale/${region}?path=projects&projectId=${projectId}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch project data");
  }
  return res.json();
}
