import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="border-b-2 border-zinc-400 bg-zinc-900">
        <nav className="flex items-center justify-between p-6 font-bold text-zinc-400 sm:p-8">
          <Link href="/">
            <Image
              src="/basepaint.png"
              alt="BasePaint Logo"
              className="hover:animate-spin"
              width={32}
              height={32}
              priority
            />
          </Link>
          <div className="hidden gap-x-12 sm:flex">
            <Link
              href="/"
              className="duration-500 ease-out hover:text-purple-500"
            >
              Product
            </Link>
            <Link
              href="/"
              className="duration-500 ease-out hover:text-purple-500"
            >
              Features
            </Link>
            <Link
              href="/"
              className="duration-500 ease-out hover:text-purple-500"
            >
              Company
            </Link>
          </div>

          <Link
            href="/"
            className="duration-500 ease-out hover:text-purple-500"
          >
            Log in <span>&rarr;</span>
          </Link>
        </nav>
      </header>
    </>
  );
}
