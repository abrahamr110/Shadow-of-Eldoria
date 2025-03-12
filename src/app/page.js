"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Sword, Trees, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-950 to-green-900 text-white">
            <header className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Sword className="h-6 w-6" />
                    <Link href={"/"} className="font-bold text-xl">
                        Shadow of Eldoria
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        href="#features"
                        className="hover:text-green-300 transition-colors"
                    >
                        Características
                    </Link>
                    <Link
                        href="#character"
                        className="hover:text-green-300 transition-colors"
                    >
                        Personaje
                    </Link>
                    <Button
                        variant="outline"
                        className="border-green-400 text-green-400 hover:bg-green-400 hover:text-green-950"
                    >
                        Jugar Ahora
                    </Button>
                </nav>
            </header>

            <section className="container mx-auto py-12 md:py-24 px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Aventura en el{" "}
                        <span className="text-green-400">Bosque Encantado</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                        Embárcate en una épica aventura 2D medieval. Explora un
                        bosque mágico, enfrenta criaturas místicas y descubre
                        tesoros ocultos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                            size="lg"
                            className="bg-green-600 hover:bg-green-700"
                        >
                            <Download className="mr-2 h-5 w-5" /> Descargar
                            Ahora
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-green-950"
                        >
                            Ver Trailer
                        </Button>
                    </div>
                </div>
                <div className="flex-1 w-full max-w-md">
                    <AspectRatio
                        ratio={16 / 10}
                        className="bg-green-800/50 rounded-lg overflow-hidden border-2 border-green-700 shadow-lg"
                    >
                        <Image
                            src="/images/bosqueEncantado.jpg"
                            alt="Enchanted Quest Game Screenshot"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </AspectRatio>
                </div>
            </section>

            <section id="features" className="bg-green-900/50 py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Características del Juego
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="bg-green-800/50 border-green-700 text-white">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Sword className="h-5 w-5 text-green-400" />
                                    Combate Épico
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-300">
                                    Sistema de combate fluido con diferentes
                                    armas y habilidades especiales para derrotar
                                    a tus enemigos.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="bg-green-800/50 border-green-700 text-white">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Trees className="h-5 w-5 text-green-400" />
                                    Mundo Expansivo
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-300">
                                    Explora un bosque encantado con múltiples
                                    sombras, secretos ocultos y misiones
                                    secundarias.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="bg-green-800/50 border-green-700 text-white">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <User className="h-5 w-5 text-green-400" />
                                    Progresión de Personaje
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-300">
                                    Mejora a tu héroe con nuevas habilidades,
                                    equipamiento y poderes mágicos a lo largo de
                                    tu aventura.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section
                id="character"
                className="container mx-auto py-16 px-4 md:px-6"
            >
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            El Héroe del Bosque
                        </h2>
                        <p className="text-gray-300 mb-4">
                            Conoce a Kael, un joven caballero con un destino
                            extraordinario. Dotado con la capacidad de
                            comunicarse con los espíritus del bosque, Kael debe
                            restaurar el equilibrio en el reino y derrotar a las
                            fuerzas oscuras.
                        </p>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                                Habilidades únicas de combate y magia
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                                Personalización completa de equipamiento
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                                Historia profunda con múltiples finales
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 order-1 md:order-2">
                        <div className="relative h-80 w-80 mx-auto">
                            <div className="absolute inset-0 bg-green-400/20 rounded-full blur-3xl"></div>
                            <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-green-400">
                                <Image
                                    src="/images/Personaje_Shadow_Of_Eldoria-SinFondo.png"
                                    alt="Kael"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-16 px-4 md:px-6 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        ¿Listo para la Aventura?
                    </h2>
                    <p className="text-gray-300">
                        Únete a miles de jugadores que ya están explorando el
                        Bosque Encantado. Tu leyenda espera ser escrita.
                    </p>
                    <Button
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-lg px-8"
                    >
                        Comenzar Aventura
                    </Button>
                </div>
            </section>

            <footer className="bg-green-950 py-8 border-t border-green-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Sword className="h-5 w-5 text-green-400" />
                            <span className="font-bold">Shadow of Eldoria</span>
                        </div>
                        <div className="flex gap-6">
                            <Link
                                href="#"
                                className="text-gray-300 hover:text-green-400 transition-colors"
                            >
                                Política de Privacidad
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-300 hover:text-green-400 transition-colors"
                            >
                                Términos de Uso
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-300 hover:text-green-400 transition-colors"
                            >
                                Contacto
                            </Link>
                        </div>
                        <div className="text-sm text-gray-400">
                            © 2025 Shadow of Eldoria. Todos los derechos
                            reservados.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
