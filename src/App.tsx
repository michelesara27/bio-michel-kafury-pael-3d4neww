const BG = "https://i.imgur.com/p2WN3sn.jpeg";

type LinkItem = {
  title: string;
  url: string;
  image: string;
  border: string;
};

const links: LinkItem[] = [
  {
    title: "Desenvolvimento",
    url: "https://imgur.com/AqfnWZx",
    image: "https://i.imgur.com/AqfnWZx.png",
    border: "#FF2A2A",
  },
  {
    title: "Site",
    url: "http://www.kafuryprogramador.com.br",
    image: "https://i.imgur.com/7GqJaDD.png",
    border: "#FFD700",
  },
  {
    title: "Youtube",
    url: "https://www.youtube.com/@SaraMichele-f6d",
    image: "https://i.imgur.com/PposeDi.png",
    border: "#00BFFF",
  },
  {
    title: "Contato",
    url: "https://wa.link/aagrbn",
    image: "https://i.imgur.com/RupnkSt.png",
    border: "#00BFFF",
  },
];

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Fundo com imagem, blur e escala sutil */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 scale-110 bg-cover bg-center bg-fixed blur-[12px]"
        style={{ backgroundImage: `url(${BG})` }}
      />

      {/* Overlay escuro */}
      <div aria-hidden="true" className="fixed inset-0 -z-10 bg-black/85" />

      {/* Conteúdo centralizado */}
      <div className="mx-auto flex min-h-screen w-full max-w-[400px] flex-col items-center px-4 py-10">
        <h1 className="text-center font-mono text-4xl font-black tracking-tight text-foreground drop-shadow-lg">
          BIO DO KAFURY
        </h1>

        <section className="mt-8 w-full rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
          <ul className="flex flex-col gap-4">
            {links.map((link, index) => (
              <li key={link.title}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                  className={[
                    "block overflow-hidden rounded-2xl border-2 shadow-lg transition-transform duration-300 hover:scale-105",
                    index === 0 ? "animate-pulse" : "",
                  ].join(" ")}
                  style={{ borderColor: link.border }}
                >
                  <img
                    src={link.image}
                    alt={link.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-auto w-full object-cover"
                  />
                  <span className="sr-only">{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-auto pt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} @kafury — Todos os direitos reservados
        </footer>
      </div>
    </main>
  );
}
