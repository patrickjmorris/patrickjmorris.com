import Head from 'next/head';
import Image from 'next/image'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import { useState } from 'react';

export default function Home() {
  const [isProfessional, setIsProfessional] = useState(false);
  
  return (
    <>
      <Head>
        <title>Patrick Morris | Data Leader & Analytics Professional</title>
        <meta name="description" content="Patrick Morris is a data analytics leader with over 12 years of experience at companies like Disney and The New York Times. Specializing in sports streaming analytics and data strategy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patrickjmorris.com/" />
        <meta property="og:title" content="Patrick Morris | Data Leader & Analytics Professional" />
        <meta property="og:description" content="Patrick Morris is a data analytics leader with over 12 years of experience at companies like Disney and The New York Times." />
        <meta property="og:image" content="https://patrickjmorris.com/images/patrick_morris_headshot.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://patrickjmorris.com/" />
        <meta property="twitter:title" content="Patrick Morris | Data Leader & Analytics Professional" />
        <meta property="twitter:description" content="Patrick Morris is a data analytics leader with over 12 years of experience at companies like Disney and The New York Times." />
        <meta property="twitter:image" content="https://patrickjmorris.com/images/patrick_morris_headshot.jpg" />
        
        {/* Keywords */}
        <meta name="keywords" content="Patrick Morris, Data Analytics, ESPN+, Disney, New York Times, Sports Analytics, Data Strategy, Product Management" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://patrickjmorris.com/" />
        
        {/* Structured Data / JSON-LD */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Patrick Morris",
              "url": "https://patrickjmorris.com",
              "image": "https://patrickjmorris.com/images/patrick_morris_headshot.jpg",
              "jobTitle": "Data Analytics Leader",
              "worksFor": {
                "@type": "Organization",
                "name": "Previously at Disney"
              },
              "description": "Data analytics leader with over 12 years of experience at companies like Disney and The New York Times.",
              "sameAs": [
                "https://github.com/patrickjmorris",
                "https://linkedin.com/in/patrickjohnmorris"
              ]
            })
          }}
        />
      </Head>
      
      {/* --- Restore Main Element --- */}
      <main className="min-h-screen relative bg-[#F3EFE0] text-[#0F2C4D] rounded-xl mx-4 my-4 overflow-hidden">
        <div className="relative px-4 py-16 mx-auto max-w-3xl md:py-20 md:px-8">
          {/* --- Start Commented Out Content --- */}
           
            {/* --- Header Section --- */}
            <div className="mb-16 text-center">
              <div className="relative mx-auto mb-6 w-32 h-32">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#0F2C4D]">
                  <Image
                    src="/images/patrick_morris_headshot.jpg"
                    alt="Patrick Morris"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>

              <h1 className="text-4xl font-serif font-normal tracking-wide mb-2 text-[#0F2C4D]">
                Patrick Morris
              </h1>
              
              <p className="text-base text-[#4A4A4A] font-sans font-light tracking-wide mb-6 italic">
                Data Leader & Dad
              </p>

              <div className="flex gap-4 justify-center">
                <a 
                  href="https://github.com/patrickjmorris" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 text-sm font-sans bg-[#0F2C4D] text-[#F3EFE0] hover:bg-opacity-90 transition-colors uppercase tracking-wider font-medium rounded-md"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/patrickjohnmorris" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 text-sm font-sans bg-[#8B0000] text-[#F3EFE0] hover:bg-opacity-90 transition-colors uppercase tracking-wider font-medium rounded-md"
                >
                  LinkedIn
                </a>
              </div>
            </div>

          {/* --- Bio Section (Now Uncommented) --- */}
          
            <div className="relative pt-12">
              <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-[#0F2C4D]/20 to-transparent mx-auto mb-12" />
              <button
                type="button"
                className="mb-10 block mx-auto px-5 py-2 text-sm font-sans border border-[#0F2C4D] text-[#0F2C4D] hover:bg-[#0F2C4D] hover:text-[#F3EFE0] transition-colors uppercase tracking-wider font-medium rounded-md"
                onClick={() => setIsProfessional(!isProfessional)}
              >
                {isProfessional ? 'View Casual Bio' : 'View Professional Bio'}
              </button>

              <AnimatePresence mode="wait">
                {!isProfessional ? (
                  // --- Casual Bio --- 
                  <motion.div 
                    key="casual"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Inner div handles className */}
                    <div 
                      className="prose max-w-none space-y-10
                        prose-headings:font-serif prose-headings:text-[#0F2C4D] prose-headings:font-normal prose-headings:tracking-wide
                        prose-p:font-sans prose-p:text-[#4A4A4A] prose-p:leading-[2] prose-p:tracking-wide prose-p:font-light
                        prose-a:font-sans prose-a:text-[#8B0000] prose-a:no-underline hover:prose-a:text-[#0F2C4D] prose-a:transition-colors
                        prose-p:my-8 prose-h1:mb-10
                      "
                    >
                      <h1>Hey there, I'm Patrick!</h1>

                      <p>Currently spending lots of time with my two amazing boys by while figuring out what's comes next for work. I currently call Carroll Gardens, Brooklyn home, where you'll find me chasing my kids around the playground or hanging out in a local cafe or pizza place.</p>

                      <p>For the past 5 years, I've been working at Disney as Director of Sports Streaming Analytics for ESPN+, helping figure out what sports fans actually want to watch. Before that, I spent 7 years at The New York Times turning their experimentation and testing programs from "we should probably test that" to "let's test absolutely everything."</p>

                      <p>In my previous life (pre-kids), I was pretty serious about racing sailboats and would run ridiculous distances for fun. These days, I'm more likely to be lisening to the Frozen soundtrack or explaining why the Mets will definitely win it all this year.</p>

                      <p>I studied Economics and Philosophy at Boston College, which means I can overthink both numbers AND big life questions. When I'm not analyzing data or parenting, I'm probably suffering through another NY sports season as a devoted Rangers, Mets, Giants, and Knicks fan.</p>

                      <p>Want to chat data strategy, digital media, or debate the best playground in Brooklyn? Drop me a line at <a href="mailto:patrickjohnmorris@gmail.com">patrickjohnmorris@gmail.com</a>!</p>
                    </div>
                  </motion.div> 
                ) : (
                  // --- Professional Bio --- 
                  <motion.div 
                    key="professional"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Inner div handles className */}
                    <div
                      className="prose max-w-none space-y-10
                        prose-headings:font-serif prose-headings:text-[#0F2C4D] prose-headings:font-normal prose-headings:tracking-wide
                        prose-h2:text-[#8B0000] prose-h2:mt-12 prose-h2:mb-6
                        prose-p:font-sans prose-p:text-[#4A4A4A] prose-p:leading-[2] prose-p:tracking-wide prose-p:font-light
                        prose-a:font-sans prose-a:text-[#8B0000] prose-a:no-underline hover:prose-a:text-[#0F2C4D] prose-a:transition-colors
                        prose-p:my-8 prose-h1:mb-10
                      "
                    >
                      <h1>Patrick Morris</h1>

                      <h2>Professional Background</h2>

                      <p>Patrick Morris is an accomplished analytics leader and product owner with over 12 years of experience driving data strategy and digital transformation at premier media companies.</p>

                      <p>Most recently, as Director of Sports Streaming Analytics at The Walt Disney Company (2020-2025), Patrick led a team of 20+ data professionals supporting ESPN+, a 25-million subscriber streaming service crucial to Disney's profitability. His expertise in subscription analytics and retention performance informed multi-Billion dollar sports rights deals with major leagues including UFC, NHL, and La Liga. Patrick's innovative approach to data systems eliminated inefficiencies and provided executive-level intelligence that shaped strategic decision-making.</p>

                      <p>Prior to Disney, Patrick spent seven years at The New York Times (2013-2020), where he rose from Front-End Developer to Lead Product Manager of the company's Experimentation Platform. In this role, he transformed testing analysis from limited scope to enterprise-wide implementation, developing scalable data products and knowledge resources that empowered teams across the organization.</p>

                      <p>Patrick began his career as a web developer and communications professional, bringing a uniquely balanced perspective that combines technical expertise with strategic communication skills.</p>

                      <h2>Personal Life</h2>

                      <p>When not diving into data, Patrick enjoys life in Carroll Gardens, Brooklyn with his wife and two young sons. Before embracing fatherhood, he was an avid sailboat racer and distance runner—passions he hopes to revisit when his boys are older.</p>

                      <p>A proud Boston College graduate with degrees in Economics and Philosophy, Patrick remains a dedicated New York sports fan, faithfully following the Rangers, Mets, Giants, and Knicks through their victories and defeats.</p>

                      <h2>Contact</h2>

                      <p>
                        Email: <a href="mailto:patrickjohnmorris@gmail.com">patrickjohnmorris@gmail.com</a><br />
                        Phone: <a href="tel:+15169935873">(516) 993-5873</a>
                      </p>
                    </div>
                  </motion.div> 
                )}
              </AnimatePresence>
            </div>
          
           {/* --- End Commented Out Content (Comment marker removed) --- */}
        </div>
      </main>
    </>
  );
}
