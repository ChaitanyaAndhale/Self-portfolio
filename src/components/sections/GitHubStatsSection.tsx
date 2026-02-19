import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github } from 'lucide-react';

const UID = 'chaitanyaandhale';
const BG = '0d1117';
const ACCENT = '00F7FF';
const THEME = 'radical';

export const GitHubStatsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="github-stats" className="py-20 md:py-32 relative" ref={ref}>
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <motion.div
                    className="mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <motion.div
                            className="p-2.5 rounded-xl bg-muted"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Github className="w-6 h-6" />
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium">
                            GitHub Analytics
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                        A live snapshot of my open-source activity, contribution streaks, and coding patterns.
                    </p>
                </motion.div>

                {/* Trophy Row */}
                <motion.div
                    className="mb-8 p-5 rounded-2xl border border-border bg-muted/10 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 text-center">
                        🏆 Trophies
                    </p>
                    <div className="flex justify-center overflow-x-auto">
                        <img
                            src={`https://github-profile-trophy.vercel.app/?username=${UID}&theme=${THEME}&no-frame=true&no-bg=true&margin-w=8&row=1&column=7`}
                            alt="GitHub Trophies"
                            className="max-w-full h-auto"
                            loading="lazy"
                        />
                    </div>
                </motion.div>

                {/* Stats + Streak */}
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                    {[
                        {
                            label: '📊 Stats',
                            src: `https://github-readme-stats.vercel.app/api?username=${UID}&show_icons=true&theme=${THEME}&hide_border=true&bg_color=${BG}&title_color=${ACCENT}&icon_color=${ACCENT}&count_private=true&include_all_commits=true`,
                            alt: 'GitHub Stats',
                        },
                        {
                            label: '🔥 Streak',
                            src: `https://streak-stats.demolab.com?user=${UID}&theme=${THEME}&hide_border=true&background=${BG}&ring=${ACCENT}&fire=${ACCENT}&currStreakNum=${ACCENT}`,
                            alt: 'GitHub Streak',
                        },
                    ].map((card, i) => (
                        <motion.div
                            key={card.label}
                            className="p-5 rounded-2xl border border-border bg-muted/10 flex flex-col gap-3"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                        >
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center">
                                {card.label}
                            </p>
                            <img src={card.src} alt={card.alt} className="w-full h-auto rounded-xl" loading="lazy" />
                        </motion.div>
                    ))}
                </div>

                {/* Languages + Activity Graph */}
                <div className="grid md:grid-cols-2 gap-5 mb-8">
                    {[
                        {
                            label: '💻 Top Languages',
                            src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${UID}&layout=compact&theme=${THEME}&hide_border=true&bg_color=${BG}&title_color=${ACCENT}&langs_count=10`,
                            alt: 'Top Languages',
                        },
                        {
                            label: '📈 Activity Graph',
                            src: `https://github-readme-activity-graph.vercel.app/graph?username=${UID}&bg_color=${BG}&color=${ACCENT}&line=${ACCENT}&point=ffffff&area=true&hide_border=true`,
                            alt: 'Contribution Graph',
                        },
                    ].map((card, i) => (
                        <motion.div
                            key={card.label}
                            className="p-5 rounded-2xl border border-border bg-muted/10 flex flex-col gap-3"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.35 + i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                        >
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center">
                                {card.label}
                            </p>
                            <img src={card.src} alt={card.alt} className="w-full h-auto rounded-xl" loading="lazy" />
                        </motion.div>
                    ))}
                </div>

                {/* Badges */}
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.55, duration: 0.6 }}
                >
                    <motion.a
                        href={`https://github.com/ChaitanyaAndhale`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08, y: -3 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img
                            src={`https://komarev.com/ghpvc/?username=${UID}&style=for-the-badge&color=${ACCENT}&label=PROFILE+VIEWS`}
                            alt="Profile Views"
                            className="h-8 rounded"
                        />
                    </motion.a>
                    <motion.a
                        href={`https://github.com/ChaitanyaAndhale?tab=followers`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08, y: -3 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img
                            src={`https://img.shields.io/github/followers/${UID}?style=for-the-badge&color=${ACCENT}&labelColor=${BG}&label=FOLLOWERS&logo=github&logoColor=white`}
                            alt="GitHub Followers"
                            className="h-8 rounded"
                        />
                    </motion.a>
                    <motion.a
                        href="https://github.com/ChaitanyaAndhale"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                        whileHover={{ scale: 1.06, y: -3 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Github size={15} />
                        View GitHub Profile
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};
