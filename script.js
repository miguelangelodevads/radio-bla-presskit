// --- CONFIGURAÇÃO DO TAILWIND ---
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary": "#2f3131",
        background: "#131313",
        error: "#ffb4ab",
        outline: "#8e9192",
        "inverse-surface": "#e2e2e2",
        "on-surface-variant": "#c4c7c8",
        "surface-tint": "#c6c6c7",
        "on-surface": "#e2e2e2",
        "on-secondary-fixed-variant": "#474746",
        "tertiary-fixed": "#e3e2e2",
        "on-primary-container": "#636565",
        "on-tertiary-fixed-variant": "#464747",
        primary: "#ffffff",
        "surface-container": "#1f1f1f",
        "tertiary-container": "#e3e2e2",
        "on-secondary-fixed": "#1c1b1b",
        "primary-fixed": "#e2e2e2",
        "on-error-container": "#ffdad6",
        "inverse-on-surface": "#303030",
        "surface-bright": "#393939",
        "primary-container": "#e2e2e2",
        "secondary-fixed-dim": "#c8c6c5",
        "error-container": "#93000a",
        "inverse-primary": "#5d5f5f",
        "on-tertiary-container": "#646464",
        "on-error": "#690005",
        "surface-container-highest": "#353535",
        "surface-dim": "#131313",
        "surface-container-low": "#1b1b1b",
        "on-tertiary-fixed": "#1b1c1c",
        "on-primary-fixed": "#1a1c1c",
        "surface-container-high": "#2a2a2a",
        "secondary-container": "#474746",
        "surface-container-lowest": "#0e0e0e",
        "secondary-fixed": "#e5e2e1",
        "surface-variant": "#353535",
        "tertiary-fixed-dim": "#c7c6c6",
        "on-tertiary": "#303031",
        "primary-fixed-dim": "#c6c6c7",
        "on-secondary-container": "#b7b5b4",
        "on-primary-fixed-variant": "#454747",
        tertiary: "#ffffff",
        "on-background": "#e2e2e2",
        "on-secondary": "#313030",
        surface: "#131313",
        secondary: "#c8c6c5",
        "outline-variant": "#444748",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        gutter: "16px",
        base: "8px",
        "container-padding": "24px",
        "section-gap": "48px",
      },
      fontFamily: {
        "headline-lg": ["Plus Jakarta Sans"],
        "body-md": ["Inter"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "title-md": ["Inter"],
        "label-sm": ["Inter"],
        "display-lg": ["Plus Jakarta Sans"],
      },
      fontSize: {
        "headline-lg": [
          "32px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        "body-md": [
          "16px",
          { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" },
        ],
        "headline-lg-mobile": [
          "24px",
          { lineHeight: "1.2", fontWeight: "700" },
        ],
        "title-md": [
          "18px",
          {
            lineHeight: "1.5",
            letterSpacing: "0.05em",
            fontWeight: "600",
          },
        ],
        "label-sm": [
          "12px",
          {
            lineHeight: "1.4",
            letterSpacing: "0.1em",
            fontWeight: "500",
          },
        ],
        "display-lg": [
          "48px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "800",
          },
        ],
      },
    },
  },
};

// --- LÓGICA DO CARROSSEL DE IMAGENS ---
document.addEventListener("DOMContentLoaded", () => {
  // ATENÇÃO: Liste aqui os nomes dos arquivos exatos que estão na sua pasta "assets"
  const images = [
    "assets/DSC00075-125.jpg",
    "assets/DSC00135-150.jpg",
    "assets/DSC00151-160.jpg",
    "assets/DSC00197-187.jpg",
    "assets/DSC00212-190.jpg",
    "assets/DSC00227-202.jpg",
    "assets/DSC09875-4.jpg",
  ];

  // Pré-carrega as imagens e avisa se alguma estiver com nome errado
  images.forEach((src) => {
    const preloadImg = new Image();
    preloadImg.onerror = () => {
      console.error(
        `ERRO: A imagem "${src}" não foi encontrada! Verifique o nome exato e a extensão (.jpg, .jpeg, .JPG, etc) na pasta assets.`,
      );
    };
    preloadImg.src = src;
  });

  const carouselImg = document.getElementById("carousel-image");
  let currentIndex = 0;

  if (carouselImg && images.length > 0) {
    // Alterna a imagem a cada 4 segundos
    setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      const isReturning = nextIndex === 0;

      if (isReturning) {
        // Volta para a primeira foto instantaneamente, sem piscar preto
        carouselImg.style.transitionDuration = "0ms";
        currentIndex = nextIndex;
        carouselImg.src = images[currentIndex];
        carouselImg.style.opacity = "1";
      } else {
        // Transição normal suave (500ms) para as outras fotos
        carouselImg.style.transitionDuration = "500ms";
        carouselImg.style.opacity = "0"; // Apaga
        setTimeout(() => {
          currentIndex = nextIndex;
          carouselImg.src = images[currentIndex];
          carouselImg.style.opacity = "1"; // Acende
        }, 500);
      }
    }, 4000);
  }
});
