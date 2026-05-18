import { supabase } from "./supabase";

export async function signUpUser(
  email: string,
  password: string
) {
  const { data, error } =
    await supabase.auth.signUp({
      email,
      password,
    });

  return { data, error };
}

export async function loginUser(
  email: string,
  password: string
) {
  const { data, error } =
    await supabase.auth.signInWithPassword(
      {
        email,
        password,
      }
    );

  return { data, error };
}

export async function logoutUser() {
  return await supabase.auth.signOut();
}

export async function sendOTP(
  email: string
) {
  return await supabase.auth.signInWithOtp(
    {
      email,
      options: {
        emailRedirectTo:
          "http://localhost:3000",
      },
    }
  );
}