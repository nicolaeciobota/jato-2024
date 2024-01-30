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
          objectFit="lg: cover"
          layout="responsive"
          objectPosition="center"
          className='h-auto w-full mt-20'
         
          sizes={`100vw, (min-width: 1024px) ${(image?.responsiveImage.width /
            image?.responsiveImage.height) *
            100
            }vh`}
        />
      )}
    </>
  );
};

export default HeroEmpty;
