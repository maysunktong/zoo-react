export function getImagePath(name, type = "jpg") {
  if (!name) return `/images/default.${extension}`;

  const formattedName = name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

  return `../../public/assets/animals/${formattedName}.${type}`;
}
