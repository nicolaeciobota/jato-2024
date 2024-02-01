'use client'
import { EmptyHeroSectionRecord } from '@/graphql/generated';
import useWindowSize from '@/utils/useWindowSize';
import { Image as DatoImage } from 'react-datocms';

type Props = {
    emptyHeroSectionRecord: EmptyHeroSectionRecord
    slug: string;
};

const Index = ({ emptyHeroSectionRecord, slug }: Props) => {

    const { bannerImageDesktop, bannerImageTablet, bannerImageMobile } = emptyHeroSectionRecord;
    const { width: windowWidth } = useWindowSize();

    const getImage = () => {
        if (windowWidth > 1024)
            return bannerImageDesktop.responsiveImage;
        else if (windowWidth > 640)
            return bannerImageTablet.responsiveImage;
        return bannerImageMobile.responsiveImage;
    }

    return (
        <>
            <DatoImage
                objectFit="cover"
                layout="responsive"
                objectPosition="center"
                className='h-auto w-full mt-20'
                data={getImage() as any}
            />
        </>
    );
};

export default Index;
