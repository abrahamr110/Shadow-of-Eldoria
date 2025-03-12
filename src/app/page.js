import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";

const MedievalVideo = dynamic(() => import("@/components/MedievalVideo"), {
    ssr: false,
});

export default function Home() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Head>
                <title>Medieval Legends - The Game</title>
                <meta
                    name="description"
                    content="Experience the ancient world of Medieval Legends. A 2D adventure awaits!"
                />
            </Head>

            <header
                className="relative h-screen flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/images/medieval_bg.jpg')" }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center p-8"
                >
                    <h1 className="text-5xl font-extrabold text-yellow-500">
                        Medieval Legends
                    </h1>
                    <p className="text-lg mt-4">
                        An epic journey through a mystical medieval world.
                    </p>
                    <Button className="mt-6 text-xl">Play Now</Button>
                </motion.div>
            </header>

            <section className="py-12 px-4 md:px-12 bg-gray-800">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Game Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <CardContent>
                            <h3 className="text-xl font-semibold">
                                Dynamic Combat
                            </h3>
                            <p>
                                Engage in thrilling battles with medieval
                                warriors.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <h3 className="text-xl font-semibold">
                                Exploration
                            </h3>
                            <p>
                                Discover ancient castles, dark dungeons, and
                                enchanted forests.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <h3 className="text-xl font-semibold">
                                Rich Storyline
                            </h3>
                            <p>Unravel the secrets of a forgotten kingdom.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="py-12 bg-black text-center">
                <h2 className="text-3xl font-bold mb-6">Game Trailer</h2>
                <MedievalVideo />
            </section>

            <section className="py-12 px-4 md:px-12 bg-gray-800">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Screenshots
                </h2>
                <Carousel>
                    <Image
                        src="/images/ss1.jpg"
                        width={600}
                        height={400}
                        alt="Screenshot 1"
                    />
                    <Image
                        src="/images/ss2.jpg"
                        width={600}
                        height={400}
                        alt="Screenshot 2"
                    />
                    <Image
                        src="/images/ss3.jpg"
                        width={600}
                        height={400}
                        alt="Screenshot 3"
                    />
                </Carousel>
            </section>

            <footer className="py-6 bg-gray-900 text-center">
                <p>&copy; 2025 Medieval Legends. All rights reserved.</p>
            </footer>
        </div>
    );
}
