import { registerUser } from "@/services/registerUser";

export async function POST(request: Request) {
  if (!request)
    return Response.json(
      { message: "email or password is invalid" },
      { status: 400 }
    );
  const body = await request.json();
  try {
   // const { accessToken , refreshToken}   = await registerUser(body) ;
  } catch (err) {
    console.log(err);
  }
}
