"use client"
import { useState } from 'react';
import Link from 'next/link'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        (<nav className="bg-primary p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-darkBlue text-2xl font-bold">EcoScode</Link>

                {/* Botón de menú para mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-darkBlue">
                        {isOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Links para desktop */}
                <div className="hidden md:flex space-x-4">
                    <Link href="/cuidado-agua" className="text-accent hover:text-darkBlue">
                        Cuidado del Agua
                    </Link>
                    <Link href="/reciclaje" className="text-accent hover:text-darkBlue">
                        Reciclaje
                    </Link>
                    <Link href="/medio-ambiente" className="text-accent hover:text-darkBlue">
                        Medio Ambiente
                    </Link>
                </div>
            </div>

            {/* Menú desplegable para mobile */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-4">
                    <ul>
                        <li>
                            <Link href="/cuidado-agua" className="text-accent hover:text-darkBlue">
                                Cuidado del Agua
                            </Link>
                        </li>
                        <li>
                            <Link href="/reciclaje" className="text-accent hover:text-darkBlue">
                                Reciclaje
                            </Link>
                        </li>
                        <li>
                            <Link href="/medio-ambiente" className="text-accent hover:text-darkBlue">
                                Medio Ambiente
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>)
    );
}
