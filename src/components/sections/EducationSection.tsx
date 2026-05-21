import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
    {
        degree: 'Bachelor of Engineering in Computer Science',
        institution: 'Savitribai Phule Pune University',
        period: '2021 – 2025',
        location: 'Pune, India',
        score: 'CGPA: 7.92',
        type: 'Bachelor',
    },
    {
        degree: '12th Maharashtra State Board',
        institution: 'Sant Bhagwanbaba Uchha-Madhyamik Vidyalay',
        period: '2019 – 2021',
        location: 'Maharashtra, India',
        score: 'Percentage: 85%',
        type: 'Higher Secondary',
    },
];

const achievements = [
    'Published research paper on "Crop Disease Detection and Recovery Prediction using CNN" in a reputed journal',
    'Published "Web Scraping for E-Commerce Website" in International Conference on Recent Trends in Innovation and Technology, vol.13, Issue 04, 2024',
    'Completed Software Engineer Training at Qspider Training Institute',
];

export const EducationSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="py-20 md:py-32 relative" ref={ref}>
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <motion.div
                    className="mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-4">
                        Education
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                        My academic journey and qualifications in computer science.
                    </p>
                </motion.div>

                {/* Education Timeline */}
                <div className="space-y-8 mb-20">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            className="relative pl-8 md:pl-12 border-l-2 border-border"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                        >
                            {/* Timeline dot */}
                            <motion.div
                                className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-foreground"
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                            />

                            <motion.div
                                className="bg-muted rounded-lg p-6 md:p-8 hover:bg-foreground/5 transition-colors"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-display font-medium mb-2">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-base md:text-lg text-muted-foreground">
                                            {edu.institution}
                                        </p>
                                    </div>
                                    <span className="px-4 py-2 bg-background rounded-lg text-sm font-medium">
                                        {edu.score}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {edu.period}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        {edu.location}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <motion.div
                            className="p-2 rounded-lg bg-muted"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <Award className="w-5 h-5 text-foreground" />
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-display font-medium">
                            Achievements
                        </h3>
                    </div>

                    <div className="space-y-4">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="flex gap-3 items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                whileHover={{ x: 5 }}
                            >
                                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    {achievement}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
