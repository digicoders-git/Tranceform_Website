import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, Search, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import API_URL from '../config';

const categories = ['All', 'Hypnotherapy Basics', 'Anxiety & Stress', 'Emotional Healing', 'Habit Transformation', 'Spiritual Healing', 'Pain Management'];

const BlogPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [apiBlogs, setApiBlogs] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/blogs`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          // exclude any that already exist in static list by id
          const staticIds = new Set(blogPosts.map(p => p.id));
          setApiBlogs(data.filter(b => !staticIds.has(b.id)));
        }
      })
      .catch(() => {});
  }, []);

  const allPosts = [...blogPosts, ...apiBlogs];

  const filtered = allPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = allPosts[0];

  return (
    <div className="min-h-screen">

      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#15202B] via-[#0F1722] to-[#15202B]">
        {/* Subtle Accent Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A67C52]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A67C52]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="absolute inset-0 bg-linear-to-t from-[#15202B] via-transparent to-transparent" />
        <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-7xl pt-40 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl space-y-6"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[1px] w-12 bg-[#A67C52]" />
               <span className="text-[#A67C52] text-xs font-medium tracking-[0.4em] uppercase">
                 ( OUR BLOG )
               </span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-serif leading-[1.1]">
              Insights & <br />
              <span className="text-[#A67C52]">Healing Stories</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed serif">
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
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-100 text-sm focus:outline-none focus:border-[#A67C52] transition-colors bg-gray-50/50"
              />
            </div>

            {/* Category Filters */}
            <div className="flex overflow-x-auto scrollbar-hide gap-3 w-full md:w-auto pb-2 md:pb-0">
              <div className="flex flex-nowrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-6 py-2.5 rounded-full text-xs font-medium tracking-wider transition-all duration-500 ${
                    activeCategory === cat
                      ? 'bg-[#A67C52] text-white shadow-xl shadow-[#A67C52]/20'
                      : 'bg-white border border-gray-100 text-gray-500 hover:border-[#A67C52]/30 hover:text-brand-blue'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Post ─── */}
      {activeCategory === 'All' && !searchQuery && (
        <section className="py-20 bg-[#FAFAFA] overflow-hidden">
          <div className="container mx-auto px-6 md:px-16 max-w-7xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1.5px] w-10 bg-[#A67C52]/40" />
              <span className="text-[#A67C52] text-[12px] font-medium tracking-[0.4em] uppercase block">
                ( FEATURED ARTICLE )
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/blog/${featuredPost.id || featuredPost._id}`)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[60px] overflow-hidden shadow-3xl cursor-pointer group bg-white border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#15202B]/30 to-transparent" />
              </div>
              {/* Content */}
              <div className="p-10 md:p-20 flex flex-col justify-center space-y-8">
                <div className="flex items-center gap-4">
                  <span className="px-4 py-1.5 bg-[#A67C52]/10 text-[#A67C52] text-[10px] font-medium tracking-[0.2em] uppercase rounded-full border border-[#A67C52]/20">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-2 text-black/40 text-xs font-light">
                    <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-blue leading-tight group-hover:text-[#A67C52] transition-colors tracking-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-black/70 font-normal text-lg leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-3 text-[#A67C52] font-medium text-xs tracking-[0.2em] uppercase pt-4">
                  Read Full Article <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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
              <div className="flex items-center gap-4 mb-16">
                <div className="h-[1px] w-8 bg-[#A67C52]" />
                <span className="text-[#A67C52] text-[12px] font-medium tracking-[0.4em] uppercase">
                  ( {filtered.length} ARTICLES )
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filtered.map((post, idx) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => navigate(`/blog/${post.id || post._id}`)}
                    className="group cursor-pointer bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-xl hover:shadow-3xl hover:-translate-y-3 transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-[1500ms]"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-1.5 bg-[#15202B]/80 backdrop-blur-md text-white text-[10px] font-medium tracking-widest uppercase rounded-full flex items-center gap-2 border border-white/10">
                          <Tag className="w-3 h-3 text-[#A67C52]" /> {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-10 space-y-5">
                      <div className="flex items-center gap-4 text-black/40 text-[11px] font-medium tracking-widest uppercase">
                        <span>{post.date}</span>
                        <div className="w-1 h-1 rounded-full bg-[#A67C52]/40" />
                        <span className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-2xl font-serif text-brand-blue leading-tight group-hover:text-[#A67C52] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-black/60 font-normal text-base leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-[#A67C52] font-medium text-[11px] tracking-[0.2em] uppercase pt-4">
                        Read More <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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
      <section className="py-32 bg-[#15202B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A67C52] blur-[150px] rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-[#A67C52]/50" />
              <span className="text-[#A67C52] text-[12px] font-medium tracking-[0.4em] uppercase block">
                ( START YOUR JOURNEY )
              </span>
              <div className="h-[1px] w-12 bg-[#A67C52]/50" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Ready to <span className="text-[#A67C52] serif">transform</span> your mind?
            </h2>
            <p className="text-white/70 text-xl font-light max-w-2xl mx-auto leading-relaxed serif">
              Book a consultation with our certified hypnotherapists and take the first step towards lasting change.
            </p>
          </motion.div>
          
          <div className="pt-4">
            <button 
              onClick={() => navigate('/contact')}
              className="px-14 py-6 bg-[#A67C52] text-white rounded-full font-medium text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-brand-blue transition-all duration-500 shadow-3xl active:scale-95"
            >
              BOOK A SESSION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
