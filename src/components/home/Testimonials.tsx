
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "The Image Enhancer tool literally saved hours of manual retouching work. The quality of the output is remarkable, and now we rely on it for all our promotional materials.",
    author: "Sarah Johnson",
    position: "Marketing Director, TechGrowth",
    stars: 5
  },
  {
    content: "As a data scientist, the visualization tools have transformed how I present findings to stakeholders. Complex patterns are now immediately clear to everyone in the room.",
    author: "Michael Chen",
    position: "Lead Data Scientist, AnalyticsPro",
    stars: 5
  },
  {
    content: "The document parsing accuracy exceeds anything we've tried before. We've integrated it into our workflow and reduced processing time by 78%.",
    author: "Emily Rodriguez",
    position: "Operations Manager, LegalTech Solutions",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of professionals and businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-6 flex-grow">{testimonial.content}</p>
              
              {/* Author */}
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="mt-20">
          <p className="text-center text-sm text-gray-500 mb-8">TRUSTED BY LEADING COMPANIES</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {/* These would normally be actual company logos */}
            <div className="text-gray-400 font-heading font-bold text-xl">Microsoft</div>
            <div className="text-gray-400 font-heading font-bold text-xl">IBM</div>
            <div className="text-gray-400 font-heading font-bold text-xl">Adobe</div>
            <div className="text-gray-400 font-heading font-bold text-xl">Salesforce</div>
            <div className="text-gray-400 font-heading font-bold text-xl">Oracle</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
