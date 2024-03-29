'use client';

import { useEffect, useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';
import OfferList from './OfferList';
import PricingBox from './PricingBox';
import { Maybe } from 'graphql/jsutils/Maybe';
import { primaryColor } from '@/app/i18n/settings';
import { StructuredText } from 'react-datocms/structured-text';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { PricingTierRecord } from '@/graphql/generated';
import Highlighter from '@/components/Common/Highlighter';

type Props = {
  header: string;
  subheader: Maybe<string>;
  plans: PricingTierRecord[];
};

const Minimal = ({ header, subheader, plans }: Props) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const primary =
    'w-1/2 rounded-lg bg-primary px-3 py-1 text-white focus:outline-none sm:mx-0.5 sm:w-auto';
  const secondary =
    ' w-1/2 rounded-lg bg-transparent px-3 py-1 text-gray-800 hover:bg-gray-200 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-800 sm:mx-0.5 sm:w-auto';

  const planInEvidence = plans[0] as PricingTierRecord;
  const evidencePlanFeatures = planInEvidence.planFeatures.split(', ');

  return (
    <section className="bg-white dark:bg-dark-background">
      <div className="container mx-auto sm:px-6 px-4 md:py-8 py-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 lg:text-3xl">
              {header}
            </h2>
            <div className="mt-4 text-gray-500 dark:text-gray-400">
              <ReactMarkdown>{subheader || ''}</ReactMarkdown>
            </div>
          </div>

          <div className="m-2 rounded-lg border p-0.5 dark:border-gray-700">
            <div className="flex sm:-mx-0.5">
              <button
                onClick={() => setIsMonthly(true)}
                className={isMonthly ? primary : secondary}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className={isMonthly ? secondary : primary}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div className="sm:-mx-6 md:mt-16 mt-8 flex flex-col items-center justify-center gap-6 lg:flex-row">
          <div className="lg:h-[650px] sm:w-4/5 w-full transform rounded-lg bg-gray-700 sm:px-6 px-4 py-4 transition-colors duration-300 dark:bg-gray-800 lg:w-1/3 cursor-pointer">
            <p className="text-lg font-medium text-gray-100">
              {planInEvidence.tierName}
            </p>

            <h4 className="mt-2 text-3xl font-semibold text-gray-100">
              $
              {isMonthly
                ? planInEvidence.monthlyPrice
                : planInEvidence.yearlyPrice}{' '}
              <span className="text-base font-normal text-gray-400">
                / {isMonthly ? 'Month' : 'Year'}
              </span>
            </h4>

            <div className="mt-4 lg:h-24 text-gray-300">
              <StructuredText
                data={planInEvidence.tierDescription.value}
                renderNode={Highlighter}
              />
            </div>

            <div className="sm:mt-8 mt-5 lg:h-80 lg:space-y-8 space-y-4">
              {evidencePlanFeatures.map((feature) => {
                return (
                  <div key={feature} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary fill-current dark:fill-toruquise"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="mx-4 text-gray-300">{feature}</span>
                  </div>
                );
              })}
            </div>

            <button className="md:mt-10 mt-6 w-full transform rounded-md bg-primary px-4 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-primary/90 focus:bg-primary/80 focus:outline-none">
              Choose plan
            </button>
          </div>
          {plans.slice(1).map((plan) => {
            return (
              <div
                key={plan.id}
                className="lg:h-[650px] sm:w-4/5 w-full transform rounded-lg sm:px-6 px-4 py-4 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 lg:w-1/3 cursor-pointer"
              >
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  {plan.tierName}
                </p>

                <h4 className="mt-2 text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  ${isMonthly ? plan.monthlyPrice : plan.yearlyPrice}{' '}
                  <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                    / {isMonthly ? 'Month' : 'Year'}
                  </span>
                </h4>

                <div className="mt-4 lg:h-24 text-gray-500 dark:text-gray-300">
                  <StructuredText
                    data={plan.tierDescription.value}
                    renderNode={Highlighter}
                  />
                </div>

                <div className="sm:mt-8 mt-5 lg:h-80 lg:space-y-8 space-y-4">
                  {plan.planFeatures.split(', ').map((feature) => {
                    return (
                      <div key={feature} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary fill-current dark:fill-toruquise"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <button className="md:mt-10 mt-6 w-full transform rounded-md bg-primary px-4 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-primary/90 focus:bg-primary/80 focus:outline-none">
                  Choose plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Minimal;
