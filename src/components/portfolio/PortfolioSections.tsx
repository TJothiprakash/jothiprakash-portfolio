import type { ReactNode } from 'react'

type SectionHeadingProps = {
  id: string
  number: string
  title: string
  className?: string
}

function SectionHeading({ id, number, title, className = '' }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.16em] text-signal">
        {number} <span aria-hidden="true">/</span> Portfolio
      </p>
      <h2
        id={id}
        className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl"
      >
        {title}
      </h2>
    </div>
  )
}

function SectionFrame({
  id,
  number,
  title,
  className = '',
  children,
}: SectionHeadingProps & { children: ReactNode }) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-b border-line px-6 py-14 sm:py-[4.5rem] ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id={headingId} number={number} title={title} />
        {children}
      </div>
    </section>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="border-b border-line px-6 py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-end lg:gap-16">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-signal sm:text-sm">
            Software Engineer
          </p>
          <h1
            id="hero-heading"
            className="mt-5 max-w-5xl text-[clamp(2.8rem,8.3vw,6.7rem)] font-semibold leading-[0.95] tracking-[-0.07em] text-ink"
          >
            Jothiprakash Thangaraj
          </h1>
          <p className="mt-7 max-w-3xl text-sm font-medium leading-6 text-ink sm:text-base sm:leading-7">
            Backend Systems <span aria-hidden="true">·</span> Distributed Systems{' '}
            <span aria-hidden="true">·</span> Machine Learning{' '}
            <span aria-hidden="true">·</span> AI
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            I build backend systems, distributed software, and practical AI/ML
            applications, with a strong focus on understanding how systems work
            from fundamentals to production.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#selected-engineering-work"
              className="inline-flex min-h-11 items-center justify-center gap-3 bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              Explore selected work
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href="/Jothiprakash_Thangaraj_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume (opens in a new tab)"
              className="inline-flex min-h-11 items-center justify-center border border-line px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-signal hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              Resume
            </a>
          </div>
        </div>

        <nav aria-label="Professional profiles" className="lg:pb-1">
          <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
            Find me online
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-3 text-sm font-semibold text-ink lg:flex-col lg:gap-0">
            <li className="lg:border-b lg:border-line lg:py-3">
              <a
                href="https://github.com/TJothiprakash"
                className="decoration-signal underline-offset-4 hover:text-signal hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
              >
                GitHub <span className="text-signal" aria-hidden="true">↗</span>
              </a>
            </li>
            <li className="lg:border-b lg:border-line lg:py-3">
              <a
                href="https://www.linkedin.com/in/jothiprakash-thangaraj-813583128/"
                className="decoration-signal underline-offset-4 hover:text-signal hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
              >
                LinkedIn <span className="text-signal" aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export function EngineeringProfile() {
  const headingId = 'engineering-profile-heading'
  return (
    <section
      id="engineering-profile"
      aria-labelledby={headingId}
      className="border-b border-line px-6 py-12 sm:py-14"
    >
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-10">
        <SectionHeading id={headingId} number="02" title="Engineering Profile" />
        <div className="max-w-2xl space-y-4 border-l-2 border-signal pl-5 sm:pl-7">
          <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
            I’m a software engineer interested in building and understanding
            systems from the fundamentals up. My work spans backend development,
            distributed systems, system design, machine learning, and AI
            applications.
          </p>
          <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
            I learn by building — implementing data structures and algorithms,
            exploring software design patterns, developing backend and
            distributed-system projects, and applying ML and AI techniques to
            practical applications.
          </p>
        </div>
      </div>
    </section>
  )
}

