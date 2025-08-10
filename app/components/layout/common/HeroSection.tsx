import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Marine Cosmetic
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          바다의 순수한 에너지로 만든 자연 화장품
        </p>
        <button className="btn-primary text-lg px-8 py-3">
          제품 둘러보기
        </button>
      </div>
    </section>
  )
}