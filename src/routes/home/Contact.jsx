const Iletisim = () => {
    return (
      <section id="iletisim" className="bg-gradient-to-b from-gray-900 to-black text-white py-10 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold border-b-2 border-gray-500 pb-2">İletişim</h2>
          <p className="text-gray-300 mt-3">Bana aşağıdaki kanallardan ulaşabilirsiniz:</p>
  
          <div className="mt-6 space-y-4 text-lg">
            <p>📧 <span className="text-blue-400">melih.ercan.52@gmail.com</span></p>
            <p>📍 İstanbul, Türkiye</p>
            <p>🔗 <a href="https://www.linkedin.com/in/yxmelihercan/" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a></p>
            <p>💻 <a href="https://github.com/melihxss" className="text-blue-400 hover:underline">GitHub</a></p>
          </div>
  
          <form className="mt-6 space-y-4">
            <input type="text" placeholder="Adınız" className="w-full p-3 bg-gray-800 rounded-lg text-white" />
            <input type="email" placeholder="E-posta" className="w-full p-3 bg-gray-800 rounded-lg text-white" />
            <textarea placeholder="Mesajınız" className="w-full p-3 bg-gray-800 rounded-lg text-white h-24"></textarea>
            <button className="w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600">Kara Deliğe Gönder</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Iletisim;
  