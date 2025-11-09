const COLORS = [
  "#E17076", // Red/Pink
  "#E6954E", // Orange
  "#EBC86E", // Yellow
  "#6CC070", // Green
  "#65AADD", // Light Blue
  "#A695E7", // Purple
  "#EE7AAE", // Pink Purple
  "#8EC1A0", // Mint
];

export function CreateAvatarColor(email: string) {
  let hash = 0;
  for (let i = 0; i < email.length; i++) {
    hash = email.charCodeAt(i) + hash * 31;
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 65%, 50%)`;
}
