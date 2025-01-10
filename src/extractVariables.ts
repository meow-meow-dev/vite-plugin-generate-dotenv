export function extractVariables(
  environment: Record<string, unknown>,
  prefix: string,
): Record<string, string> | undefined {
  const matchingEntries = Object.entries(environment)
    .filter(
      (pair): pair is [string, string] =>
        pair[0].startsWith(prefix) && typeof pair[1] === "string",
    )
    .map(([key, value]) => [key.substring(prefix.length), value]);

  return matchingEntries.length === 0
    ? undefined
    : Object.fromEntries(matchingEntries);
}
