import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full py-5 px-6 md:px-12 flex justify-between items-center fixed top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100">
      <Link href="/" className="text-2xl font-bold text-renalyse-dark">
        RE<span className="text-renalyse-primary">.</span>nalyse
      </Link>
      <div className="hidden md:flex items-center space-x-8 font-medium text-renalyse-dark">
        <Link href="#how-it-works" className="hover:text-renalyse-primary transition">How it Works</Link>
        <Link href="#users" className="hover:text-renalyse-primary transition">Who it's For</Link>
        <Link href="#contact" className="hover:text-renalyse-primary transition">Collaboration</Link>
        <Link href="/login" className="bg-renalyse-primary text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer">
          Portal Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;