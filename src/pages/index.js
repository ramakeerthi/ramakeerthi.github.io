import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Personal profile, DSA notes, and blog (coming soon)">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p>
            This is a simple profile homepage. The{' '}
            <strong>Tutorial</strong> tab will host structured DSA notes, and a{' '}
            <strong>Blog</strong> section will be added later.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              View DSA notes (placeholder)
            </Link>
          </div>
        </div>
      </header>
      <main>
        {/* Add any additional profile content here later */}
      </main>
    </Layout>
  );
}
