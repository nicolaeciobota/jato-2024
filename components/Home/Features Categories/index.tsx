import { FeaturedAcategorySectionRecord } from "@/graphql/generated";
import SectionTitle from "../../Common/SectionTitle";
import { ReactNode } from "react";
import MinimalCardsAcategory from "./MinimalCardsAcategory";
import GridAcategory from "./GridAcategory";
import BigImageHorizontalAcategory from "./BigImageHorizontalAcategory";
import BigImageVerticalAcategory from "./BigImageVerticalAcategory";
import AcategoryCards from "./AcategoryCards";

type Props = {
  featureAcategorySectionRecord: FeaturedAcategorySectionRecord;
};

const FeaturedAcategory = ({ featureAcategorySectionRecord }: Props) => {

  const {
    featuredAcategory,
    featuredAcategoryHeader,
    featuredAcategorySubheader,
    displayOption
  } = featureAcategorySectionRecord;

  const displayContentMapper: { [key: string]: ReactNode } = {
    card_minimal: <MinimalCardsAcategory features={featuredAcategory} />,
    grid: <GridAcategory features={featuredAcategory} />,
    big_image_horizontal: <BigImageHorizontalAcategory features={featuredAcategory} />,
    big_image_vertical: <BigImageVerticalAcategory features={featuredAcategory} />
  }

  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] pt-24 pb-10 dark:bg-dark-background opacity-95 min-h-[calc(100vh-320px)]"
      >
        <div className="container">
          <SectionTitle
            title={featuredAcategoryHeader}
            paragraph={featuredAcategorySubheader}
            center
            mb={'50px'}
          />
          
          {displayContentMapper[displayOption] || <AcategoryCards features={featuredAcategory} />}
        </div>
      </section>
    </>
  );
};

export default FeaturedAcategory;
