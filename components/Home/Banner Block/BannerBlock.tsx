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

    const widthWithUnit = `${width}${widthDimensionUnit}`;
    const heightWithUnit = `${height}${heightDimensionUnit}`;
    const minHeightWithUnit = `${minHeight}${minHeightDimensionUnit}`;

    return (
        <section
            id="BannerBlock"
            className="pt-28 pb-10 dark:bg-dark-background min-h-[calc(100vh-320px)]"
        >
            <Link href={bannerUrl}>
                <div className="w-full h-[30vh] sm:h-[50vh] md:h-[70vh] lg:h-[100vh]">
                    <div
                        className={`relative mx-auto w-[${widthWithUnit}] h-[${heightWithUnit}] min-h-[${minHeightWithUnit}]`}
                        style={{
                            ...(widthDimensionUnit === '%' ? { width: `${widthWithUnit}` } : {}),
                            ...(heightDimensionUnit === '%' ? { height: `${heightWithUnit}` } : {}),
                            ...(minHeight === '%' ? { minHeight: `${minHeightWithUnit}` } : {}),
                        }}
                    >
                        <DatoImage
                            data={bannerImage.responsiveImage}
                            className={`w-[${widthWithUnit}] h-[${heightWithUnit}] min-h-[${minHeightWithUnit}]`}
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