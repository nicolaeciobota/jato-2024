'use client'
import LoadingSkeleton from "@/components/Common/LoadingSkeleton";
import { IframeBlockRecord } from "@/graphql/generated";
import IframeResizer from "iframe-resizer-react";
import { useState } from "react";

type Props = {
    iframeBlock: IframeBlockRecord;
};

const IframeBlock = ({
    iframeBlock
}: Props) => {

    const [loading, setLoading] = useState<boolean>(true);

    const handleIframeLoad = () => {
        setLoading(false);
    };

    const {
        iframeUrl,
        width,
        height,
        minHeight,
        minHeightDimensionUnit,
        heightDimensionUnit,
        widthDimensionUnit
    } = iframeBlock;

    return (
        <section
            id="IframeBlock"
            className="dark:bg-dark-background min-h-[calc(100vh-320px)]"
        >
            <div className="container relative">
                <LoadingSkeleton
                    loading={loading}
                    height={height}
                    heightUnit={heightDimensionUnit}
                />
                <IframeResizer
                    onLoad={handleIframeLoad}
                    src={iframeUrl}
                    width={`${width}${widthDimensionUnit}`}
                    height={`${height}${heightDimensionUnit}`}
                    style={{
                        width: `${width}${widthDimensionUnit}`,
                        height: `${height}${heightDimensionUnit}`,
                        minHeight: `${minHeight}${minHeightDimensionUnit}`
                    }}
                ></IframeResizer>
            </div>
        </section>
    );
}

export default IframeBlock;