
const AboutSection= () => {
  return (
    <section id="hakkimda" className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-2.5 justify-center px-6">
      <div className="max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4">Hakkımda</h2>
       <p className="text-lg leading-relaxed">
  Merhaba! Ben <span className="text-gray-300 font-semibold">Melih Yusuf Ercan</span>.  
  Bandırma Onyedi Eylül Üniversitesinde Yönetim Bilişim Sistemleri bölümünde 3. sınıf öğrencisiyim.  
  IT alanına, özellikle network, sistem yönetimi ve altyapı konularına ilgi duyuyorum ve bu alanda kendimi geliştirmeye devam ediyorum.  
  <br /><br />
  Yazılıma olan ilgim ise zamanla bir hobiye dönüştü. Web teknolojileriyle başladığım bu yolculukta hem frontend hem de backend alanlarında projeler geliştirdim.  
  Özellikle Full-Stack Development ve Blockchain teknolojileri üzerine araştırmalar yaparak bilgi sahibi oldum.  
  <br /><br />
  Şu anda Acun Medya Akademide Next.js ile projeler geliştiriyor, MERN stack (MongoDB, Express.js, React, Node.js) kullanarak modern ve ölçeklenebilir web uygulamaları inşa ediyorum.  
  Aynı zamanda SQL bilgisine sahibim ve veritabanı yönetimi konusunda da deneyim kazandım.  
  Next.js, TypeScript, GraphQL ve Tailwind CSS gibi teknolojileri aktif olarak kullanıyorum.  
  <br /><br />
  Teknoloji dünyasındaki gelişmeleri yakından takip etmeyi, farklı alanlara dair bilgi edinmeyi ve öğrendiklerimi paylaşmayı seviyorum.  
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
