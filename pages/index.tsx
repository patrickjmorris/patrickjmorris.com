import Head from 'next/head';
import Image from 'next/image';
import { KeyboardEvent, useState } from 'react';
import { personJsonLd, siteMeta, toAbsoluteUrl } from '../lib/site-meta';

const highlights = [
  {
    value: '12+ years',
    label: 'Analytics and product leadership',
    detail: 'Across Disney, ESPN+, and The New York Times'
  },
  {
    value: '25M+',
    label: 'Streaming subscribers supported',
    detail: 'Measurement and retention insights for ESPN+'
  },
  {
    value: '20+ people',
    label: 'Team leadership at scale',
    detail: 'Built and led a multidisciplinary analytics team'
  }
];

const collaborationAreas = [
  'Subscription analytics and retention strategy for digital products',
  'Experimentation program design and measurement frameworks',
  'Executive dashboards and decision support for leadership teams',
  'Analytics team design, hiring, and operating models'
];

const caseStudies = [
  {
    title: 'ESPN+ Retention Intelligence',
    impact: 'Improved decision quality for rights and content strategy',
    summary:
      'Built subscriber behavior frameworks that informed prioritization across programming, packaging, and retention investments.',
    scope: 'Disney / ESPN+, Director of Sports Streaming Analytics'
  },
  {
    title: 'Analytics Org Design at Scale',
    impact: 'Led and operated a 20+ person analytics team',
    summary:
      'Defined team structure, operating cadence, and executive reporting patterns to deliver faster, more consistent business insight.',
    scope: 'Disney / ESPN+, 2020-2025'
  },
  {
    title: 'Experimentation Platform Expansion',
    impact: 'Scaled testing from niche to enterprise-wide usage',
    summary:
      'At The New York Times, partnered across product and engineering to mature experimentation tooling, analysis standards, and adoption playbooks.',
    scope: 'The New York Times, 2013-2020'
  }
];

const availabilityDetails = [
  {
    label: 'Location',
    value: 'Brooklyn, New York (Eastern Time)'
  },
  {
    label: 'Open to',
    value: 'Full-time analytics leadership roles and select advisory work'
  },
  {
    label: 'Best fit',
    value: 'Subscription growth, retention, experimentation, and analytics org design'
  }
];

const casualBio = [
  'Hey there, I\'m Patrick. I\'m currently spending lots of time with my two amazing boys while figuring out what\'s next professionally.',
  'I call Carroll Gardens, Brooklyn home, where you\'ll usually find me chasing my kids around a playground or posted up at a local cafe or pizza spot.',
  'For the past five years, I worked at Disney as Director of Sports Streaming Analytics for ESPN+, helping teams understand what sports fans value and how to build a better product around it.',
  'Before Disney, I spent seven years at The New York Times scaling experimentation from a niche practice into an enterprise capability.',
  'In a previous chapter, I raced sailboats and ran very long distances for fun. These days, I\'m more likely to be listening to the Frozen soundtrack and explaining why the Mets will win it all this year.',
  'I studied Economics and Philosophy at Boston College, so overthinking both numbers and life questions comes naturally. If you want to talk data strategy, digital media, or the best playgrounds in Brooklyn, reach out.'
];

const professionalSections = [
  {
    title: 'Professional Background',
    paragraphs: [
      'Patrick Morris is an analytics leader and product owner with 12+ years of experience driving data strategy and digital transformation at major media companies.',
      'As Director of Sports Streaming Analytics at The Walt Disney Company (2020-2025), he led a team of 20+ data professionals supporting ESPN+, a 25M+ subscriber streaming service central to Disney\'s direct-to-consumer strategy. His work in subscription analytics and retention measurement informed multi-billion dollar sports rights and product investment decisions.',
      'At The New York Times (2013-2020), Patrick advanced from front-end developer to Lead Product Manager for the Experimentation Platform, expanding testing from isolated teams to enterprise-wide adoption through better systems, tooling, and education.'
    ]
  },
  {
    title: 'Personal Context',
    paragraphs: [
      'Patrick lives in Carroll Gardens, Brooklyn with his wife and two sons. He still follows the Rangers, Mets, Giants, and Knicks with stubborn optimism.',
      'He holds degrees in Economics and Philosophy from Boston College.'
    ]
  }
];

