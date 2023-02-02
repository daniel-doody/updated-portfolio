import CTA from '@/components/home/CTA';
import Hero from '@/components/home/Hero';
import Page from '@/components/utility/Page';
import Projects from '@/components/home/Projects';
import Skills from '@/components/home/Skills';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <Page
      currentPage='Home'
      meta={{
        desc: 'I have a passion for building & deploying highly scalable applications.',
      }}
    >
      <Hero />
      <div className='mt-20 space-y-32'>
        <Projects />
        <Skills />
        <Testimonials />
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      <CTA />
    </Page>
  );
}
