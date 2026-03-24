export default function SectionTitle({
  title,
}: {
  title: string;
}) {
  return (
    <div className="w-full border-b-2 border-white pb-10 mb-15">
      <h1 className="h1-bold">{title}</h1>
    </div>
  );
}
