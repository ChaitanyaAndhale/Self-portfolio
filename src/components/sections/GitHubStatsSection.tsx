import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Star, GitCommit, GitPullRequest, AlertCircle, Users, Trophy, Flame, Code2 } from 'lucide-react';

const UID = 'chaitanyaandhale';
const BG = '0d1117';
const ACCENT = '00F7FF';
const THEME = 'radical';

/* ── Custom stat items ──────────────────────────────────────── */
const stats = [
    { icon: GitCommit, label: 'Total Commits', value: '200+', color: 'text-cyan-400' },
    { icon: Star, label: 'Stars Earned', value: '10+', color: 'text-yellow-400' },
    { icon: GitPullRequest, label: 'Pull Requests', value: '15+', color: 'text-purple-400' },
    { icon: AlertCircle, label: 'Issues Raised', value: '20+', color: 'text-rose-400' },
    { icon: Code2, label: 'Repos', value: '20+', color: 'text-emerald-400' },
    { icon: Users, label: 'Contributions', value: '84+', color: 'text-blue-400' },
];

/* ── Top languages with % bars ──────────────────────────────── */
const languages = [
    { name: 'Java', percent: 38, color: '#f89820' },
    { name: 'TypeScript', percent: 22, color: '#3178c6' },
    { name: 'JavaScript', percent: 16, color: '#f0db4f' },
    { name: 'Python', percent: 10, color: '#3572A5' },
    { name: 'HTML', percent: 8, color: '#e44d26' },
    { name: 'CSS', percent: 6, color: '#264de4' },
];

