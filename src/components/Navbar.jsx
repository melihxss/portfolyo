import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
    function handleClick(){
        setIsOpen(false)
    }
  return (
    <div className="relative flex justify-between align-middle">
       <h1 className="absolute top-4 left-4 font-bold font-sans text-white">Melih Yusuf Ercan</h1>
       <div>
        <button
        className="fixed top-4 right-4 z-50  text-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`z-49 fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="p-6 space-y-4">
          <li><a onClick={handleClick} href="#hakkimda" className="block hover:text-black">Hakkımda</a></li>
          <li><a onClick={handleClick} href="#vizyonum" className="block hover:text-gray-400">Vizyonum</a></li>
          <li><a onClick={handleClick} href="#eğitimlerim" className="block hover:text-gray-400">Yeteneklerim</a></li>
          <li><a onClick={handleClick} href="#iletisim" className="block hover:text-gray-400">İletişim</a></li>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}</div> 
      
    </div>
  );
}
