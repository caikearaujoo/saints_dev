// src/utils/gsap-config.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const registerGSAPPlugins = () => {
  if (typeof window !== "undefined") { // Garante que só rode no lado do cliente
    gsap.registerPlugin(ScrollTrigger);
    // Opcional: Ajuste configurações globais do GSAP
    // gsap.defaults({ ease: "power2.out" });
  }
};