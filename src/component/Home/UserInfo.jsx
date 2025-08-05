// import Usercard from "./Card/Usercard";

import Usercard from "../Card/Usercard";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    position: "Tech Enthusiast",
    quote: "This shop has the best gadgets! I found everything I was looking for and the delivery was super fast. Highly recommended!"
  },
  {
    id: 2,
    name: "Maria Garcia",
    position: "Professional Photographer",
    quote: "The quality of the products is amazing. I bought a new camera and it exceeded my expectations. The customer service was also excellent."
  },
  {
    id: 3,
    name: "David Smith",
    position: "Gadget Reviewer",
    quote: "I'm always on the lookout for the latest tech, and this shop never disappoints. A great selection and competitive prices."
  },
  {
    id: 4,
    name: "Sarah Lee",
    position: "Student",
    quote: "I love my new headphones! The sound quality is incredible, and they are so comfortable. I'll definitely be back for more."
  },
];

function UserInfo() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <Usercard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
