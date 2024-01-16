'use client'
import { HeroSectionRecord } from '@/graphql/generated';
import { ReactNode } from 'react';
import GradientHero from './GradientHero';
import RightImageHero from './RightImageHero';
import BackgroundImageHero from './BackgroundImage';
import SplitImage from './SplitImage';
import Hero from './Hero';
import { useAuth } from '@clerk/nextjs';

type Props = {
  heroSectionRecord: HeroSectionRecord
};

const Index = ({ heroSectionRecord }: Props) => {

  const { isSignedIn } = useAuth();
  const { displayOptions, heroTitle, heroSubtitle, buttons, heroImage } = heroSectionRecord;

  const displayedConentMapper: { [key: string]: ReactNode } = {
    'gradient': <GradientHero heroSubtitle={heroSubtitle} heroTitle={heroTitle} buttons={buttons} />,
    'right_image': <RightImageHero heroSubtitle={heroSubtitle} heroTitle={heroTitle} buttons={buttons} image={heroImage} />,
    'background_image': <BackgroundImageHero heroSubtitle={heroSubtitle} heroTitle={heroTitle} buttons={buttons} image={heroImage} />,
    'split_image': <SplitImage heroSubtitle={heroSubtitle} heroTitle={heroTitle} buttons={buttons} image={heroImage} />,
  }

  if(isSignedIn) return;

  return (
    <>
      {
        displayedConentMapper[displayOptions] || <Hero heroSubtitle={heroSubtitle} heroTitle={heroTitle} buttons={buttons} />
      }
    </>
  );
};

export default Index;
