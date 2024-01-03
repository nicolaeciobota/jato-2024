'use client'
import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from "react";
import IframeResizer from 'iframe-resizer-react';
import useClickOutside from "@/utils/useClickOutside";

type Props = {
    iframeUrl?: string;
    iframeStyles?: CSSProperties;
    iframeHeight?: number;
    shadowWidth?: number;
    button?: ReactNode | null;
    defaultOpen?: boolean;
}

const IFrame: FC<Props> = ({
    iframeUrl,
    iframeStyles,
    iframeHeight,
    shadowWidth,
    button = null,
    defaultOpen = false
}) => {

    const ref = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    useClickOutside(ref, () => {
        if (isOpen) {
            setIsOpen(false);
        }
    });

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoading(false);
        }, 3 * 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            <div className="h-full">
                {!isOpen
                    ? <button
                        type="button"
                        onClick={toggleDrawer}
                        className="mx-0 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 p-2.5 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        {
                            button
                                ? button
                                : null
                        }
                    </button>
                    : null}

                <div ref={ref} className={`fixed bottom-0 left-0 z-40 w-full p-4 transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                    <div className="bg-white p-4">
                        <div className={`relative w-full ${shadowWidth ? `max-w-[${shadowWidth}px]` : ''} ${iframeHeight === 80 ? 'h-[80vh]' : 'h-[100vh]'} mx-auto`}>
                            {
                                loading && <div className={`animate-pulse absolute w-full ${shadowWidth ? `max-w-[${shadowWidth}px]` : ''} mb-10 h-[${iframeHeight}vh]`}>
                                    <div className="w-full h-full bg-[#e8e7e8] dark:bg-subsectionBackground rounded-2xl">
                                    </div>
                                </div>
                            }
                            <IframeResizer
                                heightCalculationMethod="lowestElement"
                                inPageLinks
                                log
                                src={iframeUrl}
                                scrolling={true}
                                style={{
                                    minHeight: `${iframeHeight}vh`,
                                    minWidth: '100%',
                                    ...iframeStyles
                                }}
                            />
                        </div>
                    </div>
                    {isOpen
                        ? <button
                            onClick={toggleDrawer}
                            className="block rounded-lg md:px-3 px-1 py-[6px] ring-primary focus:ring-2 absolute top-[-28px] end-3.5"
                        >
                            <span
                                className={`relative lg:my-1.5 my-1 block h-0.5 lg:w-[30px] w-5 bg-black transition-all duration-300 dark:bg-white ${isOpen ? " top-[5px] rotate-45" : " "
                                    }`}
                            />
                            <span
                                className={`relative lg:my-1.5 my-1 block h-0.5 lg:w-[30px] w-5 bg-black transition-all duration-300 dark:bg-white ${isOpen ? "opacity-0 " : " "
                                    }`}
                            />
                            <span
                                className={`relative lg:my-1.5 my-1 block h-0.5 lg:w-[30px] w-5 bg-black transition-all duration-300 dark:bg-white ${isOpen ? " top-[-8px] -rotate-45" : " "
                                    }`}
                            />
                        </button>
                        : null}
                </div>
            </div>
        </div>
    );
}

export default IFrame;