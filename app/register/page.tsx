import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">

        <Link href="/register/personal">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-green-400 transition cursor-pointer">

            <h2 className="text-4xl font-black mb-4">
              Personal Account
            </h2>

            <p className="text-zinc-400 text-lg">
              Buy chips, components and electronics for personal projects.
            </p>

          </div>

        </Link>

        <Link href="/register/business">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-blue-400 transition cursor-pointer">

            <h2 className="text-4xl font-black mb-4">
              Business Account
            </h2>

            <p className="text-zinc-400 text-lg">
              Manage bulk orders, RFQs and supplier operations.
            </p>

          </div>

        </Link>

      </div>

    </div>
  );
}