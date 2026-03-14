import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, Search, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const categories = ['All', 'Hypnotherapy Basics', 'Anxiety & Stress', 'Emotional Healing', 'Habit Transformation', 'Spiritual Healing', 'Pain Management'];

const BlogPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-white">

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[#1E2A3A]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${featuredPost.image})` }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-7xl pt-36 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl space-y-5"
          >
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-xs font-semibold tracking-[0.3em] uppercase px-4 py-2 rounded-full">
              Our Blog
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-serif italic leading-tight">
              Insights & Healing Stories
            </h1>
            <p className="text-white/70 text-lg font-light max-w-xl">
              Expert knowledge, real transformations, and everything you need to begin your hypnotherapy journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Search & Filters ─── */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-brand-orange text-white shadow-md shadow-orange-200'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Post ─── */}
      {activeCategory === 'All' && !searchQuery && (
        <section className="py-16 bg-[#FAFAFA]">
          <div className="container mx-auto px-6 md:px-16 max-w-7xl">
            <span className="text-brand-orange text-[12px] font-semibold tracking-[0.3em] uppercase block mb-8">
              ( FEATURED ARTICLE )
            </span>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/blog/${featuredPost.id}`)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[40px] overflow-hidden shadow-2xl cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent" />
              </div>
              {/* Content */}
              <div className="bg-white p-10 md:p-14 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-semibold rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 text-xs">
                    <Clock className="w-3 h-3" /> {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-blue leading-snug group-hover:text-brand-orange transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-500 font-light leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-2 text-brand-orange font-semibold text-sm">
                  Read Full Article <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── All Posts Grid ─── */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          {filtered.length === 0 ? (
            <div className="text-center py-24 space-y-4">
              <p className="text-4xl">🔍</p>
              <p className="text-gray-400 text-lg">No articles found for your search.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-12">
                <span className="text-brand-orange text-[12px] font-semibold tracking-[0.3em] uppercase">
                  ( {filtered.length} ARTICLES )
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filtered.map((post, idx) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="group cursor-pointer bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold rounded-full flex items-center gap-1">
                          <Tag className="w-3 h-3" /> {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-4">
                      <div className="flex items-center gap-3 text-gray-400 text-xs">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif text-brand-blue leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 font-light">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-brand-orange font-semibold text-sm pt-2">
                        Read More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-24 bg-[#B97758]">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-white/60 text-[12px] font-semibold tracking-[0.3em] uppercase block">
              ( START YOUR JOURNEY )
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white italic leading-tight">
              Ready to transform your mind?
            </h2>
            <p className="text-white/70 text-lg font-light max-w-xl mx-auto">
              Book a consultation with our certified hypnotherapists and take the first step towards lasting change.
            </p>
          </motion.div>
          <button className="px-10 py-4 bg-white text-brand-orange rounded-full font-semibold text-base hover:bg-[#15202B] hover:text-white transition-all duration-300 shadow-lg">
            BOOK A SESSION
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