export default function Home() {
  const [isProfessional, setIsProfessional] = useState(false);
  const activeTab = isProfessional ? 'professional' : 'casual';

  const commonButtonClasses =
    'rounded-md px-6 py-2.5 text-sm font-sans uppercase tracking-wider font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0F2C4D]';

  const setActiveTab = (tab: 'casual' | 'professional') => {
    setIsProfessional(tab === 'professional');
  };

  const focusTabButton = (tab: 'casual' | 'professional') => {
    const tabId = tab === 'casual' ? 'tab-casual' : 'tab-professional';
    const button = document.getElementById(tabId) as HTMLButtonElement | null;
    button?.focus();
  };

  const handleBioTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentTab: 'casual' | 'professional'
  ) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const nextTab = currentTab === 'casual' ? 'professional' : 'casual';
      setActiveTab(nextTab);
      focusTabButton(nextTab);
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      setActiveTab('casual');
      focusTabButton('casual');
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      setActiveTab('professional');
      focusTabButton('professional');
    }
  };

  return (
    <>
      <Head>
        <title>{siteMeta.title}</title>
        <meta name="description" content={siteMeta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteMeta.name} />
        <meta property="og:url" content={toAbsoluteUrl(siteMeta.path)} />
        <meta property="og:title" content={siteMeta.title} />
        <meta property="og:description" content={siteMeta.shortDescription} />
        <meta property="og:image" content={toAbsoluteUrl(siteMeta.socialImage)} />
        <meta property="og:image:type" content={siteMeta.socialImageType} />
        <meta property="og:image:width" content={`${siteMeta.socialImageWidth}`} />
        <meta property="og:image:height" content={`${siteMeta.socialImageHeight}`} />
        <meta property="og:image:alt" content={`${siteMeta.name} social card`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content={siteMeta.twitterHandle} />
        <meta property="twitter:url" content={toAbsoluteUrl(siteMeta.path)} />
        <meta property="twitter:title" content={siteMeta.title} />
        <meta property="twitter:description" content={siteMeta.shortDescription} />
        <meta property="twitter:image" content={toAbsoluteUrl(siteMeta.socialImage)} />
        <meta name="twitter:image:alt" content={`${siteMeta.name} social card`} />
        <meta name="keywords" content={siteMeta.keywords} />
        <link rel="canonical" href={toAbsoluteUrl(siteMeta.path)} />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd)
          }}
        />
      </Head>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#0F2C4D] focus:px-4 focus:py-2 focus:text-[#F3EFE0]"
      >
        Skip to content
      </a>

      <main
        id="main-content"
        className="relative mx-4 my-4 min-h-screen overflow-hidden rounded-xl bg-[#F3EFE0] text-[#0F2C4D]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,0,0,0.07),transparent_45%)]" />

        <div className="relative mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-20">
          <header className="mb-14 text-center">
            <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-[#0F2C4D]">
              <Image
                src={siteMeta.headshotImage}
                alt="Patrick Morris"
                width={128}
                height={128}
                className="h-full w-full object-cover"
                priority
                sizes="128px"
              />
            </div>

            <h1 className="mb-2 font-serif text-4xl font-normal tracking-wide text-[#0F2C4D]">Patrick Morris</h1>
            <p className="mx-auto mb-6 max-w-2xl font-sans text-base italic tracking-wide text-[#4A4A4A]">
              Data leader focused on analytics strategy, streaming growth, and experimentation at scale.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={siteMeta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${commonButtonClasses} bg-[#0F2C4D] text-[#F3EFE0] hover:bg-[#153a66]`}
              >
                GitHub
              </a>
              <a
                href={siteMeta.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${commonButtonClasses} bg-[#8B0000] text-[#F3EFE0] hover:bg-[#6f0000]`}
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${siteMeta.email}`}
                className={`${commonButtonClasses} border border-[#0F2C4D] text-[#0F2C4D] hover:bg-[#0F2C4D] hover:text-[#F3EFE0]`}
              >
                Email Patrick
              </a>
            </div>
          </header>

          <section aria-labelledby="highlights-heading" className="mb-14">
            <h2 id="highlights-heading" className="mb-6 text-center font-serif text-2xl tracking-wide">
              Snapshot
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map((item) => (
                <article key={item.label} className="rounded-lg border border-[#0F2C4D]/15 bg-white/60 p-5">
                  <p className="mb-1 font-serif text-2xl text-[#0F2C4D]">{item.value}</p>
                  <p className="mb-2 font-sans text-sm font-medium uppercase tracking-wider text-[#0F2C4D]">{item.label}</p>
                  <p className="font-sans text-sm leading-relaxed text-[#4A4A4A]">{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="bio-heading" className="mb-14">
            <div className="mx-auto mb-10 h-px w-1/3 bg-gradient-to-r from-transparent via-[#0F2C4D]/20 to-transparent" />
            <h2 id="bio-heading" className="mb-6 text-center font-serif text-2xl tracking-wide">
              About
            </h2>

            <div
              className="mx-auto mb-8 flex w-fit rounded-md border border-[#0F2C4D] p-1"
              role="tablist"
              aria-label="Select biography style"
              aria-orientation="horizontal"
            >
              <button
                id="tab-casual"
                role="tab"
                type="button"
                aria-selected={!isProfessional}
                aria-controls="panel-casual"
                tabIndex={activeTab === 'casual' ? 0 : -1}
                className={`rounded px-4 py-2 text-sm font-sans uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2C4D] ${
                  !isProfessional ? 'bg-[#0F2C4D] text-[#F3EFE0]' : 'text-[#0F2C4D] hover:bg-[#0F2C4D]/10'
                }`}
                onClick={() => setActiveTab('casual')}
                onKeyDown={(event) => handleBioTabKeyDown(event, 'casual')}
              >
                Casual Bio
              </button>
              <button
                id="tab-professional"
                role="tab"
                type="button"
                aria-selected={isProfessional}
                aria-controls="panel-professional"
                tabIndex={activeTab === 'professional' ? 0 : -1}
                className={`rounded px-4 py-2 text-sm font-sans uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2C4D] ${
                  isProfessional ? 'bg-[#0F2C4D] text-[#F3EFE0]' : 'text-[#0F2C4D] hover:bg-[#0F2C4D]/10'
                }`}
                onClick={() => setActiveTab('professional')}
                onKeyDown={(event) => handleBioTabKeyDown(event, 'professional')}
              >
                Professional Bio
              </button>
            </div>

            {!isProfessional ? (
              <div
                id="panel-casual"
                role="tabpanel"
                aria-labelledby="tab-casual"
                tabIndex={0}
                className="prose prose-p:my-7 prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-wide prose-p:font-sans prose-p:font-light prose-p:leading-[2] prose-p:tracking-wide prose-p:text-[#4A4A4A] prose-a:font-sans prose-a:text-[#8B0000] prose-a:no-underline hover:prose-a:text-[#0F2C4D] max-w-none"
              >
                <h3>Hey there, I&apos;m Patrick.</h3>
                {casualBio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  Reach me at <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>.
                </p>
              </div>
            ) : (
              <div
                id="panel-professional"
                role="tabpanel"
                aria-labelledby="tab-professional"
                tabIndex={0}
                className="prose prose-p:my-7 prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-wide prose-h3:text-[#8B0000] prose-h3:mt-10 prose-h3:mb-4 prose-p:font-sans prose-p:font-light prose-p:leading-[2] prose-p:tracking-wide prose-p:text-[#4A4A4A] prose-a:font-sans prose-a:text-[#8B0000] prose-a:no-underline hover:prose-a:text-[#0F2C4D] max-w-none"
              >
                <h3>Patrick Morris</h3>
                {professionalSections.map((section) => (
                  <section key={section.title}>
                    <h3>{section.title}</h3>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
                <p>
                  Email: <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
                  <br />
                  Phone: <a href={`tel:${siteMeta.phone}`}>(516) 993-5873</a>
                </p>
              </div>
            )}
          </section>

          <section aria-labelledby="collaboration-heading" className="mb-14 rounded-lg border border-[#0F2C4D]/15 bg-white/60 p-6 md:p-8">
            <h2 id="collaboration-heading" className="mb-4 font-serif text-2xl tracking-wide">
              What I Can Help With
            </h2>
            <ul className="list-disc space-y-3 pl-6 font-sans text-[#4A4A4A] marker:text-[#8B0000]">
              {collaborationAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="outcomes-heading" className="mb-14">
            <h2 id="outcomes-heading" className="mb-5 font-serif text-2xl tracking-wide">
              Selected Outcomes
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {caseStudies.map((item) => (
                <article key={item.title} className="rounded-lg border border-[#0F2C4D]/15 bg-white/60 p-5">
                  <p className="mb-2 font-serif text-xl text-[#0F2C4D]">{item.title}</p>
                  <p className="mb-2 font-sans text-sm font-medium uppercase tracking-wider text-[#8B0000]">{item.impact}</p>
                  <p className="mb-3 font-sans text-sm leading-relaxed text-[#4A4A4A]">{item.summary}</p>
                  <p className="font-sans text-xs uppercase tracking-wider text-[#0F2C4D]/70">{item.scope}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="availability-heading" className="mb-14 rounded-lg border border-[#0F2C4D]/15 bg-white/60 p-6 md:p-8">
            <h2 id="availability-heading" className="mb-4 font-serif text-2xl tracking-wide">
              Availability
            </h2>
            <dl className="grid gap-4 md:grid-cols-3">
              {availabilityDetails.map((item) => (
                <div key={item.label}>
                  <dt className="mb-1 font-sans text-xs uppercase tracking-wider text-[#0F2C4D]/70">{item.label}</dt>
                  <dd className="font-sans text-sm leading-relaxed text-[#4A4A4A]">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            aria-labelledby="contact-heading"
            className="rounded-lg border border-[#0F2C4D] bg-[#0F2C4D] px-6 py-8 text-[#F3EFE0] md:px-8"
          >
            <h2 id="contact-heading" className="mb-3 font-serif text-2xl tracking-wide">
              Let&apos;s Talk
            </h2>
            <p className="mb-5 max-w-2xl font-sans leading-relaxed text-[#F3EFE0]/90">
              If you&apos;re hiring for analytics leadership, building a data function, or need a thought partner on streaming and
              experimentation, I&apos;d love to connect.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${siteMeta.email}`}
                className="rounded-md bg-[#F3EFE0] px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-[#0F2C4D] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3EFE0]"
              >
                Send Email
              </a>
              <a
                href={siteMeta.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-[#F3EFE0] px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-[#F3EFE0] transition-colors hover:bg-[#F3EFE0] hover:text-[#0F2C4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3EFE0]"
              >
                Message on LinkedIn
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
