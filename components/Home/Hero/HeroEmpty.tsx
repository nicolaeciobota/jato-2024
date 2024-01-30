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
        <DatoImage
          objectFit="cover"
          layout="responsive"
          objectPosition="50% 50%" // Center position for left and right cropping
          className='h-auto w-full mt-20'
          data={image?.responsiveImage}
        />
      )}
    </>
  );
};

export default HeroEmpty;
