import { writeFile } from "fs/promises";
import { NextRequest } from "next/server";

export async function FormDataRouteHandler(
  request: NextRequest,
  folder: string
) {
  const formData = await request.formData();
  const text = formData.get("text") as string;
  const image = formData.get("img") as File | null;

  let imageUrl = null;

  if (image) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = `C:/Users/Amir/Desktop/linkedin-nextjs/public/${folder}/${image.name}`;
    await writeFile(path, buffer);
    imageUrl = `/postimg/${image.name}`;
  }
  return {text , imageUrl}
}
