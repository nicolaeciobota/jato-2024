import { FileField } from '@/graphql/generated';
import { Maybe } from 'graphql/jsutils/Maybe';

type Props = {
  image: Maybe<FileField> | undefined;
};

const HeroEmpty = ({
  image,
}: Props) => {
  return (
    <div
      className="mt-20 w-full bg-cover bg-center object-cover"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('${image?.responsiveImage?.src}')`,
        height: image?.responsiveImage?.height,
        width: '100%',
      }}
    >
    </div>
  );
};

export default HeroEmpty;
