import { primaryColor } from '@/app/i18n/settings';
import { JSXElementConstructor, ReactElement } from 'react';

type Props = {
  text:
    | (string | ReactElement<any, string | JSXElementConstructor<any>>)[]
    | undefined;
};

const QuoteBlock = ({ text }: Props) => {
  if (!text) return <></>;
  return (
    <div className="relative z-10 mb-4 mt-4 p-4">
      <div className="text-center text-base font-bold text-primary">
        {text}
      </div>
    </div>
  );
};

export default QuoteBlock;
