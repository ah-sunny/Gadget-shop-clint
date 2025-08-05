import aboutImage from '../assets/images/2672335-removebg-preview.jpg';

/* eslint-disable react/no-unescaped-entities */
export const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">About Our Gadget Shop</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">Your one-stop destination for the latest and greatest in tech. Discover our story, our mission, and the values that drive us.</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Our Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2023, our gadget shop started as a small blog dedicated to tech enthusiasts. We saw a need for a curated marketplace where customers could find high-quality, innovative gadgets without the overwhelming noise of larger retailers. Our passion for technology and commitment to customer satisfaction fueled our growth from a humble blog to a thriving online store.
              </p>
              <p className="text-gray-600">
                We believe that technology should be accessible to everyone. That&apos;s why we&apos;ve dedicated ourselves to sourcing the best gadgets, offering them at competitive prices, and providing expert support to our community. We're more than just a shop; we're a hub for innovation and a place where tech lovers can connect.
              </p>
            </div>
            <div>
              <img src={aboutImage} alt="Our Story" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mb-20 bg-white p-12 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our mission is to empower our customers by providing them with cutting-edge technology that enhances their lives. We are committed to offering a diverse range of products, from everyday essentials to groundbreaking innovations, all backed by our exceptional customer service and support. We strive to be a trusted source for all things tech.
            </p>
          </div>
        </section>

        {/* Our Values Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">We are constantly seeking out the latest trends and technologies to ensure our customers have access to the most innovative products on the market.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer-Centric</h3>
              <p className="text-gray-600">Our customers are at the heart of everything we do. We are dedicated to providing a seamless shopping experience and outstanding support.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">We believe in honesty and transparency. We are committed to fair pricing, accurate product information, and ethical business practices.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};