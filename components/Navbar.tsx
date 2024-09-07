import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black border-b border-slate-900 px-10 py-10">
      <Link href="/">
        <p className="font-semibold text-white">QrGenrator</p>
      </Link>

      <div className="max-md:hidden flex gap-5">
        <Link href="/about">
          <p className="text-white font-bold">About</p>
        </Link>
        <Link href="/about">
          <p className="text-white font-bold">Donate</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar