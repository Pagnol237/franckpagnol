'use client';

import React, { useState, useEffect } from "react";

const UseScreenWidth = () => {
  // Initialiser à une valeur par défaut jusqu'à ce que le composant se monte
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    // Vérifier si 'window' est défini avant d'accéder à ses propriétés
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Initialiser la taille de l'écran
    handleResize();

    // Ajouter l'écouteur pour les changements de taille
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur lors du démontage du composant
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};

export default UseScreenWidth;
