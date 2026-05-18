"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { supabase } from "@/lib/supabase";

type UserType = {
  id: string;
  email: string;
  account_type: string;
} | null;

type AuthContextType = {
  user: UserType;
  loading: boolean;
  logout: () => Promise<void>;
};

const AuthContext =
  createContext<AuthContextType>({
    user: null,
    loading: true,
    logout: async () => {},
  });

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =
    useState<UserType>(null);

  const [loading, setLoading] =
    useState(true);

  async function fetchProfile(
    authUser: any
  ) {
    if (!authUser) {
      setUser(null);
      setLoading(false);
      return;
    }

    const { data: profile } =
      await supabase
        .from("profiles")
        .select("account_type")
        .eq("id", authUser.id)
        .single();

    setUser({
      id: authUser.id,
      email: authUser.email || "",
      account_type:
        profile?.account_type ||
        "personal",
    });

    setLoading(false);
  }

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } =
        await supabase.auth.getUser();

      await fetchProfile(user);
    }

    loadUser();

    const {
      data: listener,
    } =
      supabase.auth.onAuthStateChange(
        async (
          _event,
          session
        ) => {
          await fetchProfile(
            session?.user
          );
        }
      );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  async function logout() {
    await supabase.auth.signOut();

    setUser(null);

    window.location.href = "/";
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () =>
  useContext(AuthContext);