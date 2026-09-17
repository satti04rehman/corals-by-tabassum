import Link from "next/link";
import { Logo } from "@/components/brand/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <header className="container-tc flex items-center justify-between py-6">
        <Link href="/">
          <Logo className="h-8" />
        </Link>
        <Link
          href="/shop"
          className="text-sm font-medium text-text-gray transition-colors hover:text-champagne"
        >
          Shop Jewellery
        </Link>
      </header>
      <main className="flex flex-1 items-center justify-center px-4 pb-16">
        <div className="w-full max-w-md">{children}</div>
      </main>
      <footer className="border-t border-soft-gray py-6 text-center text-xs text-text-gray">
        © {new Date().getFullYear()} Corals by Tabassum — Elegance meets everyday.
      </footer>
    </div>
  );
}