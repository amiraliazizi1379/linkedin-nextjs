
import {z} from "zod";


export const RegisterSchema = z.object({
    name : z.string().min(2 , "name must be at least 2 characters "),
    email: z.string().email("invalid email"),
    password : z.string().min(6 , "Password must be at least 6 characters long").max(50) ,
    confirmpassword : z.string()
}).refine(data => data.password === data.confirmpassword , {
    message : "The Password and Confirm Password are not match" , 
    path : ["confirmpassword"]
})

export type registerType = z.infer<typeof RegisterSchema>;