import React from "react";

function PostProps(props) {
  const [count, setCount] = React.useState("");
  const [counts, setCounts] = React.useState("heart-outline");
  const [icons, setIcons] = React.useState("hidden");
  function color() {
    if (counts === "heart-outline") {
      setCount("heart");
      setCounts("heart");
      setIcons("react");
    } else {
      setCount("");
      setCounts("heart-outline");
      setIcons("hidden");
    }
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.src} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img onClick={() => color()} src={props.src2} />
        <ion-icon id={icons} name="heart"></ion-icon>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              id={count}
              onClick={() => color()}
              name={counts}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.src3} />
          <div class="texto">
            Curtido por <strong>{props.texto1}</strong> e{" "}
            <strong>{props.texto2}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryProps(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.src} />
      </div>
      <div class="usuario">{props.usuario}</div>
    </div>
  );
}

export default function Feed() {
  const story = [
    { usuario: "9gag", src: "assets/img/9gag.png" },
    { usuario: "meowed", src: "assets/img/meowed.png" },
    { usuario: "barked", src: "assets/img/barked.png" },
    {
      usuario: "nathanwpylestrangeplanet",
      src: "assets/img/nathanwpylestrangeplanet.png"
    },
    { usuario: "wawawicomics", src: "assets/img/wawawiwacomicsa.png" },
    { usuario: "respondeai", src: "assets/img/respondeai.png" },
    { usuario: "filomoderna", src: "assets/img/filomoderna.png" },
    { usuario: "memeriagourmet", src: "assets/img/memeriagourmet.png" }
  ];

  const post = [
    {
      usuario: "meowed",
      src: "./assets/img/meowed.png",
      src2: "assets/img/cat.png",
      src3: "assets/img/respondeai (1).png",
      texto1: "respondeai",
      texto2: "outras 101.523 pessoas"
    },
    {
      usuario: "barked",
      src: "assets/img/barked (1).png",
      src2: "assets/img/dog.png",
      src3: "assets/img/adorableanimals.png",
      texto1: "adorable_animals",
      texto2: "outras 99.159 pessoas"
    }
  ];

  return (
    <div class="esquerda">
      <div class="stories">
        {story.map((index) => (
          <StoryProps src={index.src} usuario={index.usuario} />
        ))}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
      <div class="Props">
        {post.map((index) => (
          <PostProps
            src={index.src}
            usuario={index.usuario}
            src2={index.src2}
            src3={index.src3}
            texto1={index.texto1}
            texto2={index.texto2}
          />
        ))}
      </div>
    </div>
  );
}
