import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

const Page = () => {
  const apiToken = process.env.API_TOKEN;
  const router = useRouter();
  const { id } = router.query; // Ottiene l'id dalla query
  const fetchData = async () => {
    const response = await fetch(
      "https://panel.nicolach.com/api/articolos/2?populate=*",
      {
        method: "GET",
        headers: {
          "Authorization": { apiToken },

          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // Gestisci i dati come necessario
  };

  fetchData().then(() => console.log("Dati caricati"));

  return (
    <>
      <Head>
        <title>Titolo articolo</title>
      </Head>
      <div>ciao</div>
    </>
  );
};

const ArticleComponent = ({ article }) => {
  if (!article) return <p>{"Caricamento dell'articolo..."}</p>;
  console.log(article);

  const { attributes } = article;
  const { Titolo, Data, Autore, Cover, Paragrafo } = attributes;

  return (
    <div>
      <h1>{Titolo}</h1>
      <p>
        <strong>Scritto da:</strong> {Autore}
      </p>
      <p>
        <strong>Data:</strong> {new Date(Data).toLocaleDateString()}
      </p>
      {Cover.data && (
        <div>
          <Image
            src={Cover.data.attributes.formats.large.url}
            alt={Cover.data.attributes.name || "Immagine di copertina"}
            width={Cover.data.attributes.formats.large.width}
            height={Cover.data.attributes.formats.large.height}
          />
        </div>
      )}
      {Paragrafo.map((par) => (
        <div key={par.id}>
          <h2>{par.Sottotitolo}</h2>
          {par.Testo.map((p, index) => (
            <p key={index}>
              {p.children.map((child, index) => (
                <span key={index}>{child.text}</span>
              ))}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Page;
