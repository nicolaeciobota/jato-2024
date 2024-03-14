'use client'
import { IframeBlockRecord } from "@/graphql/generated";
import useWindowSize from "@/utils/useWindowSize";
import IframeResizer from "iframe-resizer-react";

type Props = {
    iframeBlock: IframeBlockRecord;
};

const IframeBlock = ({
    iframeBlock
}: Props) => {

    const { width : windowWidth } = useWindowSize();

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
            className="dark:bg-dark-background min-h-[calc(100vh-280px)]"
        >
            <div className={`container relative flex justify-${align}`}>
                <IframeResizer
                    src={iframeUrl}
                    width={`${windowWidth < 768 ? '100' : width}${widthDimensionUnit}`}
                    height={`${height}${heightDimensionUnit}`}
                    allow={camera}
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
