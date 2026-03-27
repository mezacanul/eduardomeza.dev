function getImagesBaseURL() {
  const baseUrl = process.env.NEXT_PUBLIC_CMS_URL;
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
  return `${baseUrl}/images/${projectId}`;
}

function scrollTo(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export { getImagesBaseURL, scrollTo };
