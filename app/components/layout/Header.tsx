import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-marine-700">
            Marine Cosmetic
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-marine-600">홈</Link>
            <Link href="/products" className="text-gray-700 hover:text-marine-600">제품</Link>
            <Link href="/about" className="text-gray-700 hover:text-marine-600">브랜드</Link>
            <Link href="/contact" className="text-gray-700 hover:text-marine-600">문의</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}