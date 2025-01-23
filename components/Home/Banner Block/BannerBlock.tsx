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

    // Calculate inline style values
    const widthWithUnit = `${width}${widthDimensionUnit}`;
    const heightWithUnit = `${height}${heightDimensionUnit}`;
    const minHeightWithUnit = `${minHeight}${minHeightDimensionUnit}`;

    return (
        <section
            id="BannerBlock"
            className="dark:bg-dark-background min-h-[calc(100vh-280px)]"
        >
            <div className="container mx-auto">
                <Link href={bannerUrl}>
                    <div
                        className="relative overflow-hidden rounded-md shadow-md"
                        style={{
                            height: `35vh`, // Default height
                            minHeight: minHeightWithUnit,
                            width: widthWithUnit, // Dynamic width
                        }}
                    >
                        <DatoImage
                            data={bannerImage.responsiveImage}
                            layout={layout as any}
                            objectFit={objectFit as any}
                            objectPosition="50% 50%"
                            className="w-full h-full"
                        />
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default BannerBlock;
