import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { links } from "@/constants/links";

function Links() {
  return (
    <div className="py-20">
      <MaxWidthWrapper className="flex items-center gap-6 overflow-x-scroll">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[240px] h-[160px] bg-[#121212] rounded-xl p-5 flex flex-col justify-between border border-neutral-900 hover:border-neutral-800 transition-colors snap-start group"
            >
              {/* Card Title */}
              <h3 className="text-white text-[14px] font-medium leading-snug line-clamp-3">
                {link.title}
              </h3>

              {/* Card Footer */}
              <div>
                {/* Divider Line */}
                <hr className="border-neutral-800 mb-4" />

                <div className="flex items-center justify-between">
                  <span className="text-neutral-500 text-xs truncate max-w-[170px] group-hover:text-neutral-400 transition-colors">
                    {link.url}
                  </span>

                  {/* Arrow Icon */}
                  <svg
                    className="w-4 h-4 text-neutral-500 group-hover:text-white transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Links;
