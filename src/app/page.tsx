import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">M14 Inc</h1>
            <p className="text-xl mb-8">
              Empowering businesses through innovative software solutions and expert outsourcing services.
            </p>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">About M14 Inc</h2>
            <p className="text-lg text-gray-600 mb-12">
              M14 Inc is a leading software outsourcing company that specializes in delivering high-quality, scalable solutions to businesses worldwide. With our team of expert developers and industry veterans, we help companies transform their digital presence and streamline their operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Custom Software Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-4">Custom Software Development</h3>
              <p className="text-gray-600">
                Tailored solutions designed to meet your specific business needs, from web applications to enterprise software.
              </p>
            </div>

            {/* Cloud Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-4">Cloud Solutions</h3>
              <p className="text-gray-600">
                Scalable cloud infrastructure and services to ensure your applications run smoothly and efficiently.
              </p>
            </div>

            {/* Digital Transformation */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-4">Digital Transformation</h3>
              <p className="text-gray-600">
                Comprehensive digital transformation services to modernize your business processes and technology stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your business? Contact us today to discuss your project.
            </p>
            <a
              href="mailto:contact@m14inc.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
