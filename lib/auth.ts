import { supabase } from "./supabase";

/* REGISTER */

export async function registerUser(
  name: string,
  phone: string,
  email: string,
  password: string
) {

  const { data, error } =
    await supabase
      .from("users")
      .insert([
        {
          name,
          phone,
          email,
          password,
        },
      ]);

  return { data, error };
}

/* LOGIN */

export async function loginUser(
  email: string,
  password: string
) {

  const { data, error } =
    await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .single();

  if (data) {

    localStorage.setItem(
      "mc_user",
      JSON.stringify(data)
    );
  }

  return { data, error };
}

/* GET CURRENT USER */

export function getCurrentUser() {

  if (typeof window === "undefined")
    return null;

  const user =
    localStorage.getItem("mc_user");

  return user
    ? JSON.parse(user)
    : null;
}

/* LOGOUT */

export function logoutUser() {

  localStorage.removeItem("mc_user");
}