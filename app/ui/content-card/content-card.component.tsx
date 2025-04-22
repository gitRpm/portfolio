import UpRightArrow from "../arrow/up-right-arrow.component";
import Pill from "../pill/pill.component";

type ContentCardProps = {
  title: string;
  subtitle: string;
  description: string;
  meta: string;
  attributes: (string | null | undefined)[];
  url: string;
  ariaLabel: string;
};

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  subtitle,
  description,
  meta,
  attributes = [],
  url,
  ariaLabel,
}) => {
  return (
    <div className="group relative pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/3 lg:group-hover:shadow-[inset_-.5px_-.5px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="flex flex-col lg:flex-row-reverse justify-between w-full">
      <span className="mb-2"><i>{meta}</i></span>
        <span>
          <h3>{title}</h3>
          <a className="font-medium text-[var(--color-white)] hover:text-[var(--color-mint-400)] focus-visible:text-[var(--color-mint-400)] group/link text-base"
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={ariaLabel}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span className="inline-block font-light font-(family-name:--font-roboto) text-base mt-2">
              {subtitle}
              <UpRightArrow />
            </span>
          </a>
        </span>
      </div>
      <p className="mt-6 text-sm leading-7">
        {description}
      </p>
      <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
        {attributes.map((attribute) => (
          attribute && (
            <li key={attribute} className="mr-1.5 mt-2">
              <Pill>{attribute}</Pill>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default ContentCard;
