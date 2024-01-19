import { BannerBlockRecord } from "@/graphql/generated";
import Link from "next/link";
import { Image as DatoImage } from "react-datocms";

type Props = {
    bannerBlock: BannerBlockRecord;
};

const BannerBlock = ({
    bannerBlock
}: Props) => {

    const {
        width,
        height,
        minHeight,
        minHeightDimensionUnit,
        heightDimensionUnit,
        widthDimensionUnit,
        bannerImage,
        bannerUrl,
        objectFit,
        layout
    } = bannerBlock;

    return (
        <section
            id="BannerBlock"
            className="pt-28 pb-16 dark:bg-dark-background min-h-[calc(100vh-320px)]"
        >
            <Link href={bannerUrl}>
                <div className="w-full h-full">
                    <div
                        className={`relative mx-auto w-[${width}${widthDimensionUnit}] h-[${height}${heightDimensionUnit}] min-h-[${minHeight}${minHeightDimensionUnit}]`}
                        style={{
                            ...(widthDimensionUnit === '%' ? { width: `${width}${widthDimensionUnit}` } : {}),
                            ...(heightDimensionUnit === '%' ? { height: `${height}${heightDimensionUnit}` } : {}),
                            ...(minHeight === '%' ? { minHeight: `${minHeight}${minHeightDimensionUnit}` } : {}),
                        }}
                    >
                        <DatoImage
                            data={bannerImage.responsiveImage}
                            className={`w-full h-full object-${objectFit}`}
                            layout={layout as any}
                            objectFit={objectFit as any}
                            objectPosition="50% 50%"
                        />
                    </div>
                </div>
            </Link>
        </section>
    );
}

export default BannerBlock;