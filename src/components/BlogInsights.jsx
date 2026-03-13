import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "Don't forget to understand yourself",
    image: "/a1.jpg",
    link: "#"
  },
  {
    title: "Recovery is not magic, it takes time",
    image: "/a2.jpg",
    link: "#"
  },
  {
    title: "Understand the roots of anxiety",
    image: "/a3.jpg",
    link: "#"
  }
];

const BlogInsights = () => {
  return (
    <section className="py-24 bg-[#F2D8C9]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <span className="text-[#FF9933] text-[13px] font-bold tracking-[0.2em] uppercase">
            ( BLOG INSIGHTS )
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-brand-blue leading-tight">
            Stay <span className="text-[#B97758] italic">connected</span>
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 group"
            >
              {/* Post Image */}
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-[30px] overflow-hidden shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Post Content */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-serif text-brand-blue leading-snug">
                  {post.title}
                </h3>
                <a 
                  href={post.link} 
                  className="inline-block text-[#B97758] text-sm font-bold uppercase tracking-wider border-b-2 border-[#B97758] pb-1 hover:text-[#FF9933] hover:border-[#FF9933] transition-all"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;
