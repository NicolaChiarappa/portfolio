import Head from "next/head";

import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
export async function getData(context) {
  const Token = process.env.API_TOKEN;
  const res = await fetch(
    "https://panel.nicolach.com/api/articolos?filters[slug][$eq]=" +
      context.slug +
      "&populate=*",
    {
      method: "GET",
      headers: {
        "Authorization": Token,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data, status: ${res.status}`);
  }

  return res.json();
}

const Page = async ({ params }) => {
  const data = await getData(params);

  const attributes = data.data[0].attributes;

  return (
    <>
      <Head>
        <title>{attributes.Titolo}</title>
      </Head>

      <div className='lg:px-60 px-5 mt-10'>
        <ArticleComponent article={attributes} />
      </div>
    </>
  );
};

const ArticleComponent = ({ article }) => {
  if (!article) return <p>{"Caricamento dell'articolo..."}</p>;

  const { Titolo, Data, Autore, Cover, Contenuto } = article;

  const ImageUrl =
    Cover.data != null
      ? "url(https://panel.nicolach.com" +
        Cover.data.attributes.formats.medium.url +
        ")"
      : "url(https://placehold.co/600x400?text=IN+ARRIVO...)";

  return (
    <>
      <div
        className='hero min-h-[50vh]'
        style={{
          backgroundImage: ImageUrl,
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content  text-neutral-content items-end  h-full'>
          <div className='s '>
            <h1 className='mb-5 lg:text-5xl text-4xl font-bold'>{Titolo}</h1>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <Markdown
          components={{
            code(props) {
              return <CodeComponent codice={props.children}></CodeComponent>;
            },
          }}
        >
          {Contenuto.Testo}
        </Markdown>
      </div>
    </>
  );
};

export default Page;

const CodeComponent = ({ codice }) => {
  return (
    <>
      <SyntaxHighlighter style={vscDarkPlus} language='jsx' className='w-2/3'>
        {codice}
      </SyntaxHighlighter>
    </>
  );
};
