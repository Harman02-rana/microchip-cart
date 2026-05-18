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

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } =
        await supabase.auth.getUser();

      if (!user) {
        setUser(null);
        setLoading(false);
        return;
      }

      const profile =
        await supabase
          .from("profiles")
          .select("account_type")
          .eq("id", user.id)
          .single();

      setUser({
        id: user.id,
        email: user.email || "",
        account_type:
          profile.data
            ?.account_type || "",
      });

      setLoading(false);
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
          if (!session?.user) {
            setUser(null);
            return;
          }

          const profile =
            await supabase
              .from("profiles")
              .select(
                "account_type"
              )
              .eq(
                "id",
                session.user.id
              )
              .single();

          setUser({
            id: session.user.id,
            email:
              session.user.email ||
              "",
            account_type:
              profile.data
                ?.account_type ||
              "",
          });
        }
      );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  async function logout() {
    await supabase.auth.signOut();

    setUser(null);
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