import {
  AIEngineering,
  BeyondEngineering,
  Contact,
  EngineeringFoundations,
  EngineeringProfile,
  GitHub,
  Hero,
  ProfessionalExperience,
  SelectedEngineeringWork,
  TechnicalStack,
} from './components/portfolio/PortfolioSections'

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:outline-2 focus:outline-offset-2 focus:outline-signal"
        href="#main-content"
      >
        Skip to main content
      </a>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a
            className="text-sm font-semibold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            href="#hero"
          >
            Jothiprakash Thangaraj
          </a>
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-5 text-xs font-semibold text-muted sm:gap-8 sm:text-sm">
              <li>
                <a
                  className="transition-colors hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                  href="#selected-engineering-work"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <EngineeringProfile />
        <SelectedEngineeringWork />
        <AIEngineering />
        <EngineeringFoundations />
        <ProfessionalExperience />
        <TechnicalStack />
        <BeyondEngineering />
        <GitHub />
        <Contact />
      </main>

      <footer className="border-t border-line px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>Jothiprakash Thangaraj</span>
          <span>Software Engineer</span>
        </div>
      </footer>
    </div>
  )
}

export default App
