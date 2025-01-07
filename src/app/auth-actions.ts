"use server"

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";



interface AuthResponse {
    error: null | string;
    success: boolean;
    data: unknown | null;
}

export async function signup(formData: FormData): Promise<AuthResponse> {
    try {
        // first create a supabase client
        const supabaseClient = await createClient();

        const data = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
            options: { // mistake was here, instead of fullName , firstName was written
                data:{ 
                    fullName: formData.get("fullName") as string
                }
            }
        }

        console.log(JSON.stringify(data));
        

        const { data: signupData, error } = await supabaseClient.auth.signUp(data);

        return ({
            error: error?.message || "There was an error signing up",
            success: !error,
            data: signupData || null
        })

    } catch (err) {
        console.log(err);
        return {
            error: "An unexpected error occurred. Please try again.",
            success: false,
            data: null,
        };

    }
}

export async function login(formData: FormData): Promise<AuthResponse> {
    try {
        // first create a supabase client
        const supabaseClient = await createClient();

        const data = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        }

        const { data: signinData, error } = await supabaseClient.auth.signInWithPassword(data);

        return ({
            error: error?.message || "There was an error logging in",
            success: !error,
            data: signinData || null
        })

    } catch (err) {
        console.log(err);
        return {
            error: "An unexpected error occurred. Please try again.",
            success: false,
            data: null,
        };

    }
}


export async function logout(): Promise<void> {
    try {
        // first create a supabase client
        const supabaseClient = await createClient();

        await supabaseClient.auth.signOut();
        redirect("/login");
    
        

    } catch (err) {
        console.log(err);
        

    }
}