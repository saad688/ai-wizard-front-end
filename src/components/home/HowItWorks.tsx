
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Choose the Right Tool',
    description: 'Browse our collection of AI tools and select the one that fits your needs.'
  },
  {
    number: '02',
    title: 'Upload Your Content',
    description: 'Simply upload the file or content you want to process with our AI tool.'
  },
  {
    number: '03',
    title: 'Adjust Settings',
    description: 'Fine-tune the parameters to get the exact results you're looking for.'
  },
  {
    number: '04',
    title: 'Process and Transform',
    description: 'Our AI gets to work, processing your content according to your settings.'
  },
  {
    number: '05',
    title: 'Download Results',
    description: 'Download or share your transformed content with just a click.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      <div className="absolute top-1/3 left-0 w-full h-40 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50 transform -rotate-1 -z-5"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Using our AI tools is simple and straightforward. Follow these steps to get started.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              {/* Make the step number darker */}
              <span className="text-5xl font-bold text-gray-800 opacity-40 absolute -top-2 -left-2 group-hover:opacity-60 transition-opacity">
                {step.number}
              </span>
              
              <div className="mt-6 relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-indigo-50 to-blue-50 rounded-full -mb-12 -mr-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
