export type SkillItem = { name: string; years: number };

export type HomeSkillsPayload = {
  title: string;
  suffix: string;
  items: SkillItem[];
};

const EMPTY: HomeSkillsPayload = {
  title: "",
  suffix: "",
  items: [],
};

/**
 * CMS home payload must include `skills` with `{ title, suffix, items }`.
 * `heading` is accepted as an alias for `title`.
 * When `skills` is missing (current API only returns `hero`), this returns empty data.
 */
export function resolveHomeSkills(raw: unknown): HomeSkillsPayload {
  if (!raw || typeof raw !== "object") return EMPTY;
  const s = raw as Record<string, unknown>;
  const title =
    typeof s.title === "string"
      ? s.title
      : typeof s.heading === "string"
        ? s.heading
        : "";
  const suffix = typeof s.suffix === "string" ? s.suffix : "";
  const itemsRaw = s.items;
  if (!Array.isArray(itemsRaw)) return { ...EMPTY, title, suffix };

  const items: SkillItem[] = itemsRaw.map((row) => {
    if (!row || typeof row !== "object") {
      return { name: "", years: 0 };
    }
    const r = row as Record<string, unknown>;
    const name = typeof r.name === "string" ? r.name : "";
    const years =
      typeof r.years === "number"
        ? r.years
        : typeof r.years === "string"
          ? Number(r.years) || 0
          : 0;
    return { name, years };
  });

  return { title, suffix, items };
}
