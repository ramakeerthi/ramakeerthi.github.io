import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import {profileData} from '../data/profileData';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const {role, about, technicalSkills, resources} = profileData;

  return (
    <Layout
      title={siteConfig.title}
      description="Full Stack Developer | SDE2 at Nike | Building scalable backend systems and distributed pipelines">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h2 className="hero__subtitle">{role}</h2>
        </div>
      </header>
      <main>
        <div className="container" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <section className="margin-bottom--md">
                <Heading as="h2">About</Heading>
                {about.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </section>

              <section className="margin-bottom--md">
                <Heading as="h2">Technical Skills</Heading>
                <div className="row">
                  <div className="col col--6">
                    <Heading as="h3" className="margin-bottom--sm">Backend</Heading>
                    <ul>
                      {technicalSkills.backend.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col col--6">
                    <Heading as="h3" className="margin-bottom--sm">Frontend</Heading>
                    <ul>
                      {technicalSkills.frontend.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="row margin-top--md">
                  <div className="col col--6">
                    <Heading as="h3" className="margin-bottom--sm">Cloud & DevOps</Heading>
                    <ul>
                      {technicalSkills.cloudDevOps.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col col--6">
                    <Heading as="h3" className="margin-bottom--sm">Tools & Others</Heading>
                    <ul>
                      {technicalSkills.toolsOthers.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="margin-bottom--md">
                <Heading as="h2">Resources</Heading>
                <p>{resources.description}</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
