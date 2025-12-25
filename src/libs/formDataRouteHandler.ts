import { NextRequest } from "next/server";
import cloudinary from "./cloudinary";

interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  url: string;
  format: string;
  bytes: number;
}

export async function FormDataRouteHandler(request: NextRequest) {
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
    const result = await new Promise<CloudinaryUploadResult>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "my_app_uploads" }, (err, uploaded) => {
            if (err) reject(err);
            else resolve(uploaded as CloudinaryUploadResult);
          })
          .end(buffer);
      }
    );
    imageUrl = result.secure_url;
  }
  return { text, imageUrl, bio, email, name };
}
