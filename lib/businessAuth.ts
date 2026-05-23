import { supabase } from "./supabase";

export async function registerBusiness(
  distributor_name: string,
  business_name: string,
  phone: string,
  company_email: string,
  gst_number: string,
  password: string
) {
  return await supabase
    .from("business_users")
    .insert([
      {
        distributor_name,
        business_name,
        phone,
        company_email,
        gst_number,
        password,
      },
    ]);
}

export async function loginBusiness(
  company_email: string,
  password: string
) {
  return await supabase
    .from("business_users")
    .select("*")
    .eq("company_email", company_email)
    .eq("password", password)
    .single();
}