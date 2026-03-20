import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "Don't forget to understand yourself",
    image: "/images/image.png",
    link: "#"
  },
  {
    title: "Recovery is not magic, it takes time",
    image: "/images/image2.png",
    link: "#"
  },
  {
    title: "Understand the roots of anxiety",
    image: "/images/image4.png",
    link: "#"
  }
];

const BlogInsights = () => {
  return (
    <section className="py-24 bg-[#15202B]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <div className="mb-16 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-[#A67C52]" />
            <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase block">
              ( BLOG INSIGHTS )
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Stay <span className="text-[#A67C52]">connected</span>
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
              <div className="w-32 h-44 md:w-40 md:h-56 shrink-0 rounded-[30px] overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-[1000ms]"
                />
              </div>
 
              {/* Post Content */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-serif text-white/90 leading-snug group-hover:text-white transition-colors">
                  {post.title}
                </h3>
                <a 
                  href={post.link} 
                  className="inline-block text-[#A67C52] text-[11px] font-medium uppercase tracking-[0.2em] border-b border-[#A67C52]/30 pb-1 hover:text-white hover:border-white transition-all"
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
