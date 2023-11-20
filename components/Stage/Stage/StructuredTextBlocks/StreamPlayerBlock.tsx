import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type Params = {
  videoPlayer: string;
};

const StreamPlayerBlock = ({ videoPlayer }: Params) => {
  return (
    <section className="mt-8 rounded-xl bg-gray-50">
      <div className="p-8 md:p-8 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {videoPlayer}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default StreamPlayerBlock;
