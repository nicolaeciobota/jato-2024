import { FC } from "react";

type Props = {
    iframeUrl: string
}

const IFrame: FC<Props> = ({ iframeUrl }) => {
    return (
        <iframe
            className="mx-auto my-2 max-w-[1075px] w-full border-0 h-[80vh] shadow-none"
            src={iframeUrl}>
        </iframe>
    );
}

export default IFrame;