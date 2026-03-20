import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, ArrowLeft, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import API_URL from '../config';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(() => blogPosts.find(p => p.id === id) || null);
  const [allPosts, setAllPosts] = useState(blogPosts);
  const [loading, setLoading] = useState(!blogPosts.find(p => p.id === id));

  useEffect(() => {
    window.scrollTo(0, 0);
    const staticPost = blogPosts.find(p => p.id === id);
    if (staticPost) {
      setPost(staticPost);
      setLoading(false);
      return;
    }
    // Not in static — fetch from API
    setLoading(true);
    fetch(`${API_URL}/api/blogs/${id}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data) {
          setPost(data);
          setAllPosts([...blogPosts, data]);
        } else {
          navigate('/blog');
        }
      })
      .catch(() => navigate('/blog'))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  const relatedPosts = allPosts.filter(p => (p.id || p._id) !== id).slice(0, 3);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#15202B]">
      <div className="w-10 h-10 border-2 border-[#A67C52] border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!post) return null;

  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-linear-to-br from-[#15202B] via-[#0F1722] to-[#15202B]">
        {/* Subtle Accent Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A67C52]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A67C52]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="absolute inset-0 bg-linear-to-t from-[#15202B] via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-5xl pt-40 pb-12 space-y-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-3 text-white/70 hover:text-white text-xs tracking-[0.2em] uppercase transition-all mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </button>

          <div className="flex items-center gap-4">
            <span className="px-4 py-1.5 bg-[#A67C52]/90 backdrop-blur-md text-white text-[10px] font-medium tracking-[0.2em] uppercase rounded-full flex items-center gap-2 border border-white/10">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <div className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/60 text-[11px] font-light tracking-wider flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <div className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/60 text-[11px] font-light tracking-wider">{post.date}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-serif leading-[1.1] max-w-4xl tracking-tight"
          >
            {post.title}
          </motion.h1>

          <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed serif">
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
              prose-headings:font-serif prose-headings:text-brand-blue prose-headings:mb-6 prose-headings:mt-12
              prose-h2:text-4xl prose-h2:text-[#A67C52]
              prose-p:text-black prose-p:leading-relaxed prose-p:font-normal prose-p:text-xl prose-p:mb-8
              prose-strong:text-brand-blue prose-strong:font-semibold
              prose-blockquote:border-l-[#A67C52] prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:serif prose-blockquote:text-2xl
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* ─── Related Posts ─── */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="mb-16 space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#A67C52]/40" />
              <span className="text-[#A67C52] text-[12px] font-medium tracking-[0.4em] uppercase block">
                ( KEEP READING )
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-blue">Related Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related, idx) => (
              <motion.article
                key={related.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => { navigate(`/blog/${related.id || related._id}`); window.scrollTo(0,0); }}
                className="group cursor-pointer bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-[1500ms]"
                  />
                </div>
                <div className="p-10 space-y-5">
                  <span className="text-[#A67C52] text-[11px] font-medium tracking-[0.2em] uppercase">{related.category}</span>
                  <h3 className="text-xl font-serif text-brand-blue leading-snug group-hover:text-[#A67C52] transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[#A67C52] font-medium text-[11px] tracking-[0.2em] uppercase pt-2">
                    Read Article <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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