export function SelectedEngineeringWork() {
  const headingId = 'selected-engineering-work-heading'
  const projects = [
    {
      name: 'FileStore',
        description:
          'Distributed remote file server backend focused on building storage infrastructure and handling files beyond a simple local filesystem.',
      repositories: [
        { label: 'GitHub ↗', href: 'https://github.com/TJothiprakash/filestore' },
      ],
    },
    {
      name: 'StreamSpace',
        description:
          'A streaming-focused system composed of a backend, UI, and FFmpeg worker, exploring the components involved in serving and processing media.',
      repositories: [
        { label: 'Backend · GitHub ↗', href: 'https://github.com/TJothiprakash/streamspace-backend' },
        { label: 'UI · GitHub ↗', href: 'https://github.com/TJothiprakash/streamspace-ui' },
        { label: 'FFmpeg Worker · GitHub ↗', href: 'https://github.com/TJothiprakash/streamspace-ffmpeg_worker' },
      ],
    },
    {
      name: 'Idempotency Processing',
        description:
          'Backend engineering work exploring idempotent processing — designing operations so repeated requests can be handled safely.',
      repositories: [
        { label: 'GitHub ↗', href: 'https://github.com/TJothiprakash/idempotency-processing' },
      ],
    },
    {
      name: 'Redis Server Lite',
        description:
          'A lightweight Redis server implementation in Java, built to explore how an in-memory data server works from the inside.',
      repositories: [
        { label: 'GitHub ↗', href: 'https://github.com/TJothiprakash/redis_server_lite_java' },
      ],
    },
    {
      name: 'RAG MLOps',
        description:
          'An ML engineering project exploring retrieval-augmented generation together with the workflow needed to operationalize ML applications.',
      repositories: [
        { label: 'GitHub ↗', href: 'https://github.com/TJothiprakash/rag-mlops' },
      ],
    },
    {
      name: 'MiniGPT',
        description:
          'An implementation-oriented project exploring the fundamentals behind GPT-style language models.',
      repositories: [
        { label: 'GitHub ↗', href: 'https://github.com/TJothiprakash/minigpt' },
      ],
    },
  ]

  return (
    <section
      id="selected-engineering-work"
      aria-labelledby={headingId}
      className="border-b border-[#303436] bg-[#171a1b] px-6 py-14 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div>
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#e17a5e]">
            03 <span aria-hidden="true">/</span> Selected work
          </p>
          <h2
            id={headingId}
            className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl"
          >
            Selected Engineering Work
          </h2>
        </div>
        <ul className="mt-9 grid gap-x-12 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.name} className="border-t border-[#3a3e40] py-5">
              <article>
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {project.name}
                </h3>
                  <p className="mt-2 max-w-[38rem] text-[0.8125rem] leading-5 text-slate-300">
                    {project.description}
                  </p>
                <ul
                  aria-label={`${project.name} repositories`}
                    className="mt-3 flex flex-wrap gap-x-5 gap-y-2"
                >
                  {project.repositories.map((repository) => (
                    <li key={repository.href}>
                      <a
                        href={repository.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name}${project.repositories.length > 1 ? ` ${repository.label.split(' · ')[0]}` : ''} on GitHub (opens in a new tab)`}
                        className="text-sm font-medium text-[#f0a08a] underline decoration-[#754b40] underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0a08a]"
                      >
                        {repository.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function AIEngineering() {
  const projects = [
    {
      name: 'RAG MLOps',
      description:
        'An end-to-end RAG/ML engineering project focused on building practical retrieval-augmented AI workflows and thinking about how ML systems move toward production.',
      href: 'https://github.com/TJothiprakash/rag-mlops',
    },
    {
      name: 'MiniGPT',
      description:
        'A from-scratch exploration of GPT-style language modeling, focused on understanding the core ideas behind modern generative AI systems.',
      href: 'https://github.com/TJothiprakash/minigpt',
    },
    {
      name: 'Input Pipeline MLOps',
      description:
        'An ML ingestion pipeline project exploring how data moves through an ML workflow and how repeatable pipelines support production-oriented machine learning.',
      href: 'https://github.com/TJothiprakash/input-pipeline-mlops',
    },
    {
      name: 'Article Recommender',
      description:
        'An emotion-aware article recommendation project combining machine learning classification with RAG-based retrieval.',
      href: 'https://github.com/TJothiprakash/article-recommender',
    },
    {
      name: 'Legal Aid Agent',
      description:
        'An AI agent project exploring how LLM-based systems can be applied to practical assistance workflows.',
      href: 'https://github.com/TJothiprakash/legal-aid-agent',
    },
    {
      name: 'AI Voice Assistant',
      description:
        'A practical AI voice-assistant project exploring conversational interaction and voice-based AI applications.',
      href: 'https://github.com/TJothiprakash/ai-voice-assitant',
    },
  ]

  return (
    <SectionFrame
      id="ai-ml-engineering"
      number="04"
      title="AI / ML Engineering"
      className="bg-[#f0eee8]"
    >
        <div className="mt-7 border-t border-[#d7d2c7] pt-5">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-signal">
            Applied AI / ML projects
          </p>
          <ul className="mt-3 grid gap-x-10 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.name} className="border-t border-[#d7d2c7] py-5">
                <article>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-2 max-w-[38rem] text-[0.8125rem] leading-5 text-muted">
                    {project.description}
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} on GitHub (opens in a new tab)`}
                    className="mt-3 inline-block text-sm font-semibold text-signal underline decoration-[#c9a99f] underline-offset-4 hover:text-ink hover:decoration-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                  >
                    GitHub ↗
                  </a>
                </article>
              </li>
            ))}
          </ul>
        </div>
    </SectionFrame>
  )
}

