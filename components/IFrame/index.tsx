'use client'
import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import IframeResizer from 'iframe-resizer-react';
import useClickOutside from "@/utils/useClickOutside";
import { useRouter } from "next/navigation";

type Props = {
    iframeUrl?: string;
    iframeStyles?: CSSProperties;
    iframeHeight?: number;
    shadowWidth?: number;
    btnText?: string;
}

const IFrame: FC<Props> = ({
    iframeUrl,
    iframeStyles,
    iframeHeight,
    shadowWidth,
    btnText
}) => {

    const { back } = useRouter();
    const ref = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const routeBackHandler = () => {
        back()
    }

    useClickOutside(ref, routeBackHandler);

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoading(false);
        }, 3 * 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="flex items-center sm:block fixed h-screen w-full top-0 bottom-0 left-0 right-0 m-auto bg-slate-400 z-50">
            {
                loading && <div className={`animate-pulse absolute w-full ${shadowWidth ? `max-w-[${shadowWidth}px]` : ''} h-[100vh]`}>
                    <div className="w-full h-full bg-[#e8e7e8] dark:bg-subsectionBackground">
                    </div>
                </div>
            }
            <div className="cursor-pointer" ref={ref}>
                {
                    !loading
                        ? <button
                            onClick={routeBackHandler}
                            type="button"
                            className="left-0 right-0 w-[200px] top-8 sm:top-0 absolute sm:relative block mt-6 sm:mt-1 mx-auto z-50 mb-4 cursor-pointer rounded-lg bg-gradient-to-r from-primary to-teal-400 p-2 text-[14px] text-white transition-all hover:opacity-80 sm:mb-0 sm:w-auto"
                        >
                            {btnText}
                        </button>
                        : null
                }

                <IframeResizer
                    heightCalculationMethod="lowestElement"
                    inPageLinks
                    log
                    src={iframeUrl}
                    scrolling={true}
                    className="min-h-[76vh] sm:min-h-[90vh]"
                    style={{
                        minWidth: '96%',
                        overflow: 'auto',
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: 'auto',
                        // marginTop: '60px',
                        borderRadius: '12px',
                        ...iframeStyles
                    }}
                />
           </div>
        </div>
    );
}

export default IFrame;