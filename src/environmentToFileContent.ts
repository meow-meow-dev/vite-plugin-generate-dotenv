export function environmentToFileContent(
  environment: Record<string, string>,
  header?: string,
): string {
  const lines = Object.entries(environment).map(
    ([key, value]) => `${key}="${value}"`,
  );

  const headerLines = header === undefined ? [] : [header, ""];
  return [...headerLines, ...lines, "" /* add a final line feed */].join("\n");
}
