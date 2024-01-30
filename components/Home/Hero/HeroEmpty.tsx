import { FileField } from '@/graphql/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Image as DatoImage } from 'react-datocms';

type Props = {
  image: Maybe<FileField> | undefined;
};

const HeroEmpty = ({
  image,
}: Props) => {
  return (
   <>
      {image?.responsiveImage && (
        <div
          className="relative w-full h-0"
          style={{
            paddingTop: `${(image?.responsiveImage.height / image?.responsiveImage.width) * 100}%`,
          }}
        >
          <DatoImage
            objectFit="cover"
            layout="fill"
            className="absolute top-0 left-0"
            data={image?.responsiveImage}
          />
        </div>
      )}
    </>
  );
};

export default HeroEmpty;
