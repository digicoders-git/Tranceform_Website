import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, ArrowLeft, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);
  const relatedPosts = blogPosts.filter(p => p.id !== id).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!post) navigate('/blog');
  }, [id, post, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* ─── Hero ─── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-5xl pt-40 pb-16 space-y-6">
          {/* Back Button */}
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </button>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-brand-orange/80 text-white text-xs font-semibold rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="text-white/60 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
            <span className="text-white/60 text-xs">{post.date}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-3xl md:text-5xl font-serif italic leading-tight max-w-3xl"
          >
            {post.title}
          </motion.h1>

          <p className="text-white/70 text-lg font-light max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ─── Article Content ─── */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-brand-blue prose-headings:mb-4 prose-headings:mt-10
              prose-h2:text-3xl prose-h2:italic prose-h2:text-brand-orange
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light prose-p:text-lg prose-p:mb-6
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* ─── Related Posts ─── */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="mb-12 space-y-2">
            <span className="text-brand-orange text-[12px] font-semibold tracking-[0.3em] uppercase block">
              ( KEEP READING )
            </span>
            <h2 className="text-4xl font-serif text-brand-blue italic">Related Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related, idx) => (
              <motion.article
                key={related.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => { navigate(`/blog/${related.id}`); window.scrollTo(0,0); }}
                className="group cursor-pointer bg-white rounded-[28px] overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-brand-orange text-xs font-semibold">{related.category}</span>
                  <h3 className="text-lg font-serif text-brand-blue leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <div className="flex items-center gap-2 text-brand-orange font-semibold text-xs pt-1">
                    Read Article <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
