export function environmentToFileContent(
  environment: Record<string, string>,
  header?: string | string[],
): string {
  const lines = Object.entries(environment).map(
    ([key, value]) => `${key}="${value}"`,
  );

  return [...normalize(header), ...lines, "" /* add a final line feed */].join(
    "\n",
  );
}

function normalize(lines: string | string[] | undefined): string[] {
  if (Array.isArray(lines)) return [...lines, ""];
  else if (typeof lines === "string") return [lines, ""];
  else return [];
}
