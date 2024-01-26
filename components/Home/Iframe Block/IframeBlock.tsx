'use client'
// import LoadingSkeleton from "@/components/Common/LoadingSkeleton";
import { IframeBlockRecord } from "@/graphql/generated";
import useWindowSize from "@/utils/useWindowSize";
import IframeResizer from "iframe-resizer-react";
// import { useState } from "react";

type Props = {
    iframeBlock: IframeBlockRecord;
};

const IframeBlock = ({
    iframeBlock
}: Props) => {

    const { width : windowWidth } = useWindowSize();
    // const [loading, setLoading] = useState<boolean>(true);

    // const handleIframeLoad = () => {
    //     setLoading(false);
    // };

    const {
        iframeUrl,
        width,
        height,
        minHeight,
        minHeightDimensionUnit,
        heightDimensionUnit,
        widthDimensionUnit,
        align
    } = iframeBlock;

    return (
        <section
            id="IframeBlock"
            className="dark:bg-dark-background min-h-[calc(100vh-320px)]"
        >
            <div className={`container relative flex justify-${align}`}>
                {/* <LoadingSkeleton
                    loading={loading}
                    height={height}
                    heightUnit={heightDimensionUnit}
                /> */}
                <IframeResizer
                    // onLoad={handleIframeLoad}
                    src={iframeUrl}
                    width={`${windowWidth < 768 ? '100' : width}${widthDimensionUnit}`}
                    height={`${height}${heightDimensionUnit}`}
                    style={{
                        width: `${windowWidth < 768 ? '100' :width}${widthDimensionUnit}`,
                        height: `${height}${heightDimensionUnit}`,
                        minHeight: `${minHeight}${minHeightDimensionUnit}`
                    }}
                ></IframeResizer>
            </div>
        </section>
    );
}

export default IframeBlock;