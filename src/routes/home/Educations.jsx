"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import webDevelopment from "../../images/complateWebDevolopment.jpg"
import mySQL from "../../images/mySQL.jpg"
import css from "../../images/ileriSeviyeCss.jpg"
import js from "../../images/ileriSeviyeJs.jpg"
import react from "../../images/Reactjs.jpg"
import adminPanelli from "../../images/AdminPanelliReact.jpg"
import ileriweb from "../../images/ileriSeviyeWebGeliştirme.jpg"
import mern from "../../images/MERNStack.jpg"
import next from "../../images/nextJs.jpg"
const sertifikalar = [
  { id: 1, title: "The Complete Full-Stack Web Development Bootcamp-Dr.Angela Yu", img: webDevelopment },
  { id: 2, title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert", img: mySQL },
  { id: 3, title: "Projelerle İleri Css ve Flexbox - Abdurrahman Arslantaş", img: css },
  { id: 4, title: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+ - Sadık Turan", img: js },
  { id: 5, title: "React JS : Uygulamalı React JS -Redux Eğitimi - Can Boz", img: react },
  { id: 6, title: "Admin Panelli Full Stack React E-Ticaret Sitesi Yapımı - Emin Basbayan,BilGen Yazılım Akademi", img: adminPanelli},
  { id: 7, title: "Modern Web Geliştirme Kursu | Sıfırdan İleri Seviyeye - Enes Bayram", img: ileriweb},
  { id: 8, title: "[Basitten İleri Seviyeye] Her Yönüyle MERN Stack Eğitimi - AOS Software", img: mern},
  { id: 9, title: "Next.js 15 & React - The Complete Guide-Maximilian Schwarzmüller", img: next},
];

const Egitimler = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="eğitimlerim" className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold border-b-2 border-gray-500 pb-2">
          Eğitimlerim & Sertifikalarım
        </h2>

        <Slider {...settings} className="mt-6">
          {sertifikalar.map((sertifika) => (
            <div key={sertifika.id} className="p-4">
              <img
                src={sertifika.img}
                alt={sertifika.title}
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
              <p className="mt-2 font-semibold">{sertifika.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Egitimler;