export function EngineeringFoundations() {
  const headingId = 'engineering-foundations-heading'
  const foundations = [
    {
      name: 'DSA & Problem Solving',
      description:
        'Data structures, algorithms, complexity analysis, and interview-oriented problem solving, with extensive Java practice.',
      repositories: ['Striver_Sheet', 'DSA_practice', 'Practice-solid-chainsaw'],
    },
    {
      name: 'Java & Software Engineering',
      description:
        'Java, OOP, abstraction, programming principles, design patterns, API development, and backend engineering.',
      repositories: [
        'Important-Java-Concepts',
        'programming-principles',
        'Abstraction',
        'design-patterns-for-humans',
        'api_design',
      ],
    },
    {
      name: 'System Design & Distributed Systems',
      description:
        'Hands-on exploration of scalable systems, distributed patterns, caching, messaging, fault tolerance, storage, and backend architecture.',
      repositories: [
        'filestore',
        'redis_server_lite_java',
        'ratelimiter',
        'circuitbreaker',
        'bloomfilter',
        'cache_proxy',
        'urlshortener',
        'broadcast_server',
      ],
    },
    {
      name: 'DevOps & MLOps',
      description:
        'Practical work around ML pipelines, deployment, infrastructure, and operationalizing machine learning systems.',
      repositories: [
        'input-pipeline-mlops',
        'rag-mlops',
        'ml-deployment-exercise',
        'telco-churn-mlops',
      ],
    },
    {
      name: 'AI / ML Engineering',
      description:
        'Machine learning fundamentals, RAG systems, LLM experimentation, AI applications, and agent-oriented engineering.',
      repositories: [
        'minigpt',
        'rag-impl',
        'article-recommender',
        'legal-aid-agent',
        'gst-copilot-agent',
      ],
    },
  ]

  return (
    <section
      id="engineering-foundations"
      aria-labelledby={headingId}
      className="border-b border-line px-6 py-14 sm:py-[4.5rem]"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(13rem,0.7fr)_minmax(0,1.3fr)] md:gap-16">
        <SectionHeading id={headingId} number="05" title="Engineering Foundations" />
        <ul className="divide-y divide-line border-y border-line">
            {foundations.map((foundation) => (
            <li
                key={foundation.name}
                className="grid gap-2 py-4 sm:grid-cols-[minmax(9rem,0.55fr)_minmax(0,1fr)] sm:gap-5"
            >
                <h3 className="text-sm font-semibold text-ink">{foundation.name}</h3>
                <div>
                  <p className="text-sm leading-6 text-muted">{foundation.description}</p>
                  <ul
                    aria-label={`${foundation.name} GitHub repositories`}
                    className="mt-2 flex flex-wrap gap-x-4 gap-y-1"
                  >
                    {foundation.repositories.map((repository) => (
                      <li key={repository}>
                        <a
                          href={`https://github.com/TJothiprakash/${repository}`}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${repository} GitHub repository (opens in a new tab)`}
                          className="text-xs font-medium text-signal underline decoration-[#c9a99f] underline-offset-4 hover:text-ink hover:decoration-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                        >
                          {repository}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ProfessionalExperience() {
  const headingId = 'professional-experience-heading'
  return (
    <section
      id="professional-experience"
      aria-labelledby={headingId}
      className="border-b border-line bg-white px-6 py-14 sm:py-[4.5rem]"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(13rem,0.7fr)_minmax(0,1.3fr)] md:gap-16">
        <SectionHeading id={headingId} number="06" title="Professional Experience" />
          <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
            <li className="relative">
              <span
                className="absolute -left-[29px] top-1 h-2.5 w-2.5 bg-signal sm:-left-[37px]"
                aria-hidden="true"
              />
              <article>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-signal">
                  <time dateTime="2023-10">October 2023</time> –{' '}
                  <time dateTime="2024-05">May 2024</time>
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
                  Zoho Corporation
                </h3>
                <p className="mt-1 text-sm font-medium text-ink">Software Debug Engineer</p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                  Worked on software debugging and technical issue resolution,
                  investigating application and system-level problems, working
                  with databases and networking concepts, and supporting the
                  diagnosis and resolution of customer-facing technical issues.
                </p>
              </article>
            </li>
            <li className="relative">
              <span
                className="absolute -left-[29px] top-1 h-2.5 w-2.5 bg-signal sm:-left-[37px]"
                aria-hidden="true"
              />
              <article>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-signal">
                  <time dateTime="2018-11">November 2018</time> –{' '}
                  <time dateTime="2021-07">July 2021</time>
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
                  Madura Coats
                </h3>
                <p className="mt-1 text-sm font-medium text-ink">Manufacturing Executive</p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                  Worked in manufacturing operations, with responsibilities
                  involving production processes, operational coordination,
                  quality, and day-to-day manufacturing activities in an
                  industrial environment.
                </p>
              </article>
            </li>
          </ol>
      </div>
    </section>
  )
}

export function TechnicalStack() {
  const categories = [
    {
      name: 'Languages',
      technologies: ['Java', 'Python', 'SQL', 'JavaScript', 'TypeScript'],
    },
    {
      name: 'Backend & Frameworks',
      technologies: ['Spring Boot', 'WebFlux', 'FastAPI', 'REST APIs', 'WebSockets'],
    },
    {
      name: 'Data & Messaging',
      technologies: ['PostgreSQL', 'MySQL', 'Redis', 'Kafka', 'RabbitMQ'],
    },
    {
      name: 'AI / ML',
      technologies: [
        'PyTorch',
        'scikit-learn',
        'Pandas',
        'NumPy',
        'MLflow',
        'Hugging Face',
        'RAG',
        'LLMs',
      ],
    },
    {
      name: 'DevOps & Infrastructure',
      technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'Linux', 'Git'],
    },
  ]

  return (
    <SectionFrame
      id="technical-stack"
      number="07"
      title="Technical Stack"
      className="bg-[#f3f4f1]"
    >
        <dl className="mt-7 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.name} className="border-t border-line py-4">
              <dt className="text-sm font-semibold text-ink">{category.name}</dt>
              <dd className="mt-2">
                <ul
                  aria-label={`${category.name} technologies`}
                  className="flex flex-wrap gap-x-2 gap-y-1 text-sm leading-6 text-muted"
                >
                  {category.technologies.map((technology, index) => (
                    <li key={technology}>
                      {index > 0 && <span aria-hidden="true">· </span>}
                      {technology}
                    </li>
                  ))}
                </ul>
              </dd>
          </div>
        ))}
      </dl>
    </SectionFrame>
  )
}

export function BeyondEngineering() {
  const headingId = 'beyond-engineering-heading'
  return (
    <section
      id="beyond-engineering"
      aria-labelledby={headingId}
      className="border-b border-line px-6 py-12 sm:py-14"
    >
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-10">
        <SectionHeading id={headingId} number="08" title="Beyond Engineering" />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <h3 className="text-sm font-semibold text-ink">Cooking</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                I enjoy cooking and experimenting with recipes, learning through
                repeated practice and small improvements.
              </p>
            </li>
            <li>
              <h3 className="text-sm font-semibold text-ink">Baking</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                I have been practicing baking, especially cakes and bread, and
                experimenting with techniques, ratios, and presentation.
              </p>
            </li>
            <li>
              <h3 className="text-sm font-semibold text-ink">Reading</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                I enjoy reading books, particularly around technology, software
                engineering, machine learning, and learning new ideas.
              </p>
            </li>
          </ul>
      </div>
    </section>
  )
}

export function GitHub() {
  const repositoryGroups = [
    {
      name: 'Backend & Distributed Systems',
      repositories: [
        'filestore',
        'streamspace-backend',
        'redis_server_lite_java',
        'idempotency-processing',
      ],
    },
    {
      name: 'System Design & Engineering',
      repositories: ['ratelimiter', 'circuitbreaker', 'bloomfilter', 'cache_proxy'],
    },
    {
      name: 'AI / ML & MLOps',
      repositories: [
        'rag-mlops',
        'input-pipeline-mlops',
        'minigpt',
        'article-recommender',
      ],
    },
    {
      name: 'Foundations',
      repositories: ['Striver_Sheet', 'Important-Java-Concepts'],
    },
  ]

  return (
    <SectionFrame
      id="github"
      number="09"
      title="GitHub"
      className="bg-[#f3f4f1]"
    >
        <div className="mt-6 border-t border-line pt-5">
          <p className="max-w-3xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            My GitHub contains a broad collection of engineering work spanning
            backend systems, distributed systems, Java, data structures and
            algorithms, AI/ML, and MLOps. The repositories below are a small
            selection of the work represented across the portfolio.
          </p>
          <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {repositoryGroups.map((group) => (
              <div key={group.name}>
                <h3 className="text-sm font-semibold text-ink">{group.name}</h3>
                <ul
                  aria-label={`${group.name} repositories`}
                  className="mt-2 flex flex-wrap gap-x-4 gap-y-2"
                >
                  {group.repositories.map((repository) => (
                    <li key={repository}>
                      <a
                        href={`https://github.com/TJothiprakash/${repository}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-signal underline decoration-[#c9a99f] underline-offset-4 hover:text-ink hover:decoration-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                      >
                        {repository}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        <a
            href="https://github.com/TJothiprakash?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex min-h-11 items-center gap-3 bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        >
            View all repositories on GitHub ↗
        </a>
      </div>
    </SectionFrame>
  )
}

export function Contact() {
  const headingId = 'contact-heading'
  return (
    <section
      id="contact"
      aria-labelledby={headingId}
      className="bg-ink px-6 py-14 text-white sm:py-16"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1fr)_minmax(15rem,0.7fr)] md:items-end md:gap-16">
        <div>
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#e17a5e]">
            10 <span aria-hidden="true">/</span> Get in touch
          </p>
          <h2
            id={headingId}
            className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl"
          >
            Contact
          </h2>
            <p className="mt-4 text-base font-medium text-slate-300">
              Jothiprakash Thangaraj
            </p>
        </div>
          <address className="not-italic">
            <ul className="divide-y divide-[#343a3c] border-y border-[#343a3c]">
              <li className="grid gap-1 py-3 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-4">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Email
                </span>
                <a
                  href="mailto:jothiprakash888@gmail.com"
                  className="break-all text-sm text-white underline decoration-[#e17a5e] underline-offset-4 hover:text-[#f0a08a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0a08a]"
                >
                  jothiprakash888@gmail.com
                </a>
              </li>
              <li className="grid gap-1 py-3 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-4">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Phone
                </span>
                <a
                  href="tel:+919585578792"
                  className="text-sm text-white underline decoration-[#e17a5e] underline-offset-4 hover:text-[#f0a08a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0a08a]"
                >
                  +91 9585578792
                </a>
              </li>
              <li className="grid gap-1 py-3 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-4">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/919585578792"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white underline decoration-[#e17a5e] underline-offset-4 hover:text-[#f0a08a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0a08a]"
                >
                  Open WhatsApp ↗
                </a>
              </li>
              <li className="grid gap-1 py-3 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-4">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/jothiprakash-thangaraj-813583128/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white underline decoration-[#e17a5e] underline-offset-4 hover:text-[#f0a08a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0a08a]"
                >
                  View LinkedIn profile ↗
                </a>
              </li>
              <li className="grid gap-1 py-3 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-4">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  GitHub
                </span>
                <a
                  href="https://github.com/TJothiprakash"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white underline decoration-[#e17a5e] underline-offset-4 hover:text-[#f0a08a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0a08a]"
                >
                  View GitHub profile ↗
                </a>
              </li>
            </ul>
          </address>
      </div>
    </section>
  )
}
