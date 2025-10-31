'use client';

import Navigation from '../../../../components/navigation';
import Footer from '../../../../components/footer';
import Button from '../../../../components/ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { catalogues, fixtureCollections } from '@/lib/data';
import imageLoader from '@/lib/imageLoader';

const FixturesPage = () => {
    const catalogue = catalogues.find((catalogue) => catalogue.product === 'fixtures');
    const heroImageUrl = imageLoader({ src: '/v1756560206/mirage/qr8v48pr8zkuvfultayh.jpg', width: 1920 });

    if (!catalogue) {
        return <div className="flex items-center justify-center h-screen">Catalogue not found</div>
    }
    return (
        <>
            <Navigation />
            <main>
                <motion.section
                    className="relative h-[50vh] bg-background flex items-center justify-center text-center mt-16 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Background Image Div */}
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
                        style={{
                            backgroundImage: `url(${heroImageUrl})`,
                            backgroundRepeat: 'no-repeat',
                        }}
                    />

                    {/* Centered Text Content */}
                    <motion.div
                        className="relative z-10 px-6" // Added padding for mobile
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        <h1 className="text-display text-foreground mb-4">Bathroom Fixtures</h1>
                        <p className="text-body text-text-secondary max-w-2xl mx-auto">
                            Complete your bathroom with our premium selection of fixtures.
                        </p>
                    </motion.div>
                </motion.section>

                <motion.section
                    className="section-padding bg-surface"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="container-luxury">
                        <div className="grid gap-16">
                            {fixtureCollections.map((collection, index) => (
                                <motion.div
                                    key={index}
                                    className="grid lg:grid-cols-2 gap-16 items-center"
                                    id={collection.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <motion.div
                                        className={`relative h-[500px] rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-last' : ''}`}
                                        initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: index * 0.2 + 0.2, ease: "easeOut" }}
                                        viewport={{ once: true, margin: "-100px" }}
                                    >
                                        <img
                                            src={imageLoader({ src: collection.imageUrl, width: 1000 })}
                                            alt={collection.name}
                                            width={1000}
                                            height={1000}
                                            className="hover:scale-110 transition duration-500"
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="space-y-6"
                                        initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: index * 0.2 + 0.4, ease: "easeOut" }}
                                        viewport={{ once: true, margin: "-100px" }}
                                    >
                                        <div>
                                            <span className="text-small text-gold uppercase tracking-widest font-medium">
                                                {collection.accent}
                                            </span>
                                            <h2 className="text-heading text-foreground mt-2 mb-4">{collection.name}</h2>
                                            <p className="text-body text-text-secondary leading-relaxed">
                                                {collection.description}
                                            </p>
                                        </div>
                                        <div className="space-y-3">
                                            {collection.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center">
                                                    <div className="w-1 h-1 bg-gold rounded-full mr-3" />
                                                    <span className="text-small text-text-secondary">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <a href="/contact-us">
                                            <Button>Shop this Style</Button></a>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
                {/* CTA Section */}
                <motion.section
                    className="section-padding bg-background mx-4 md:mx-0"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div
                        className="container-luxury bg-surface p-6 md:p-16 rounded-2xl flex flex-col md:flex-row justify-between gap-4 items-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div
                            className="basis-3/4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-2xl md:text-4xl mb-6">
                                Ready to Transform Your Space?
                            </h2>
                            <p className="text-lg leading-relaxed mb-12 text-text-secondary">
                                Struggling to visualize your project? Our design experts are here to help. Visit our showroom in Bugolobi to see our collections in person or book a free design consultation today.
                            </p>
                        </motion.div>
                        <motion.div
                            className="basis-1/4 flex flex-col gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <Link href="/contact-us" className="btn-primary">
                                Get in Touch
                            </Link>
                            <Link href={catalogue.file} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                Download Full Catalogue
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.section>
            </main>
            <Footer />
        </>
    );
};

export default FixturesPage;