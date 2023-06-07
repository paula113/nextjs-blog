import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <strong>Frontend Developer con 2 años de experiencia enfocada en Javascript, React.js, HTML5 y Css.</strong>
        <p>Soy una persona altamente adaptable, resiliente y autodidacta, capaz de enfrentar desafíos con determinación y encontrar soluciones creativas. Mi pasión por el aprendizaje constante me impulsa a mejorar continuamente y adquirir nuevas habilidades. Busco generar un impacto, asumiendo nuevos retos y superándolos con entusiasmo. Me enorgullece formar parte de un entorno que fomente el crecimiento y la innovación, y estoy comprometida con mi desarrollo profesional para contribuir al éxito de la organización.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}