"use client";

import { ReactNode } from "react";
<AuthLayout
  title="Create Account"
  subtitle="Start sourcing microchips globally"
>
   PAGE CONTENT
</AuthLayout>

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            MC <span className="text-blue-500">CHIP</span>
          </h1>

          <p className="text-slate-400 mt-2">
            Semiconductor Marketplace
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-2">
            {title}
          </h2>

          <p className="text-slate-400 mb-8">
            {subtitle}
          </p>

          {children}
        </div>
      </div>
    </div>
  );
}