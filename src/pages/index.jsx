import Head from "next/head";
import { Poppins } from "next/font/google";
import Home from "@/components/Home";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal"],
});

export default function App({ dataAllSections, dataPreliminaries, dataAllCategories, dataAllLangs, dataAllSettings, dataAllWords }) {
  const imagePath = '/favicon.ico'
  return (
    <>
      <Head>
        <title>{dataAllSettings?.site_name}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf-token" content="JdDvDc4LUJomFM4T7QE0hFlH9CeKOHDXMoxV3wer" />
        <meta name="title" content="" />
        <link rel="icon" type="image/ico" href={`/${imagePath}`} />
        <meta name="theme-color" content="#cd5827" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content="New muslim guide" />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="New muslim guide" />
        <link rel="apple-touch-icon" href={`https://new-muslim-guide.vercel.app/${imagePath}`} />
        <link rel="apple-touch-startup-image" href={`https://new-muslim-guide.vercel.app/${imagePath}`} />
        <meta name="author" content="New muslim guide" />
        <meta name="description" content={'Simple Rules and Important Islamic Guidelines for New Muslims in all Aspects of Life'} />
        <link rel="canonical" href={`https://new-muslim-guide.vercel.app/`} />
        <meta name="msapplication-TileColor" content="#cd5827" />
        <meta name="msapplication-TileImage" content={`https://new-muslim-guide.vercel.app/${imagePath}`} />
        <meta name="msapplication-square70x70logo" content={imagePath} />
        <meta name="msapplication-square150x150logo" content={imagePath} />
        <meta name="msapplication-wide310x150logo" content={imagePath} />
        <meta name="msapplication-square310x310logo" content={imagePath} />
        <link rel="apple-touch-icon-precomposed" href={imagePath} />
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="New muslim guide" />
        <meta property="og:locale" content="ar" />
        <meta property="og:locale:alternate" content="ar" />
        <meta property="og:url" content={`https://new-muslim-guide.vercel.app/`} />
        <meta property="og:title" content="New muslim guide" />
        <meta property="og:description" content={'Simple Rules and Important Islamic Guidelines for New Muslims in all Aspects of Life'} />
        <meta property="og:image" content={`https://new-muslim-guide.vercel.app/${imagePath}`} />
        <meta itemProp="name" content="New muslim guide" />
        <meta itemProp="author" content="New muslim guide" />
        <meta itemProp="image" content={`https://new-muslim-guide.vercel.app/${imagePath}`} />
        <meta itemProp="description" content={'Simple Rules and Important Islamic Guidelines for New Muslims in all Aspects of Life'} />
        <meta name="twitter:image" content={`https://new-muslim-guide.vercel.app/${imagePath}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content="New muslim guide" />
        <meta name="twitter:image:src" content={`https://new-muslim-guide.vercel.app/${imagePath}`} />
        <meta name="twitter:description" content={'Simple Rules and Important Islamic Guidelines for New Muslims in all Aspects of Life'} />
      </Head>

      <main className={` ${poppins.className}`}>
        <Home dataAllSettings={dataAllSettings} dataAllSections={dataAllSections} dataPreliminaries={dataPreliminaries} dataAllCategories={dataAllCategories} dataAllLangs={dataAllLangs} dataAllWords={dataAllWords} />

      </main>




    </>
  );
}




export async function getStaticProps({ locale }) {
  const apiDomain = "https://newmuslimguide.rmz.one/api";

  const resPreliminaries = await fetch(`${apiDomain}/preliminaries`, {
    headers: {
      'locale': locale
    }
  })
  const dataPreliminaries = await resPreliminaries.json();

  const resAllSections = await fetch(`${apiDomain}/categories`, {
    headers: {
      'locale': locale
    }
  })
  const dataAllSections = await resAllSections.json();


  const resAllLangs = await fetch(`${apiDomain}/languages`, {
    headers: {
      'locale': locale
    }
  })
  const dataAllLangs = await resAllLangs.json();

  const resAllSettings = await fetch(`${apiDomain}/items`, {
    headers: {
      'locale': locale
    }
  })
  const dataAllSettings = await resAllSettings.json();


  const resDataAllCategories = await fetch(`${apiDomain}/categories`, {
    method: 'GET',
    headers: {
      "locale": locale,
    },

  });
  const dataAllCategories = await resDataAllCategories.json()

  const resAllWords = await fetch(`${apiDomain}/get-trans`, {
    method: 'GET',
    headers: {
      "locale": locale,
    },

  });
  const dataAllWords = await resAllWords.json()


  return {
    props: {
      dataAllSections: dataAllSections?.data,
      dataPreliminaries: dataPreliminaries?.data[0],
      dataAllLangs: dataAllLangs?.data,
      dataAllSettings: dataAllSettings?.data,
      dataAllCategories: dataAllCategories.data || [],
      dataAllWords
    },
    revalidate: 10
  };
}
