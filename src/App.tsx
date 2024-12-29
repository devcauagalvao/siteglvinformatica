import React, { useEffect } from "react";
import {
  Code2,
  Smartphone,
  Settings,
  Database,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";
import CaseStudyCard from "./components/CaseStudyCard";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section
        id="home"
        className="pt-24 pb-32 relative overflow-hidden bg-[#E0F2FF]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 opacity-80 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-wide mb-6">
              Bem-vindo
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Soluções inteligentes em tecnologia para transformar o seu
              negócio. Somos especialistas em desenvolvimento de software,
              suporte técnico e inovação digital para empresas de todos os
              tamanhos.
            </p>
          </div>
        </div>

        {/* Animação de linhas flutuantes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="floating-lines">
            {[...Array(window.innerWidth >= 768 ? 20 : 10)].map((_, i) => (
              <div
                key={i}
                className="line"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 6}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <style>
          {`
      .floating-lines {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
      }

      .line {
        position: absolute;
        top: 0;
        width: 2px;
        height: 100%;
        background: rgba(255, 255, 255, 0.58);
        animation: float 8s linear infinite;
      }

      @keyframes float {
        0% {
          transform: translateY(100%);
        }
        100% {
          transform: translateY(-100%);
        }
      }

      /* Responsividade */
      @media (max-width: 768px) {
        .floating-lines {
          display: block;
        }
      }
    `}
        </style>
      </section>

      <section id="about" className="py-20 bg-white text-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 animate__animated animate__fadeIn animate__delay-1s">
              Sobre Nós
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
              Ajudamos empresas a alcançar seus objetivos de transformação
              digital. Somos apaixonados por criar soluções inovadoras que geram
              resultados reais para nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Missão
              </h3>
              <p className="text-lg text-gray-700 opacity-80">
                Impulsionar a transformação digital por meio de tecnologia de
                ponta e soluções personalizadas.
              </p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Visão
              </h3>
              <p className="text-lg text-gray-700 opacity-80">
                Ser o parceiro líder para empresas que buscam inovação,
                crescimento e eficiência na era digital.
              </p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Valores
              </h3>
              <p className="text-lg text-gray-700 opacity-80">
                Integridade, Colaboração e Excelência em tudo o que fazemos.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="#contact" className="scroll-button">
              <Button
                variant="secondary"
                size="lg"
                className="transition-transform transform hover:scale-105 animate__animated animate__bounce animate__delay-1s"
              >
                Solicitar Orçamento
              </Button>
            </a>
          </div>
        </div>
      </section>

      <style>
        {`
  html {
    scroll-behavior: smooth;
  }

  .scroll-button {
    display: inline-block;
  }
  `}
      </style>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Oferecemos soluções digitais inovadoras que transformam seu
              negócio de maneira ágil e eficiente.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-16">
            <div className="group relative w-full sm:w-72 lg:w-96 p-10 rounded-3xl border-2 border-gray-200 transition-all hover:scale-105 hover:border-blue-400">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 opacity-60 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                    stroke="currentColor"
                    className="text-blue-500 group-hover:text-blue-400 transition-all"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12l2 2 4-4 6 6 4-4 2 2" />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Desenvolvimento Web
                </h3>
                <p className="text-lg text-gray-800 opacity-90">
                  Criamos sites modernos, responsivos e com excelente
                  performance.
                </p>
              </div>
            </div>

            <div className="group relative w-full sm:w-72 lg:w-96 p-10 rounded-3xl border-2 border-gray-200 transition-all hover:scale-105 hover:border-blue-400">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 opacity-60 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                    stroke="currentColor"
                    className="text-blue-500 group-hover:text-blue-400 transition-all"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12l-5 5V7l5 5zM5 12l5 5V7L5 12z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Aplicativos Móveis
                </h3>
                <p className="text-lg text-gray-800 opacity-90">
                  Aplicações móveis nativas e híbridas para Android e iOS, com
                  alta usabilidade.
                </p>
              </div>
            </div>

            <div className="group relative w-full sm:w-72 lg:w-96 p-10 rounded-3xl border-2 border-gray-200 transition-all hover:scale-105 hover:border-blue-400">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 opacity-60 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                    stroke="currentColor"
                    className="text-blue-500 group-hover:text-blue-400 transition-all"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 2H8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V8h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Consultoria em TI
                </h3>
                <p className="text-lg text-gray-800 opacity-90">
                  Oferecemos insights estratégicos para acelerar seu crescimento
                  através da tecnologia.
                </p>
              </div>
            </div>

            <div className="group relative w-full sm:w-72 lg:w-96 p-10 rounded-3xl border-2 border-gray-200 transition-all hover:scale-105 hover:border-blue-400">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 opacity-60 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                    stroke="currentColor"
                    className="text-blue-500 group-hover:text-blue-400 transition-all"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 8v12H4V8h16zm0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Soluções em Nuvem
                </h3>
                <p className="text-lg text-gray-800 opacity-90">
                  Garantimos soluções seguras, escaláveis e eficientes na nuvem,
                  para otimizar seus processos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Estudos de Caso
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubra os projetos mais impactantes que já realizamos e como
              ajudamos empresas a crescerem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                img: "https://portal6.com.br/wp-content/uploads/2022/06/apps-iphone-tela-gravada.jpeg",
                title: "Desenvolvimento de Apps Móveis",
                description:
                  "Aplicativo nativo desenvolvido para academias, com foco no usuário e wearables.",
                stats: [
                  "200% de aumento no engajamento dos usuários",
                  "Feedbacks 5 estrelas na App Store",
                  "Integração com dispositivos de saúde",
                ],
              },
              {
                img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
                title: "Consultoria de TI",
                description:
                  "Consultoria estratégica para infraestrutura de TI personalizada para multinacionais.",
                stats: [
                  "Redução de 40% nos custos de infraestrutura",
                  "Soluções avançadas de segurança de dados",
                  "Aumento de 25% na eficiência interna",
                ],
              },
              {
                img: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg",
                description:
                  "Transformação digital para varejo, elevando operações e vendas online.",
                stats: [
                  "300% de aumento nas vendas online",
                  "50% de redução nos custos operacionais",
                  "99.9% de uptime alcançado",
                ],
              },
            ].map((caseStudy, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={caseStudy.img}
                    alt={caseStudy.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-500 transition duration-300">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-700 mt-3">{caseStudy.description}</p>
                  <ul className="mt-4 space-y-2">
                    {caseStudy.stats.map((stat, statIndex) => (
                      <li
                        key={statIndex}
                        className="flex items-center text-gray-600 text-sm"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {stat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Clientes satisfeitos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Kleber A."
              testimonial="Gostaríamos de agradecer à equipe pelo excelente trabalho no desenvolvimento do nosso aplicativo. A parceria foi fundamental para o sucesso do projeto e estamos muito satisfeitos com o resultado final!"
            />
            <TestimonialCard
              name="Jose P."
              testimonial="Agradecemos imensamente pelo desenvolvimento do nosso sistema. A equipe entregou um trabalho de qualidade, dentro do prazo, e agora nosso sistema está funcionando perfeitamente para atender nossos clientes."
            />
            <TestimonialCard
              name="Heitor Mota"
              testimonial="Muito obrigado pelo trabalho no nosso site! O design ficou incrível e a funcionalidade está impecável. Estamos recebendo ótimos feedbacks de nossos clientes, graças à dedicação da equipe."
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos prontos para ajudar a transformar suas ideias em soluções
              tecnológicas que atendem às suas necessidades!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-blue-500">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-800"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-800"
                  >
                    Endereço de E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium text-gray-800"
                  >
                    Número de Celular
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-800"
                  >
                    Sua Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center text-lg text-gray-700">
                    <MapPin className="w-7 h-7 text-blue-500 mr-3" />
                    <span>Itu, São Paulo</span>
                  </div>
                  <div className="flex items-center text-lg text-gray-700">
                    <Phone className="w-7 h-7 text-blue-500 mr-3" />
                    <span>11 91916-7653</span>
                  </div>
                  <div className="flex items-center text-lg text-gray-700">
                    <Mail className="w-7 h-7 text-blue-500 mr-3" />
                    <span>glvinformatica2024@gmail.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Nos Encontre nas Redes Sociais
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="https://github.com/devcauagalvao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-purple-500"
                  >
                    <Github className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.instagram.com/glv_informatica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-orange-500"
                  >
                    <FaInstagram className="w-8 h-8" />
                  </a>
                  <a
                    href="https://wa.me/5511919167653"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-green-500"
                  >
                    <FaWhatsapp className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.facebook.com/GLVinformatica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-500"
                  >
                    <FaFacebook className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
