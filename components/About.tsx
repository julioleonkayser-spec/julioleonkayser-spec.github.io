import Image from 'next/image';

export default function About() {
  return (
    <section id="about-me" className="flex flex-col items-center justify-center min-h-screen py-16">
      <div className="container grid md:grid-cols-3 gap-8 items-center">
        <div className="avatar px-12 md:px-0">
          <Image
            className="rounded-full object-cover aspect-square w-full"
            alt="My avatar"
            src="/images/julio.jpeg"
            width={596}
            height={596}
            priority
          />
        </div>
        <div className="introduction md:col-span-2">
          <h2 className="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-4 text-lg font-bold uppercase">
            About me
          </h2>
          <p className="text-lg leading-loose">
            Hi, my name is <strong>Julio León</strong>. I&apos;m an{' '}
            <strong>AI Engineer &amp; Product Builder</strong> with experience building{' '}
            <strong>agentic AI pipelines</strong>, API integrations and{' '}
            <strong>production RAG systems</strong>, grounded in Business Analytics &amp; Artificial
            Intelligence (American University). I&apos;m the founder of <strong>ReadyCase OS</strong> and{' '}
            <strong>ReWarm</strong>. My range runs from agent engineering to{' '}
            <strong>frontend and product design</strong>: ReadyCase OS ships a full production UI used
            daily by three accounting firms, and this site itself is a third-party design system I
            extracted and rebuilt with section-by-section visual QA. Trilingual (English, Spanish,
            German), with experience in multicultural teams across the US, Ecuador and Germany.
          </p>
        </div>
      </div>
    </section>
  );
}
