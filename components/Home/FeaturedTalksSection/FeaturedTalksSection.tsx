import { SiteLocale, TalkRecord } from "@/graphql/generated";
import SingleTalk from "../../Agenda/SingleTalk";
import Link from "next/link";
import { ButtonRecord } from "@/graphql/generated";

type Props = {
  title?: string;
  subtitle?: string;
  selectedTalks: TalkRecord[];
  lng: SiteLocale;
  returnToAgenda?: ButtonRecord | null;
};

const FeaturedTalksSection = ({ title, subtitle, selectedTalks, lng, returnToAgenda }: Props) => {
  if (!selectedTalks || selectedTalks.length === 0) {
    return null;
  }

  return (
    <section className="mt-4 lg:py-[120px] md:py-24 py-20 dark:bg-dark-background min-h-[calc(100vh-280px)]">
      <div className="container">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {subtitle}
              </p>
            )}
            <div className="mt-6">
              <Link
                href={returnToAgenda?.url || `/${lng}/agenda`}
                className={`inline-block rounded bg-primary px-6 py-3 text-white font-bold hover:bg-opacity-80 transition${returnToAgenda?.primary === false ? ' bg-opacity-60' : ''}`}
                target={returnToAgenda?.url && returnToAgenda.url.startsWith('http') ? '_blank' : undefined}
                rel={returnToAgenda?.url && returnToAgenda.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {returnToAgenda?.label || "← Return to Agenda"}
              </Link>
            </div>
          </div>
        )}
        
        <div className="lg:-mx-4 flex h-full flex-wrap w-full justify-center pt-8">
          {selectedTalks.map((talk) => (
            <div
              key={talk.id}
              className="w-full sm:px-4 mb-10 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <SingleTalk talk={talk} locale={lng} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTalksSection; 