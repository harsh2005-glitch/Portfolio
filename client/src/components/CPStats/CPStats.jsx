import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, ChefHat } from 'lucide-react';
import './CPStats.css';

export default function CPStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [lcSolved, setLcSolved] = useState(191); // fallback
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://alfa-leetcode-api.onrender.com/harsh_it21/solved')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.solvedProblem) {
          setLcSolved(data.solvedProblem);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch LeetCode stats:', err);
        setLoading(false);
      });
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section className="section cp-section" id="cp-stats" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
        >
          Programming
        </motion.span>
        
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
        >
          Competitive <span className="gradient-text">Stats</span>
        </motion.h2>

        <div className="cp-cards">
          {/* LeetCode Card */}
          <motion.a 
            href="https://leetcode.com/u/harsh_it21/"
            target="_blank"
            rel="noreferrer"
            className="cp-card glass-card"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ textDecoration: 'none' }}
          >
            <div className="cp-card-header">
              <Code2 size={24} color="#ffffff" />
              <h3>LeetCode</h3>
            </div>
            <div className="cp-card-body">
              <div className="cp-stat-primary">
                {loading ? '...' : lcSolved}
              </div>
              <div className="cp-stat-label">Solved</div>
              <div className="cp-stat-secondary">
                Top <span>21</span>%
              </div>
            </div>
          </motion.a>

          {/* CodeChef Card */}
          <motion.a 
            href="https://www.codechef.com/users/harsh_21it"
            target="_blank"
            rel="noreferrer"
            className="cp-card glass-card"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ textDecoration: 'none' }}
          >
            <div className="cp-card-header">
              <ChefHat size={24} color="#ffffff" />
              <h3>CodeChef</h3>
            </div>
            <div className="cp-card-body">
              <div className="cp-stat-primary">1462</div>
              <div className="cp-stat-label">Rating</div>
              <div className="cp-stat-secondary">
                Max <span>1462</span>
              </div>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
