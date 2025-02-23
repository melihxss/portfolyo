
const AboutSection= () => {
  return (
    <section id="hakkimda" className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-2.5 justify-center px-6">
      <div className="max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4">Hakkımda</h2>
        <p className="text-lg leading-relaxed">
          Merhaba! Ben <span className="text-gray-300 font-semibold">Melih Yusuf Ercan</span>.  
          Bandırma Onyedi Eylül Üniversitesinde Yönetim Bilişim Sistemleri bölümünde 3. sınıf öğrencisiyim.  
          Yaklaşık 2.5 yıldır Web Development ile ilgileniyorum ve hedefim Full-Stack Developer olmak.  
          <br /><br />
          Web geliştirmeye olan ilgim, frontend teknolojileriyle başladı ve zamanla backend tarafına da yöneldim.  
          Şu anda Acun Medya Akademide Next.js ile projeler geliştiriyor, full-stack geliştirme konusunda kendimi sürekli geliştiriyorum.  
          <br /><br />
          MERN stack (MongoDB, Express.js, React, Node.js) üzerinde yoğunlaşarak, modern ve ölçeklenebilir web uygulamaları geliştiriyorum.  
          Aynı zamanda SQL bilgisine sahibim ve veritabanı yönetimi konusunda deneyim kazanıyorum.  
          Next.js, TypeScript, GraphQL ve Tailwind CSS gibi teknolojileri aktif olarak kullanıyorum.  
          <br /><br />
          Yazılım geliştirme dışında, teknoloji dünyasındaki yenilikleri takip etmeyi, yeni teknolojileri öğrenmeyi ve topluluklarla bilgi paylaşmayı seviyorum.  
          <br /><br />
          Eğer benimle iletişime geçmek istersen, aşağıdaki bağlantılardan ulaşabilirsin!
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="https://github.com/melihxss" target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-4 py-2 rounded-lg text-white font-medium text-sm">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yxmelihercan/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 px-4 py-2 rounded-lg text-white font-medium text-sm">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
