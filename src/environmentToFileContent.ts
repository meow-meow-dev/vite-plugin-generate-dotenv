export function environmentToFileContent(
  environment: Record<string, string>,
): string {
  const lines = Object.entries(environment).map(
    ([key, value]) => `${key}="${value}"`,
  );

  return [...lines, "" /* add a final line feed */].join("\n");
}