/* ── Trophy badges ───────────────────────────────────────────── */
const trophies = [
    { icon: '🏆', label: 'Achiever', sub: 'Active contributor' },
    { icon: '🔥', label: 'Streak', sub: '5-day streak' },
    { icon: '⭐', label: 'Stars', sub: 'Starred repos' },
    { icon: '💻', label: 'Commits', sub: '200+ commits' },
    { icon: '🔀', label: 'Pull Req.', sub: 'Merged PRs' },
    { icon: '📦', label: 'Repos', sub: '20+ public repos' },
    { icon: '🌍', label: 'Follower', sub: 'Growing network' },
];

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

                {/* ── Trophy Row ─────────────────────────────────────── */}
                <motion.div
                    className="mb-8 p-6 rounded-2xl border border-border bg-muted/10 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5 text-center">
                        🏆 Trophies & Achievements
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {trophies.map((t, i) => (
                            <motion.div
                                key={t.label}
                                className="flex flex-col items-center gap-1 p-3 rounded-xl border border-border bg-background/40 hover:bg-muted/60 transition-all cursor-default min-w-[80px]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.15 + i * 0.07 }}
                                whileHover={{ y: -4, scale: 1.06 }}
                            >
                                <span className="text-2xl">{t.icon}</span>
                                <span className="text-xs font-semibold text-foreground">{t.label}</span>
                                <span className="text-[10px] text-muted-foreground text-center leading-tight">{t.sub}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Stats Card + Streak (side by side) ─────────────── */}
                <div className="grid md:grid-cols-2 gap-5 mb-5">

                    {/* Custom GitHub Stats Card */}
                    <motion.div
                        className="p-6 rounded-2xl border border-border bg-muted/10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.25, duration: 0.6 }}
                        whileHover={{ y: -5, transition: { duration: 0.25 } }}
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <Github className="w-4 h-4 text-muted-foreground" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                📊 GitHub Stats
                            </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {stats.map((s, i) => {
                                const Icon = s.icon;
                                return (
                                    <motion.div
                                        key={s.label}
                                        className="flex flex-col gap-1 p-3 rounded-xl bg-background/40 border border-border/50 hover:border-border transition-colors"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.3 + i * 0.06 }}
                                        whileHover={{ scale: 1.04 }}
                                    >
                                        <Icon className={`w-4 h-4 ${s.color}`} />
                                        <span className={`text-xl font-bold font-display ${s.color}`}>{s.value}</span>
                                        <span className="text-[11px] text-muted-foreground leading-tight">{s.label}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Live Streak Widget */}
                    <motion.div
                        className="p-5 rounded-2xl border border-border bg-muted/10 flex flex-col gap-3"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.35, duration: 0.6 }}
                        whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.25 } }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center">
                            🔥 Streak
                        </p>
                        <img
                            src={`https://streak-stats.demolab.com?user=${UID}&theme=${THEME}&hide_border=true&background=${BG}&ring=${ACCENT}&fire=${ACCENT}&currStreakNum=${ACCENT}`}
                            alt="GitHub Streak"
                            className="w-full h-auto rounded-xl"
                            loading="lazy"
                        />
                    </motion.div>
                </div>

                {/* ── Top Languages + Activity Graph ─────────────────── */}
                <div className="grid md:grid-cols-2 gap-5 mb-8">

                    {/* Custom Top Languages Card */}
                    <motion.div
                        className="p-6 rounded-2xl border border-border bg-muted/10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        whileHover={{ y: -5, transition: { duration: 0.25 } }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5 text-center">
                            💻 Top Languages
                        </p>

                        {/* Color dots legend */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5 justify-center">
                            {languages.map((l) => (
                                <span key={l.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: l.color }} />
                                    {l.name}
                                </span>
                            ))}
                        </div>

                        {/* Stacked % bar */}
                        <div className="flex h-4 rounded-full overflow-hidden mb-4">
                            {languages.map((l) => (
                                <motion.div
                                    key={l.name}
                                    className="h-full"
                                    style={{ background: l.color, width: `${l.percent}%` }}
                                    initial={{ scaleX: 0 }}
                                    animate={isInView ? { scaleX: 1 } : {}}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    style={{ background: l.color, width: `${l.percent}%`, originX: 0 }}
                                    title={`${l.name} ${l.percent}%`}
                                />
                            ))}
                        </div>

                        {/* Individual bars */}
                        <div className="space-y-2.5">
                            {languages.map((l, i) => (
                                <motion.div
                                    key={l.name}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.5 + i * 0.07 }}
                                >
                                    <span className="w-20 text-xs text-muted-foreground text-right shrink-0">{l.name}</span>
                                    <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{ background: l.color }}
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${l.percent}%` } : {}}
                                            transition={{ duration: 0.7, delay: 0.55 + i * 0.07, ease: 'easeOut' }}
                                        />
                                    </div>
                                    <span className="text-xs text-muted-foreground w-8 shrink-0">{l.percent}%</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Live Activity Graph */}
                    <motion.div
                        className="p-5 rounded-2xl border border-border bg-muted/10 flex flex-col gap-3"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.45, duration: 0.6 }}
                        whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.25 } }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center">
                            📈 Activity Graph
                        </p>
                        <img
                            src={`https://github-readme-activity-graph.vercel.app/graph?username=${UID}&bg_color=${BG}&color=${ACCENT}&line=${ACCENT}&point=ffffff&area=true&hide_border=true`}
                            alt="Contribution Graph"
                            className="w-full h-auto rounded-xl"
                            loading="lazy"
                        />
                    </motion.div>
                </div>

                {/* ── Badges row ────────────────────────────────────── */}
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.55, duration: 0.6 }}
                >
                    <motion.a
                        href="https://github.com/ChaitanyaAndhale"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08, y: -3 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img
                            src={`https://komarev.com/ghpvc/?username=${UID}&style=for-the-badge&color=${ACCENT}&label=PROFILE+VIEWS`}
                            alt="Profile Views"
                            className="h-8 rounded"
                            loading="lazy"
                        />
                    </motion.a>
                    <motion.a
                        href="https://github.com/ChaitanyaAndhale?tab=followers"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08, y: -3 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img
                            src={`https://img.shields.io/github/followers/${UID}?style=for-the-badge&color=${ACCENT}&labelColor=${BG}&label=FOLLOWERS&logo=github&logoColor=white`}
                            alt="GitHub Followers"
                            className="h-8 rounded"
                            loading="lazy"
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
