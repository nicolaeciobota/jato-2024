const TagAwardButton = ({
  tag_award,
  lng,
  slug,
}: {
  tag_award: string;
  lng: string;
  slug: string;
}) => {
  return (
    <a
      href={`/${lng}/posts/tag/${slug}`}
      className="mb-3 mr-3 inline-flex items-center justify-center rounded-md bg-primary bg-opacity-10 px-4 py-2 text-body-color duration-300 hover:bg-opacity-100 hover:text-white"
    >
      {tag_award}
    </a>
  );
};

export default TagAwardButton;
