export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Marine Cosmetic</h3>
            <p className="text-gray-300">바다에서 영감을 받은 자연 화장품</p>
          </div>
          <div>
            <h4 className="text-md font-medium mb-4">제품</h4>
            <ul className="space-y-2 text-gray-300">
              <li>스킨케어</li>
              <li>메이크업</li>
              <li>선케어</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-medium mb-4">고객지원</h4>
            <ul className="space-y-2 text-gray-300">
              <li>FAQ</li>
              <li>배송정보</li>
              <li>교환/반품</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-medium mb-4">연락처</h4>
            <ul className="space-y-2 text-gray-300">
              <li>고객센터: 1588-0000</li>
              <li>이메일: info@marinecosmetic.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Marine Cosmetic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}