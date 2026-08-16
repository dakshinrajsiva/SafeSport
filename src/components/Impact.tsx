'use client';

const STATS = [
  {
    number: "40-50%",
    text: "of athletes globally have experienced some form of harassment or abuse during their sporting career.",
    source: "IOC Consensus Statement on Harassment and Abuse in Sport, 2016",
  },
  {
    number: "1 in 3",
    text: "female athletes in India have experienced sexual abuse, harassment, or inappropriate behaviour by a male coach.",
    source: "Johal & Pooja, International Journal of Physical Education, Sports and Health, 2016",
  },
  {
    number: "81%",
    text: "of children surveyed reported facing verbal or emotional abuse from teachers.",
    source: "NCPCR via International Journal of Law, Social Sciences and Humanities (IJLSSS), 2025",
  },
  {
    prefix: "~",
    number: "10%",
    text: "of abuse cases are ever reported in India.",
    source: "National Crime Records Bureau (NCRB), Government of India",
  },
  {
    number: "53%",
    text: "of children reported abuse by a school teacher or relative.",
    source: "National Crime Records Bureau (NCRB), Government of India",
  },
];

export default function Impact() {
  return (
    <section id="impact-section" className="py-32 bg-white px-4 relative overflow-hidden" aria-labelledby="impact-heading">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mb-24">
          <p className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.3em] mb-6 text-xs md:text-sm" aria-hidden="true">
            The Cost of Inaction
          </p>
          <h2 id="impact-heading" className="text-6xl md:text-9xl font-league mb-8 tracking-tight text-[#1A1A1A] uppercase leading-[0.8]">
            Statistics <br /> That Matter
          </h2>
          <div className="w-24 h-2 bg-[#004AAD] mb-8" aria-hidden="true"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-medium leading-relaxed">
            Hard-hitting data that underscores the urgent need for institutional safeguarding in sport and education.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
          role="list"
        >
          {STATS.map((stat, index) => (
            <div
              key={index}
              role="listitem"
              className="p-8 md:p-10 flex flex-col justify-center text-center cursor-default rounded-[2rem] relative overflow-hidden border border-transparent bg-[#004AAD] text-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <span className="font-league font-bold leading-none mb-4 block text-5xl md:text-7xl">
                {/* League Gothic sets "~" high and full size; scale it down and drop it onto the numeral's midline */}
                {'prefix' in stat && (
                  <>
                    <span className="sr-only">Approximately </span>
                    <span className="inline-block text-[0.5em] align-middle relative top-[0.08em] mr-[0.04em]" aria-hidden="true">
                      {stat.prefix}
                    </span>
                  </>
                )}
                {stat.number}
              </span>

              <p className="font-montserrat font-medium leading-relaxed text-base md:text-lg">
                {stat.text}
              </p>

              <cite className="block mt-6 text-[10px] md:text-xs font-montserrat text-white/40 not-italic leading-snug">
                - {stat.source}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
