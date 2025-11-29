import { writeFile } from "fs/promises";
import { NextRequest } from "next/server";

export async function FormDataRouteHandler(
  request: NextRequest,
  folder: string
) {
  const formData = await request.formData();
  const text = formData.get("text") as string;
  const bio = formData.get("bio") as string;
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const image = formData.get("img") as File | null;

  let imageUrl = null;

  if (image) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = `/public/${folder}/${image.name}`;
    await writeFile(path, buffer);
    imageUrl = `/${folder}/${image.name}`;
  }
  return { text, imageUrl, bio, email, name };
}
