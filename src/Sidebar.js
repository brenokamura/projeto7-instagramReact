function SidebarProps(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.src} />
        <div class="texto">
          <div class="nome">{props.name}</div>
          <div class="razao">{props.purpose}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

function Sugestions(props) {
  return (
    <div class="usuario">
      <img src="assets/img/catanacomics.png" />
      <div class="texto">
        <strong>{props.strong}</strong>
        {props.text}
      </div>
    </div>
  );
}

export default function Sidebar() {
  const sugestionheader = [{ strong: "catanacomics", text: "Catana" }];
  const sugestionbottom = [
    {
      name: "bad.vibes.memes",
      src: "assets/img/badvibesmemes.png",
      purpose: "Segue você"
    },
    {
      name: "chibirdart",
      src: "assets/img/chibirdart.png",
      purpose: "Segue você"
    },
    {
      name: "razoesparaacreditar",
      src: "assets/img/razoesparaacreditar.svg",
      purpose: "Novo no Instagram"
    },
    {
      name: "adorable_animals",
      src: "assets/img/adorableanimals.png",
      purpose: "Segue você"
    },
    {
      name: "smallcutecats",
      src: "assets/img/smallcutecats.png",
      purpose: "Segue você"
    }
  ];

  return (
    <div class="sidebar">
      {sugestionheader.map((index) => (
        <Sugestions strong={index.strong} texto={index.text} />
      ))}

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugestionbottom.map((index) => (
          <SidebarProps
            src={index.src}
            name={index.name}
            purpose={index.purpose}
          />
        ))}
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
