export function verifyRequiredKeys(
  requiredKeys: string[],
  environment: Record<string, string> | undefined,
): string[] | undefined {
  const missingKeys =
    environment === undefined
      ? requiredKeys
      : requiredKeys.filter((key) => !(key in environment));

  return missingKeys.length === 0 ? undefined : missingKeys;
}
