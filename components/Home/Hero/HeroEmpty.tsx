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
        <div className='relative h-0 overflow-hidden aspect-ratio'>
          <DatoImage
            objectFit="cover"
            layout="fill"
            className='object-cover'
            data={image?.responsiveImage}
          />
        </div>
      )}
    </>
  );
};

export default HeroEmpty;
