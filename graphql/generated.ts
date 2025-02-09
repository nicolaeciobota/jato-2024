import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BooleanType: { input: any; output: any; }
  CustomData: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  FloatType: { input: any; output: any; }
  IntType: { input: any; output: any; }
  ItemId: { input: any; output: any; }
  JsonField: { input: any; output: any; }
  MetaTagAttributes: { input: any; output: any; }
  UploadId: { input: any; output: any; }
};

export type AboutIntroModelIntroductionTextField = {
  __typename?: 'AboutIntroModelIntroductionTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type 💁 About Intro (about_intro) */
export type AboutIntroRecord = RecordInterface & {
  __typename?: 'AboutIntroRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  header: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  images: Array<ImageFileField>;
  introductionText?: Maybe<AboutIntroModelIntroductionTextField>;
  preHeader?: Maybe<Scalars['String']['output']>;
  subheader?: Maybe<Scalars['String']['output']>;
};


/** Block of type 💁 About Intro (about_intro) */
export type AboutIntroRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 💁 About Intro (about_intro) */
export type AboutIntroRecordSubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AcategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AcategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AcategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  areaOfInterest?: InputMaybe<StringFilter>;
  bio?: InputMaybe<StringFilter>;
  description?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  picture?: InputMaybe<FileFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export enum AcategoryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AreaOfInterestAsc = 'areaOfInterest_ASC',
  AreaOfInterestDesc = 'areaOfInterest_DESC',
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecord = RecordInterface & {
  __typename?: 'AcategoryRecord';
  _allAreaOfInterestLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allBioLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allDescriptionLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allReferencingAwards: Array<AwardRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAwardsMeta: CollectionMetadata;
  _allReferencingCategoryAwards: Array<CategoryAwardRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCategoryAwardsMeta: CollectionMetadata;
  _allReferencingPages: Array<PageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPagesMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  areaOfInterest?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  picture: ImageFileField;
  slug: Scalars['String']['output'];
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecord_AllAreaOfInterestLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecord_AllBioLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecord_AllReferencingAwardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AwardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AwardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAwardAndAcategory>;
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecord_AllReferencingAwardsMetaArgs = {
  filter?: InputMaybe<AwardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAwardAndAcategory>;
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecord_AllReferencingCategoryAwardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryAwardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryAwardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCategoryAwardAndAcategory>;
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecord_AllReferencingCategoryAwardsMetaArgs = {
  filter?: InputMaybe<CategoryAwardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCategoryAwardAndAcategory>;
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecord_AllReferencingPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndAcategory>;
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecord_AllReferencingPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndAcategory>;
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecordAreaOfInterestArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecordBioArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type 🏵️ Award Category (acategory) */
export type AcategoryRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum AgendaTabModelFieldsReferencingTalkModel {
  AgendaTabTalk = 'agendaTab_talk'
}

export type AgendaTabModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AgendaTabModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AgendaTabModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  talk?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum AgendaTabModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type Agenda Tab (agenda_tab) */
export type AgendaTabRecord = RecordInterface & {
  __typename?: 'AgendaTabRecord';
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slug: Scalars['String']['output'];
  talk: Array<TalkRecord>;
  title: Scalars['String']['output'];
};


/** Record of type Agenda Tab (agenda_tab) */
export type AgendaTabRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Agenda Tab (agenda_tab) */
export type AgendaTabRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Agenda Tab (agenda_tab) */
export type AgendaTabRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type All Agenda Tabs Section (all_agenda_tabs_section) */
export type AllAgendaTabsSectionRecord = RecordInterface & {
  __typename?: 'AllAgendaTabsSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type All Agenda Tabs Section (all_agenda_tabs_section) */
export type AllAgendaTabsSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🏆 All Awards Section (all_awards_section) */
export type AllAwardsSectionRecord = RecordInterface & {
  __typename?: 'AllAwardsSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type 🏆 All Awards Section (all_awards_section) */
export type AllAwardsSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🏆 All Category Awards Section (all_category_awards_section) */
export type AllCategoryAwardsSectionRecord = RecordInterface & {
  __typename?: 'AllCategoryAwardsSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type 🏆 All Category Awards Section (all_category_awards_section) */
export type AllCategoryAwardsSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📚 All Posts Section (all_posts_section) */
export type AllPostsSectionRecord = RecordInterface & {
  __typename?: 'AllPostsSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type 📚 All Posts Section (all_posts_section) */
export type AllPostsSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type All Stages Section (all_stages_section) */
export type AllStagesSectionRecord = RecordInterface & {
  __typename?: 'AllStagesSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type All Stages Section (all_stages_section) */
export type AllStagesSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type All Talks Section (all_talks_section) */
export type AllTalksSectionRecord = RecordInterface & {
  __typename?: 'AllTalksSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type All Talks Section (all_talks_section) */
export type AllTalksSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📲 CTA App Download (app_cta) */
export type AppCtaRecord = RecordInterface & {
  __typename?: 'AppCtaRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  appstoreUrl?: Maybe<Scalars['String']['output']>;
  googlePlayUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Block of type 📲 CTA App Download (app_cta) */
export type AppCtaRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📲 CTA App Download (app_cta) */
export type AppCtaRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AtagModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AtagModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AtagModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  atag?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export enum AtagModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AtagAsc = 'atag_ASC',
  AtagDesc = 'atag_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

/** Record of type 🏷️ Award Tag (atag) */
export type AtagRecord = RecordInterface & {
  __typename?: 'AtagRecord';
  _allAtagLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allReferencingAwards: Array<AwardRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAwardsMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  atag: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  slug: Scalars['String']['output'];
};


/** Record of type 🏷️ Award Tag (atag) */
export type AtagRecord_AllAtagLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 🏷️ Award Tag (atag) */
export type AtagRecord_AllReferencingAwardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AwardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AwardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAwardAndAtag>;
};


/** Record of type 🏷️ Award Tag (atag) */
export type AtagRecord_AllReferencingAwardsMetaArgs = {
  filter?: InputMaybe<AwardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAwardAndAtag>;
};


/** Record of type 🏷️ Award Tag (atag) */
export type AtagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏷️ Award Tag (atag) */
export type AtagRecordAtagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type AuthorModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  areaOfInterest?: InputMaybe<StringFilter>;
  bio?: InputMaybe<StringFilter>;
  description?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  picture?: InputMaybe<FileFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export enum AuthorModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AreaOfInterestAsc = 'areaOfInterest_ASC',
  AreaOfInterestDesc = 'areaOfInterest_DESC',
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type ✍️ Author (author) */
export type AuthorRecord = RecordInterface & {
  __typename?: 'AuthorRecord';
  _allAreaOfInterestLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allBioLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allDescriptionLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allReferencingPages: Array<PageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPagesMeta: CollectionMetadata;
  _allReferencingPosts: Array<PostRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPostsMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  areaOfInterest?: Maybe<Scalars['String']['output']>;
  bio: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  picture: ImageFileField;
  slug: Scalars['String']['output'];
};


/** Record of type ✍️ Author (author) */
export type AuthorRecord_AllAreaOfInterestLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type ✍️ Author (author) */
export type AuthorRecord_AllBioLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type ✍️ Author (author) */
export type AuthorRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type ✍️ Author (author) */
export type AuthorRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type ✍️ Author (author) */
export type AuthorRecord_AllReferencingPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndAuthor>;
};


/** Record of type ✍️ Author (author) */
export type AuthorRecord_AllReferencingPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndAuthor>;
};


/** Record of type ✍️ Author (author) */
export type AuthorRecord_AllReferencingPostsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PostModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPostAndAuthor>;
};


/** Record of type ✍️ Author (author) */
export type AuthorRecord_AllReferencingPostsMetaArgs = {
  filter?: InputMaybe<PostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPostAndAuthor>;
};


/** Record of type ✍️ Author (author) */
export type AuthorRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type ✍️ Author (author) */
export type AuthorRecordAreaOfInterestArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type ✍️ Author (author) */
export type AuthorRecordBioArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type ✍️ Author (author) */
export type AuthorRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type ✍️ Author (author) */
export type AuthorRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type AwardModelBiographyBlocksField = AppCtaRecord | CtaButtonWithImageRecord | GalleryRecord | ImageBlockRecord | NewsletterSubscriptionRecord;

export type AwardModelBiographyField = {
  __typename?: 'AwardModelBiographyField';
  blocks: Array<AwardModelBiographyBlocksField>;
  links: Array<AwardRecord>;
  value: Scalars['JsonField']['output'];
};

export type AwardModelContentBlocksField = AppCtaRecord | CtaButtonWithImageRecord | GalleryRecord | ImageBlockRecord | MuxVideoRecord | NewsletterSubscriptionRecord;

export type AwardModelContentField = {
  __typename?: 'AwardModelContentField';
  blocks: Array<AwardModelContentBlocksField>;
  links: Array<AwardRecord>;
  value: Scalars['JsonField']['output'];
};

/** Linking fields */
export enum AwardModelFieldsReferencingAcategoryModel {
  AwardAcategory = 'award_acategory'
}

/** Linking fields */
export enum AwardModelFieldsReferencingAtagModel {
  AwardAtags = 'award_atags'
}

export type AwardModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AwardModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AwardModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  acategory?: InputMaybe<LinkFilter>;
  atags?: InputMaybe<LinksFilter>;
  biography?: InputMaybe<StructuredTextFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  iframe?: InputMaybe<StringFilter>;
  jobTitle?: InputMaybe<StringFilter>;
  seoAnalysis?: InputMaybe<JsonFilter>;
  seoTags?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum AwardModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IframeAsc = 'iframe_ASC',
  IframeDesc = 'iframe_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 📝 Award  (award) */
export type AwardRecord = RecordInterface & {
  __typename?: 'AwardRecord';
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  acategory?: Maybe<AcategoryRecord>;
  atags: Array<AtagRecord>;
  biography: AwardModelBiographyField;
  content: AwardModelContentField;
  id: Scalars['ItemId']['output'];
  iframe?: Maybe<Scalars['String']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  seoAnalysis?: Maybe<Scalars['JsonField']['output']>;
  seoTags?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Record of type 📝 Award  (award) */
export type AwardRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 📝 Award  (award) */
export type AwardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 📝 Award  (award) */
export type AwardRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🌟  Banner Block (banner_block) */
export type BannerBlockRecord = RecordInterface & {
  __typename?: 'BannerBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  bannerImage: ImageFileField;
  bannerUrl: Scalars['String']['output'];
  height: Scalars['String']['output'];
  heightDimensionUnit: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  layout: Scalars['String']['output'];
  minHeight: Scalars['String']['output'];
  minHeightDimensionUnit: Scalars['String']['output'];
  objectFit: Scalars['String']['output'];
  width: Scalars['String']['output'];
  widthDimensionUnit: Scalars['String']['output'];
};


/** Block of type 🌟  Banner Block (banner_block) */
export type BannerBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type 🏢 Brand (brand) */
export type BrandRecord = RecordInterface & {
  __typename?: 'BrandRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  brandLogo: FileField;
  brandName: Scalars['String']['output'];
  brandUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
};


/** Block of type 🏢 Brand (brand) */
export type BrandRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🏢 Brands Section (brand_section) */
export type BrandSectionRecord = RecordInterface & {
  __typename?: 'BrandSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  brand: Array<BrandRecord>;
  displayOptions: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type 🏢 Brands Section (brand_section) */
export type BrandSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🎯 Button (button) */
export type ButtonRecord = RecordInterface & {
  __typename?: 'ButtonRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label: Scalars['String']['output'];
  primary?: Maybe<Scalars['BooleanType']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** Block of type 🎯 Button (button) */
export type ButtonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum CategoryAwardModelFieldsReferencingAcategoryModel {
  CategoryAwardCategory = 'categoryAward_category'
}

export type CategoryAwardModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryAwardModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryAwardModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  award?: InputMaybe<LinksFilter>;
  category?: InputMaybe<LinkFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum CategoryAwardModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type Category Award (category_award) */
export type CategoryAwardRecord = RecordInterface & {
  __typename?: 'CategoryAwardRecord';
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  award: Array<AwardRecord>;
  category?: Maybe<AcategoryRecord>;
  id: Scalars['ItemId']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Record of type Category Award (category_award) */
export type CategoryAwardRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Category Award (category_award) */
export type CategoryAwardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Category Award (category_award) */
export type CategoryAwardRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ChangeLogModelContentField = {
  __typename?: 'ChangeLogModelContentField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

export type ChangeLogModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ChangeLogModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ChangeLogModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  timeOfRelease?: InputMaybe<DateTimeFilter>;
  versionName?: InputMaybe<StringFilter>;
};

export enum ChangeLogModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TimeOfReleaseAsc = 'timeOfRelease_ASC',
  TimeOfReleaseDesc = 'timeOfRelease_DESC',
  VersionNameAsc = 'versionName_ASC',
  VersionNameDesc = 'versionName_DESC'
}

/** Record of type 🧪 Changelog entry (change_log) */
export type ChangeLogRecord = RecordInterface & {
  __typename?: 'ChangeLogRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content: ChangeLogModelContentField;
  id: Scalars['ItemId']['output'];
  slug: Scalars['String']['output'];
  timeOfRelease: Scalars['DateTime']['output'];
  versionName: Scalars['String']['output'];
};


/** Record of type 🧪 Changelog entry (change_log) */
export type ChangeLogRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📝 Changelog Section (changelog_section) */
export type ChangelogSectionRecord = RecordInterface & {
  __typename?: 'ChangelogSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  featuredVersions: Array<ChangeLogRecord>;
  id: Scalars['ItemId']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Block of type 📝 Changelog Section (changelog_section) */
export type ChangelogSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📝 Changelog Section (changelog_section) */
export type ChangelogSectionRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type ©️ Circle Menu Item  (circle_menu_item) */
export type CircleMenuItemRecord = RecordInterface & {
  __typename?: 'CircleMenuItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  redirectUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Block of type ©️ Circle Menu Item  (circle_menu_item) */
export type CircleMenuItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType']['output'];
};

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow'
}

export type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType']['output'];
  blue: Scalars['IntType']['output'];
  cssRgb: Scalars['String']['output'];
  green: Scalars['IntType']['output'];
  hex: Scalars['String']['output'];
  red: Scalars['IntType']['output'];
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Block of type 📸 CTA Button with image (cta_button_with_image) */
export type CtaButtonWithImageRecord = RecordInterface & {
  __typename?: 'CtaButtonWithImageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  buttonLabel: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  image: ImageFileField;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Block of type 📸 CTA Button with image (cta_button_with_image) */
export type CtaButtonWithImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📸 CTA Button with image (cta_button_with_image) */
export type CtaButtonWithImageRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DateTagModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<DateTagModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DateTagModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  eventDate?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export enum DateTagModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  EventDateAsc = 'eventDate_ASC',
  EventDateDesc = 'eventDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

/** Record of type 📅 Date Tag (date_tag) */
export type DateTagRecord = RecordInterface & {
  __typename?: 'DateTagRecord';
  _allReferencingTalks: Array<TalkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingTalksMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  eventDate: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  slug: Scalars['String']['output'];
};


/** Record of type 📅 Date Tag (date_tag) */
export type DateTagRecord_AllReferencingTalksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TalkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TalkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenTalkAndDateTag>;
};


/** Record of type 📅 Date Tag (date_tag) */
export type DateTagRecord_AllReferencingTalksMetaArgs = {
  filter?: InputMaybe<TalkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenTalkAndDateTag>;
};


/** Record of type 📅 Date Tag (date_tag) */
export type DateTagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter DateTime fields */
export type DateTimeFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DetailSectionModelDetailsField = {
  __typename?: 'DetailSectionModelDetailsField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type 📄 Detail section (detail_section) */
export type DetailSectionRecord = RecordInterface & {
  __typename?: 'DetailSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  details: DetailSectionModelDetailsField;
  id: Scalars['ItemId']['output'];
  image: ImageFileField;
  imagePosition?: Maybe<Scalars['BooleanType']['output']>;
};


/** Block of type 📄 Detail section (detail_section) */
export type DetailSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type 📚 Documentation Home (documentation_home) */
export type DocumentationHomeRecord = RecordInterface & {
  __typename?: 'DocumentationHomeRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  featuredPages: Array<DocumentationPageRecord>;
  footerText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  logo: FileField;
  subheader?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Record of type 📚 Documentation Home (documentation_home) */
export type DocumentationHomeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type DocumentationPageModelContentField = {
  __typename?: 'DocumentationPageModelContentField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

export type DocumentationPageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<DocumentationPageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DocumentationPageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  parent?: InputMaybe<ParentFilter>;
  position?: InputMaybe<PositionFilter>;
  seoMeta?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum DocumentationPageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 📖 Documentation Page (documentation_page) */
export type DocumentationPageRecord = RecordInterface & {
  __typename?: 'DocumentationPageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  children: Array<DocumentationPageRecord>;
  content: DocumentationPageModelContentField;
  id: Scalars['ItemId']['output'];
  parent?: Maybe<DocumentationPageRecord>;
  position?: Maybe<Scalars['IntType']['output']>;
  seoMeta?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Record of type 📖 Documentation Page (documentation_page) */
export type DocumentationPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🚀 Empty Hero section (empty_hero_section) */
export type EmptyHeroSectionRecord = RecordInterface & {
  __typename?: 'EmptyHeroSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  bannerImageDesktop: ImageFileField;
  bannerImageMobile: ImageFileField;
  bannerImageTablet: ImageFileField;
  displayOptions: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type 🚀 Empty Hero section (empty_hero_section) */
export type EmptyHeroSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type ❓ FAQ Section (faq_section) */
export type FaqSectionRecord = RecordInterface & {
  __typename?: 'FaqSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOptions: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  questions: Array<QuestionRecord>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Block of type ❓ FAQ Section (faq_section) */
export type FaqSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type ❓ FAQ Section (faq_section) */
export type FaqSectionRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication'
}

/** Block of type 📋 Feature list section (feature_list_section) */
export type FeatureListSectionRecord = RecordInterface & {
  __typename?: 'FeatureListSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOption: Scalars['String']['output'];
  feature: Array<FeatureRecord>;
  featuresHeader: Scalars['String']['output'];
  featuresSubheader?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
};


/** Block of type 📋 Feature list section (feature_list_section) */
export type FeatureListSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📋 Feature list section (feature_list_section) */
export type FeatureListSectionRecordFeaturesSubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type ⭐ Feature (feature) */
export type FeatureRecord = RecordInterface & {
  __typename?: 'FeatureRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  featureDescription: Scalars['String']['output'];
  featureIcon: ImageFileField;
  featureTitle: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  link?: Maybe<Scalars['String']['output']>;
};


/** Block of type ⭐ Feature (feature) */
export type FeatureRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type ⭐ Feature (feature) */
export type FeatureRecordFeatureDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type 🏵️ Featured Award Category section  (featured_acategory_section) */
export type FeaturedAcategorySectionRecord = RecordInterface & {
  __typename?: 'FeaturedAcategorySectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOption: Scalars['String']['output'];
  featuredAcategory: Array<AcategoryRecord>;
  featuredAcategoryHeader: Scalars['String']['output'];
  featuredAcategorySubheader?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
};


/** Block of type 🏵️ Featured Award Category section  (featured_acategory_section) */
export type FeaturedAcategorySectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 🏵️ Featured Award Category section  (featured_acategory_section) */
export type FeaturedAcategorySectionRecordFeaturedAcategorySubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type 📰 Featured posts section (featured_posts_section) */
export type FeaturedPostsSectionRecord = RecordInterface & {
  __typename?: 'FeaturedPostsSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOptions: Scalars['String']['output'];
  featuredPosts: Array<PostRecord>;
  featuredPostsHeader: Scalars['String']['output'];
  featuredPostsSubheader?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
};


/** Block of type 📰 Featured posts section (featured_posts_section) */
export type FeaturedPostsSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📰 Featured posts section (featured_posts_section) */
export type FeaturedPostsSectionRecordFeaturedPostsSubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Featured Stage (featured_stage) */
export type FeaturedStageRecord = RecordInterface & {
  __typename?: 'FeaturedStageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type Featured Stage (featured_stage) */
export type FeaturedStageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📰 Featured talks section (featured_talks_section) */
export type FeaturedTalksSectionRecord = RecordInterface & {
  __typename?: 'FeaturedTalksSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOptions: Scalars['String']['output'];
  featuredTalks: Array<TalkRecord>;
  featuredTalksHeader: Scalars['String']['output'];
  featuredTalksSubheader?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
};


/** Block of type 📰 Featured talks section (featured_talks_section) */
export type FeaturedTalksSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📰 Featured talks section (featured_talks_section) */
export type FeaturedTalksSectionRecordFeaturedTalksSubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter Floating-point fields */
export type FloatFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['FloatType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['FloatType']['input']>;
};

/** Block of type 📷 Gallery (gallery) */
export type GalleryRecord = RecordInterface & {
  __typename?: 'GalleryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  imageGallery: Array<ImageFileField>;
};


/** Block of type 📷 Gallery (gallery) */
export type GalleryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']['output']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
  twitterAccount?: Maybe<Scalars['String']['output']>;
};

/** Block of type 🚀 Hero section (hero_section) */
export type HeroSectionRecord = RecordInterface & {
  __typename?: 'HeroSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  buttons: Array<ButtonRecord>;
  displayOptions: Scalars['String']['output'];
  heroImage?: Maybe<ImageFileField>;
  heroSubtitle?: Maybe<Scalars['String']['output']>;
  heroTitle: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type 🚀 Hero section (hero_section) */
export type HeroSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 🚀 Hero section (hero_section) */
export type HeroSectionRecordHeroSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type 🎞️ Iframe Block (iframe_block) */
export type IframeBlockRecord = RecordInterface & {
  __typename?: 'IframeBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  align: Scalars['String']['output'];
  height: Scalars['String']['output'];
  heightDimensionUnit: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  iframeUrl: Scalars['String']['output'];
  minHeight: Scalars['String']['output'];
  minHeightDimensionUnit: Scalars['String']['output'];
  width: Scalars['String']['output'];
  widthDimensionUnit: Scalars['String']['output'];
};


/** Block of type 🎞️ Iframe Block (iframe_block) */
export type IframeBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type IFrame (iframe) */
export type IframeRecord = RecordInterface & {
  __typename?: 'IframeRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  iframe?: Maybe<Scalars['String']['output']>;
};


/** Block of type IFrame (iframe) */
export type IframeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🌅 Image block (image_block) */
export type ImageBlockRecord = RecordInterface & {
  __typename?: 'ImageBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image: ImageFileField;
};


/** Block of type 🌅 Image block (image_block) */
export type ImageBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ImageFileField = FileFieldInterface & {
  __typename?: 'ImageFileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint: FocalPoint;
  format: Scalars['String']['output'];
  height: Scalars['IntType']['output'];
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage: ResponsiveImage;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width: Scalars['IntType']['output'];
};


export type ImageFileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageFileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type ImageFileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageFileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageFileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type ImageFileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageFileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']['input']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-remove failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
   */
  bgRemoveFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement
   *
   * Replaces background from image using a string based prompt.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
   */
  bgReplace?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-replace failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
   */
  bgReplaceFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement Negative Prompt
   *
   * Provides a negative text suggestion for background replacement.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace-neg-prompt)
   */
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Fallback
   *
   * Sets the fallback behavior for generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-fallback)
   */
  fillGenFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Fill Generative Negative Prompt
   *
   * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-neg-prompt)
   */
  fillGenNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Position
   *
   * Sets the position of the Origin Image in relation to the generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-pos)
   */
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
  /**
   * Fill Generative Prompt
   *
   * Provides a text suggestion to the generative fill parameter.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-prompt)
   */
  fillGenPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Seed
   *
   * Sets the generative seed value. Used to generate similar outputs from different prompts.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-seed)
   */
  fillGenSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Gradient Color Space
   *
   * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-cs)
   */
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
  /**
   * Fill Gradient Linear
   *
   * Blends a gradient between two colors, {color1} and {color2}, along a straight path
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear)
   */
  fillGradientLinear?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Linear Direction
   *
   * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear-direction)
   */
  fillGradientLinearDirection?: InputMaybe<Array<ImgixParamsFillGradientLinearDirection>>;
  /**
   * Fill Gradient Radial
   *
   * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial)
   */
  fillGradientRadial?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial Radius
   *
   * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-radius)
   */
  fillGradientRadialRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial X
   *
   * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-x)
   */
  fillGradientRadialX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Radial Y
   *
   * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-y)
   */
  fillGradientRadialY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Type
   *
   * Specifies if a gradient is radial (circular) or linear (straight)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-type)
   */
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars['String']['input']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Animated Gif Quality
   *
   * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']['input']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Jpg Progressive
   *
   * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
   */
  jpgProgressive?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']['input']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Sanitize Svg
   *
   * Specifies whether to sanitize an SVG.
   */
  svgSanitize?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Super Resolution
   *
   * Uses generative AI fill to upscale low resolution images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale)
   */
  upscale?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Super Resolution Fallback
   *
   * Overrides default fallback behavior for super resolution failures
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale-fallback)
   */
  upscaleFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>;
};

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye'
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight'
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit'
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width'
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Gen = 'gen',
  Generative = 'generative',
  Gradient = 'gradient',
  Solid = 'solid'
}

export enum ImgixParamsFillGenPos {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsFillGradientCs {
  Hsl = 'hsl',
  Lch = 'lch',
  Linear = 'linear',
  Oklab = 'oklab',
  Srgb = 'srgb'
}

export enum ImgixParamsFillGradientLinearDirection {
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsFillGradientType {
  Linear = 'linear',
  Radial = 'radial'
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale'
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v'
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp'
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block'
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsMarkTile {
  Grid = 'grid'
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json'
}

export enum ImgixParamsTransparency {
  Grid = 'grid'
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color'
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start'
}

export enum ImgixParamsTxtFit {
  Max = 'max'
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter Integer fields */
export type IntegerFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAgendaTabAndTalk = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AgendaTabModelFieldsReferencingTalkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AgendaTabModelFieldsReferencingTalkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAwardAndAcategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AwardModelFieldsReferencingAcategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AwardModelFieldsReferencingAcategoryModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAwardAndAtag = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AwardModelFieldsReferencingAtagModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AwardModelFieldsReferencingAtagModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCategoryAwardAndAcategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CategoryAwardModelFieldsReferencingAcategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CategoryAwardModelFieldsReferencingAcategoryModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPageAndAcategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PageModelFieldsReferencingAcategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PageModelFieldsReferencingAcategoryModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPageAndAuthor = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PageModelFieldsReferencingAuthorModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PageModelFieldsReferencingAuthorModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPageAndSpeaker = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PageModelFieldsReferencingSpeakerModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PageModelFieldsReferencingSpeakerModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPostAndAuthor = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PostModelFieldsReferencingAuthorModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PostModelFieldsReferencingAuthorModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPostAndTag = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PostModelFieldsReferencingTagModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PostModelFieldsReferencingTagModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSpeakerAndTalk = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SpeakerModelFieldsReferencingTalkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SpeakerModelFieldsReferencingTalkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenStageAndTalk = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<StageModelFieldsReferencingTalkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<StageModelFieldsReferencingTalkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenTalkAndDateTag = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<TalkModelFieldsReferencingDateTagModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<TalkModelFieldsReferencingDateTagModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenTalkAndSpeaker = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<TalkModelFieldsReferencingSpeakerModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<TalkModelFieldsReferencingSpeakerModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenTalkAndStage = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<TalkModelFieldsReferencingStageModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<TalkModelFieldsReferencingStageModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenTalkAndTalk = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<TalkModelFieldsReferencingTalkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<TalkModelFieldsReferencingTalkModel>>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAgendaTabAndTalk = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAgendaTabAndTalk>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAwardAndAcategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAwardAndAcategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAwardAndAtag = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAwardAndAtag>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCategoryAwardAndAcategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCategoryAwardAndAcategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPageAndAcategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPageAndAcategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPageAndAuthor = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPageAndAuthor>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPageAndSpeaker = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPageAndSpeaker>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPostAndAuthor = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPostAndAuthor>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPostAndTag = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPostAndTag>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSpeakerAndTalk = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSpeakerAndTalk>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenStageAndTalk = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenStageAndTalk>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenTalkAndDateTag = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenTalkAndDateTag>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenTalkAndSpeaker = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenTalkAndSpeaker>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenTalkAndStage = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenTalkAndStage>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenTalkAndTalk = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenTalkAndTalk>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated'
}

/** Block of type 📺 IVS Live Stage (ivs_live_stage) */
export type IvsLiveStageRecord = RecordInterface & {
  __typename?: 'IvsLiveStageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  iframeHeight: Scalars['String']['output'];
  iframeMinHeight: Scalars['String']['output'];
  iframeUrl: Scalars['String']['output'];
  iframeWidth: Scalars['String']['output'];
  rtmpUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Block of type 📺 IVS Live Stage (ivs_live_stage) */
export type IvsLiveStageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter JSON fields */
export type JsonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type LayoutModelMenuField = CircleMenuItemRecord | MenuDropdownRecord | MenuItemRecord;

export type LayoutModelNotificationField = {
  __typename?: 'LayoutModelNotificationField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type 🧩 Layout (layout) */
export type LayoutRecord = RecordInterface & {
  __typename?: 'LayoutRecord';
  _allFooterSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  footerLinks: Array<LegalPageRecord>;
  footerLogo?: Maybe<FileField>;
  footerSubtitle?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  logo: FileField;
  mainColor: ColorField;
  menu: Array<LayoutModelMenuField>;
  notification?: Maybe<LayoutModelNotificationField>;
  socialMediaLinks: Array<SocialMediaIconRecord>;
};


/** Record of type 🧩 Layout (layout) */
export type LayoutRecord_AllFooterSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type 🧩 Layout (layout) */
export type LayoutRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🧩 Layout (layout) */
export type LayoutRecordFooterSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LegalPageModelContentField = {
  __typename?: 'LegalPageModelContentField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

export type LegalPageModelContentFieldNonNullMultiLocaleField = {
  __typename?: 'LegalPageModelContentFieldNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: LegalPageModelContentField;
};

export type LegalPageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LegalPageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LegalPageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum LegalPageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 🏛️ Legal Page (legal_page) */
export type LegalPageRecord = RecordInterface & {
  __typename?: 'LegalPageRecord';
  _allContentLocales?: Maybe<Array<LegalPageModelContentFieldNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content: LegalPageModelContentField;
  id: Scalars['ItemId']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Record of type 🏛️ Legal Page (legal_page) */
export type LegalPageRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 🏛️ Legal Page (legal_page) */
export type LegalPageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 🏛️ Legal Page (legal_page) */
export type LegalPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏛️ Legal Page (legal_page) */
export type LegalPageRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏛️ Legal Page (legal_page) */
export type LegalPageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Block of type Link (link) */
export type LinkRecord = RecordInterface & {
  __typename?: 'LinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  externalLinks: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Block of type Link (link) */
export type LinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Linking locales */
export enum LinkingLocale {
  NonLocalized = '_nonLocalized',
  De = 'de',
  En = 'en',
  Es = 'es',
  Fr = 'fr',
  It = 'it',
  Pt = 'pt',
  Ru = 'ru',
  Sv = 'sv'
}

/** Specifies how to filter by linking locales */
export type LinkingLocalesFilter = {
  /** Filter linking records that link to current record in at least one of the specified locales */
  anyIn?: InputMaybe<Array<LinkingLocale>>;
  /** Filter linking records that do not link to current record in any of the specified locales */
  notIn?: InputMaybe<Array<LinkingLocale>>;
};

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Specifies how to filter by locale */
export type LocalesFilter = {
  /** Filter records that are localized in all the specified locales */
  allIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are localized in at least one of the specified locales */
  anyIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are not localized in any of the specified locales */
  notIn?: InputMaybe<Array<SiteLocale>>;
};

export type MemberModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MemberModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MemberModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  iframeUrl?: InputMaybe<StringFilter>;
};

export enum MemberModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IframeUrlAsc = 'iframeUrl_ASC',
  IframeUrlDesc = 'iframeUrl_DESC'
}

/** Record of type Member (member) */
export type MemberRecord = RecordInterface & {
  __typename?: 'MemberRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  iframeUrl?: Maybe<Scalars['String']['output']>;
};


/** Record of type Member (member) */
export type MemberRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🔽 Menu Dropdown (menu_dropdown) */
export type MenuDropdownRecord = RecordInterface & {
  __typename?: 'MenuDropdownRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  items: Array<MenuItemRecord>;
  title: Scalars['String']['output'];
};


/** Block of type 🔽 Menu Dropdown (menu_dropdown) */
export type MenuDropdownRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type ➡️ Menu Item (menu_item) */
export type MenuItemRecord = RecordInterface & {
  __typename?: 'MenuItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  page: PageRecord;
  title: Scalars['String']['output'];
};


/** Block of type ➡️ Menu Item (menu_item) */
export type MenuItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📺 MUX Live Stream (mux_live_stream) */
export type MuxLiveStreamRecord = RecordInterface & {
  __typename?: 'MuxLiveStreamRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  iframeHeight: Scalars['String']['output'];
  iframeMinHeight: Scalars['String']['output'];
  iframeUrl: Scalars['String']['output'];
  iframeWidth: Scalars['String']['output'];
  placeholderUrl: Scalars['String']['output'];
  playbackId: Scalars['String']['output'];
  streamType: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Block of type 📺 MUX Live Stream (mux_live_stream) */
export type MuxLiveStreamRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png'
}

/** Block of type 📹 Mux Video (mux_video) */
export type MuxVideoRecord = RecordInterface & {
  __typename?: 'MuxVideoRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  placeholderUrl?: Maybe<Scalars['String']['output']>;
  playbackId: Scalars['String']['output'];
  streamType: Scalars['String']['output'];
};


/** Block of type 📹 Mux Video (mux_video) */
export type MuxVideoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📬 CTA Newsletter Subscription (newsletter_subscription) */
export type NewsletterSubscriptionRecord = RecordInterface & {
  __typename?: 'NewsletterSubscriptionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  buttonLabel: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Block of type 📬 CTA Newsletter Subscription (newsletter_subscription) */
export type NewsletterSubscriptionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📬 CTA Newsletter Subscription (newsletter_subscription) */
export type NewsletterSubscriptionRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

/** Linking fields */
export enum PageModelFieldsReferencingAcategoryModel {
  PageSections = 'page_sections',
  PageSectionsFeaturedAcategorySectionFeaturedAcategory = 'page_sections__featuredAcategorySection_featuredAcategory'
}

/** Linking fields */
export enum PageModelFieldsReferencingAuthorModel {
  PageSections = 'page_sections',
  PageSectionsTeamSectionShowcasedMembers = 'page_sections__teamSection_showcasedMembers'
}

/** Linking fields */
export enum PageModelFieldsReferencingSpeakerModel {
  PageSections = 'page_sections',
  PageSectionsSpeakerSectionShowcasedSpeakers = 'page_sections__speakerSection_showcasedSpeakers'
}

export type PageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  label?: InputMaybe<StringFilter>;
  seoAnalysis?: InputMaybe<JsonFilter>;
  seoMeta?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export enum PageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC'
}

export type PageModelSectionsField = AboutIntroRecord | AllAgendaTabsSectionRecord | AllCategoryAwardsSectionRecord | BannerBlockRecord | BrandSectionRecord | ChangelogSectionRecord | DetailSectionRecord | EmptyHeroSectionRecord | FaqSectionRecord | FeatureListSectionRecord | FeaturedAcategorySectionRecord | FeaturedPostsSectionRecord | HeroSectionRecord | IframeBlockRecord | IvsLiveStageRecord | MuxLiveStreamRecord | PricingSectionRecord | RedirectSectionRecord | ReviewSectionRecord | SpacerRecord | SpeakerSectionRecord | SpeakersIntroRecord | StatsSectionRecord | TeamSectionRecord | VideoBlockRecord | VideoSectionRecord;

export type PageModelSectionsFieldListListNonNullMultiLocaleField = {
  __typename?: 'PageModelSectionsFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<PageModelSectionsField>;
};

/** Record of type 🏡 Pages (page) */
export type PageRecord = RecordInterface & {
  __typename?: 'PageRecord';
  _allSectionsLocales?: Maybe<Array<PageModelSectionsFieldListListNonNullMultiLocaleField>>;
  _allSeoMetaLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label: Scalars['String']['output'];
  sections: Array<PageModelSectionsField>;
  seoAnalysis?: Maybe<Scalars['JsonField']['output']>;
  seoMeta?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
};


/** Record of type 🏡 Pages (page) */
export type PageRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 🏡 Pages (page) */
export type PageRecord_AllSeoMetaLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 🏡 Pages (page) */
export type PageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏡 Pages (page) */
export type PageRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏡 Pages (page) */
export type PageRecordSeoMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by parent (tree-like collections only) */
export type ParentFilter = {
  /** Filter records children of the specified record. Value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with a parent record or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

export type PostModelContentBlocksField = AppCtaRecord | CtaButtonWithImageRecord | ImageBlockRecord | NewsletterSubscriptionRecord;

export type PostModelContentField = {
  __typename?: 'PostModelContentField';
  blocks: Array<PostModelContentBlocksField>;
  links: Array<PostRecord>;
  value: Scalars['JsonField']['output'];
};

export type PostModelContentFieldNonNullMultiLocaleField = {
  __typename?: 'PostModelContentFieldNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: PostModelContentField;
};

/** Linking fields */
export enum PostModelFieldsReferencingAuthorModel {
  PostAuthor = 'post_author'
}

/** Linking fields */
export enum PostModelFieldsReferencingTagModel {
  PostTags = 'post_tags'
}

export type PostModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PostModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PostModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  author?: InputMaybe<LinkFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  seoAnalysis?: InputMaybe<JsonFilter>;
  seoTags?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  tags?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum PostModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 📝 Blog Post (post) */
export type PostRecord = RecordInterface & {
  __typename?: 'PostRecord';
  _allContentLocales?: Maybe<Array<PostModelContentFieldNonNullMultiLocaleField>>;
  _allSeoTagsLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  author?: Maybe<AuthorRecord>;
  content: PostModelContentField;
  id: Scalars['ItemId']['output'];
  seoAnalysis?: Maybe<Scalars['JsonField']['output']>;
  seoTags?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  tags: Array<TagRecord>;
  title: Scalars['String']['output'];
};


/** Record of type 📝 Blog Post (post) */
export type PostRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 📝 Blog Post (post) */
export type PostRecord_AllSeoTagsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 📝 Blog Post (post) */
export type PostRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 📝 Blog Post (post) */
export type PostRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 📝 Blog Post (post) */
export type PostRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 📝 Blog Post (post) */
export type PostRecordSeoTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 📝 Blog Post (post) */
export type PostRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 💰 Pricing section (pricing_section) */
export type PricingSectionRecord = RecordInterface & {
  __typename?: 'PricingSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOption: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  plans: Array<PricingTierRecord>;
  pricingSectionHeader: Scalars['String']['output'];
  pricingSectionSubheader?: Maybe<Scalars['String']['output']>;
};


/** Block of type 💰 Pricing section (pricing_section) */
export type PricingSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 💰 Pricing section (pricing_section) */
export type PricingSectionRecordPricingSectionSubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PricingTierModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PricingTierModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PricingTierModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  monthlyPrice?: InputMaybe<IntegerFilter>;
  planFeatures?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  tierDescription?: InputMaybe<StructuredTextFilter>;
  tierName?: InputMaybe<StringFilter>;
  yearlyPrice?: InputMaybe<FloatFilter>;
};

export enum PricingTierModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MonthlyPriceAsc = 'monthlyPrice_ASC',
  MonthlyPriceDesc = 'monthlyPrice_DESC',
  PlanFeaturesAsc = 'planFeatures_ASC',
  PlanFeaturesDesc = 'planFeatures_DESC',
  TierNameAsc = 'tierName_ASC',
  TierNameDesc = 'tierName_DESC',
  YearlyPriceAsc = 'yearlyPrice_ASC',
  YearlyPriceDesc = 'yearlyPrice_DESC'
}

export type PricingTierModelTierDescriptionField = {
  __typename?: 'PricingTierModelTierDescriptionField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

export type PricingTierModelTierDescriptionFieldNonNullMultiLocaleField = {
  __typename?: 'PricingTierModelTierDescriptionFieldNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: PricingTierModelTierDescriptionField;
};

/** Record of type 💰 Pricing Tier (pricing_tier) */
export type PricingTierRecord = RecordInterface & {
  __typename?: 'PricingTierRecord';
  _allTierDescriptionLocales?: Maybe<Array<PricingTierModelTierDescriptionFieldNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  monthlyPrice: Scalars['IntType']['output'];
  planFeatures: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tierDescription: PricingTierModelTierDescriptionField;
  tierName: Scalars['String']['output'];
  yearlyPrice: Scalars['FloatType']['output'];
};


/** Record of type 💰 Pricing Tier (pricing_tier) */
export type PricingTierRecord_AllTierDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 💰 Pricing Tier (pricing_tier) */
export type PricingTierRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 💰 Pricing Tier (pricing_tier) */
export type PricingTierRecordTierDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allAcategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allAgendaTabsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allAtagsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allAuthorsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allAwardsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCategoryAwardsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allChangeLogsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allDateTagsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allDocumentationPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLegalPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMembersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPostsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPricingTiersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSocialFeedsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSpeakersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTagsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTalksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTestimonialsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a specific record */
  acategory?: Maybe<AcategoryRecord>;
  /** Returns a specific record */
  agendaTab?: Maybe<AgendaTabRecord>;
  /** Returns a collection of records */
  allAcategories: Array<AcategoryRecord>;
  /** Returns a collection of records */
  allAgendaTabs: Array<AgendaTabRecord>;
  /** Returns a collection of records */
  allAtags: Array<AtagRecord>;
  /** Returns a collection of records */
  allAuthors: Array<AuthorRecord>;
  /** Returns a collection of records */
  allAwards: Array<AwardRecord>;
  /** Returns a collection of records */
  allCategoryAwards: Array<CategoryAwardRecord>;
  /** Returns a collection of records */
  allChangeLogs: Array<ChangeLogRecord>;
  /** Returns a collection of records */
  allDateTags: Array<DateTagRecord>;
  /** Returns a collection of records */
  allDocumentationPages: Array<DocumentationPageRecord>;
  /** Returns a collection of records */
  allLegalPages: Array<LegalPageRecord>;
  /** Returns a collection of records */
  allMembers: Array<MemberRecord>;
  /** Returns a collection of records */
  allPages: Array<PageRecord>;
  /** Returns a collection of records */
  allPosts: Array<PostRecord>;
  /** Returns a collection of records */
  allPricingTiers: Array<PricingTierRecord>;
  /** Returns a collection of records */
  allSocialFeeds: Array<SocialFeedRecord>;
  /** Returns a collection of records */
  allSpeakers: Array<SpeakerRecord>;
  /** Returns a collection of records */
  allStages: Array<StageRecord>;
  /** Returns a collection of records */
  allTags: Array<TagRecord>;
  /** Returns a collection of records */
  allTalks: Array<TalkRecord>;
  /** Returns a collection of records */
  allTestimonials: Array<TestimonialRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a specific record */
  atag?: Maybe<AtagRecord>;
  /** Returns a specific record */
  author?: Maybe<AuthorRecord>;
  /** Returns a specific record */
  award?: Maybe<AwardRecord>;
  /** Returns a specific record */
  categoryAward?: Maybe<CategoryAwardRecord>;
  /** Returns a specific record */
  changeLog?: Maybe<ChangeLogRecord>;
  /** Returns a specific record */
  dateTag?: Maybe<DateTagRecord>;
  /** Returns the single instance record */
  documentationHome?: Maybe<DocumentationHomeRecord>;
  /** Returns a specific record */
  documentationPage?: Maybe<DocumentationPageRecord>;
  /** Returns the single instance record */
  layout?: Maybe<LayoutRecord>;
  /** Returns a specific record */
  legalPage?: Maybe<LegalPageRecord>;
  /** Returns a specific record */
  member?: Maybe<MemberRecord>;
  /** Returns a specific record */
  page?: Maybe<PageRecord>;
  /** Returns a specific record */
  post?: Maybe<PostRecord>;
  /** Returns a specific record */
  pricingTier?: Maybe<PricingTierRecord>;
  /** Returns a specific record */
  socialFeed?: Maybe<SocialFeedRecord>;
  /** Returns a specific record */
  speaker?: Maybe<SpeakerRecord>;
  /** Returns a specific record */
  stage?: Maybe<StageRecord>;
  /** Returns a specific record */
  tag?: Maybe<TagRecord>;
  /** Returns a specific record */
  talk?: Maybe<TalkRecord>;
  /** Returns a specific record */
  testimonial?: Maybe<TestimonialRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
};


/** The query root for this schema */
export type Query_AllAcategoriesMetaArgs = {
  filter?: InputMaybe<AcategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllAgendaTabsMetaArgs = {
  filter?: InputMaybe<AgendaTabModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllAtagsMetaArgs = {
  filter?: InputMaybe<AtagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllAuthorsMetaArgs = {
  filter?: InputMaybe<AuthorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllAwardsMetaArgs = {
  filter?: InputMaybe<AwardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCategoryAwardsMetaArgs = {
  filter?: InputMaybe<CategoryAwardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllChangeLogsMetaArgs = {
  filter?: InputMaybe<ChangeLogModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllDateTagsMetaArgs = {
  filter?: InputMaybe<DateTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllDocumentationPagesMetaArgs = {
  filter?: InputMaybe<DocumentationPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllLegalPagesMetaArgs = {
  filter?: InputMaybe<LegalPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMembersMetaArgs = {
  filter?: InputMaybe<MemberModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPostsMetaArgs = {
  filter?: InputMaybe<PostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPricingTiersMetaArgs = {
  filter?: InputMaybe<PricingTierModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllSocialFeedsMetaArgs = {
  filter?: InputMaybe<SocialFeedModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllSpeakersMetaArgs = {
  filter?: InputMaybe<SpeakerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllStagesMetaArgs = {
  filter?: InputMaybe<StageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTagsMetaArgs = {
  filter?: InputMaybe<TagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTalksMetaArgs = {
  filter?: InputMaybe<TalkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTestimonialsMetaArgs = {
  filter?: InputMaybe<TestimonialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAcategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AcategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AcategoryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAgendaTabArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AgendaTabModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AgendaTabModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAllAcategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AcategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AcategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllAgendaTabsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AgendaTabModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AgendaTabModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllAtagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AtagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AtagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllAuthorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AuthorModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllAwardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AwardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AwardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCategoryAwardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryAwardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryAwardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllChangeLogsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ChangeLogModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ChangeLogModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllDateTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DateTagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DateTagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllDocumentationPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DocumentationPageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DocumentationPageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllLegalPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LegalPageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LegalPageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMembersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MemberModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MemberModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPostsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PostModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPricingTiersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PricingTierModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PricingTierModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllSocialFeedsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SocialFeedModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SocialFeedModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllSpeakersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SpeakerModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SpeakerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllStagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllTalksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TalkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TalkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllTestimonialsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TestimonialModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TestimonialModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAtagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AtagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AtagModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAuthorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AuthorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthorModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAwardArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AwardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AwardModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCategoryAwardArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryAwardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryAwardModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryChangeLogArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ChangeLogModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ChangeLogModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryDateTagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DateTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DateTagModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryDocumentationHomeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryDocumentationPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DocumentationPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DocumentationPageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryLayoutArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryLegalPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LegalPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LegalPageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryMemberArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MemberModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MemberModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPostArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPricingTierArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PricingTierModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PricingTierModelOrderBy>>>;
};


/** The query root for this schema */
export type QuerySocialFeedArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SocialFeedModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SocialFeedModelOrderBy>>>;
};


/** The query root for this schema */
export type QuerySpeakerArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SpeakerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SpeakerModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryStageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TagModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTalkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TalkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TalkModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTestimonialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TestimonialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TestimonialModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

export type QuestionModelAnswerBlocksField = CtaButtonWithImageRecord | NewsletterSubscriptionRecord;

export type QuestionModelAnswerField = {
  __typename?: 'QuestionModelAnswerField';
  blocks: Array<QuestionModelAnswerBlocksField>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type ❓Question (question) */
export type QuestionRecord = RecordInterface & {
  __typename?: 'QuestionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  answer: QuestionModelAnswerField;
  id: Scalars['ItemId']['output'];
  question: Scalars['String']['output'];
};


/** Block of type ❓Question (question) */
export type QuestionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type RecordInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🔄 Redirect Section (redirect_section) */
export type RedirectSectionRecord = RecordInterface & {
  __typename?: 'RedirectSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slugToRedirectTo: Scalars['String']['output'];
};


/** Block of type 🔄 Redirect Section (redirect_section) */
export type RedirectSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['FloatType']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  height: Scalars['IntType']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  webpSrcSet: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

/** Block of type 💬 Testimonials Section (review_section) */
export type ReviewSectionRecord = RecordInterface & {
  __typename?: 'ReviewSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOptions: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  reviewSectionHeader: Scalars['String']['output'];
  reviewSectionSubheader?: Maybe<Scalars['String']['output']>;
  reviews: Array<TestimonialRecord>;
};


/** Block of type 💬 Testimonials Section (review_section) */
export type ReviewSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 💬 Testimonials Section (review_section) */
export type ReviewSectionRecordReviewSectionSubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Schedule (schedule) */
export type ScheduleRecord = RecordInterface & {
  __typename?: 'ScheduleRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  scheduleItems: Array<TalkRecord>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Block of type Schedule (schedule) */
export type ScheduleRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Schedule (schedule) */
export type ScheduleRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
};

export type SeoFieldMultiLocaleField = {
  __typename?: 'SeoFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<SeoField>;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
};


export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
  De = 'de',
  En = 'en',
  Es = 'es',
  Fr = 'fr',
  It = 'it',
  Pt = 'pt',
  Ru = 'ru',
  Sv = 'sv'
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SocialFeedModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SocialFeedModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialFeedModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  iframe?: InputMaybe<StringFilter>;
};

export enum SocialFeedModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IframeAsc = 'iframe_ASC',
  IframeDesc = 'iframe_DESC'
}

/** Record of type Social Feed (social_feed) */
export type SocialFeedRecord = RecordInterface & {
  __typename?: 'SocialFeedRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  iframe?: Maybe<Scalars['String']['output']>;
};


/** Record of type Social Feed (social_feed) */
export type SocialFeedRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🌐 Social Media Icon (social_media_icon) */
export type SocialMediaIconRecord = RecordInterface & {
  __typename?: 'SocialMediaIconRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  icon: FileField;
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};


/** Block of type 🌐 Social Media Icon (social_media_icon) */
export type SocialMediaIconRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Spacer (spacer) */
export type SpacerRecord = RecordInterface & {
  __typename?: 'SpacerRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  extraMargin?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  space: Scalars['String']['output'];
};


/** Block of type Spacer (spacer) */
export type SpacerRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type SpeakerModelBiographyBlocksField = AppCtaRecord | CtaButtonWithImageRecord | ImageBlockRecord | NewsletterSubscriptionRecord;

export type SpeakerModelBiographyField = {
  __typename?: 'SpeakerModelBiographyField';
  blocks: Array<SpeakerModelBiographyBlocksField>;
  links: Array<TalkRecord>;
  value: Scalars['JsonField']['output'];
};

/** Linking fields */
export enum SpeakerModelFieldsReferencingTalkModel {
  SpeakerBiography = 'speaker_biography',
  SpeakerTalk = 'speaker_talk'
}

export type SpeakerModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SpeakerModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SpeakerModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  biography?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  jobTitle?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  picture?: InputMaybe<FileFilter>;
  slug?: InputMaybe<SlugFilter>;
  talk?: InputMaybe<LinksFilter>;
};

export enum SpeakerModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type 👩‍🏫 Speaker (speaker) */
export type SpeakerRecord = RecordInterface & {
  __typename?: 'SpeakerRecord';
  _allJobTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allReferencingPages: Array<PageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPagesMeta: CollectionMetadata;
  _allReferencingTalks: Array<TalkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingTalksMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  biography: SpeakerModelBiographyField;
  id: Scalars['ItemId']['output'];
  jobTitle: Scalars['String']['output'];
  name: Scalars['String']['output'];
  picture: FileField;
  slug: Scalars['String']['output'];
  talk: Array<TalkRecord>;
};


/** Record of type 👩‍🏫 Speaker (speaker) */
export type SpeakerRecord_AllJobTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 👩‍🏫 Speaker (speaker) */
export type SpeakerRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 👩‍🏫 Speaker (speaker) */
export type SpeakerRecord_AllReferencingPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndSpeaker>;
};


/** Record of type 👩‍🏫 Speaker (speaker) */
export type SpeakerRecord_AllReferencingPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndSpeaker>;
};


/** Record of type 👩‍🏫 Speaker (speaker) */
export type SpeakerRecord_AllReferencingTalksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TalkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TalkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenTalkAndSpeaker>;
};


/** Record of type 👩‍🏫 Speaker (speaker) */
export type SpeakerRecord_AllReferencingTalksMetaArgs = {
  filter?: InputMaybe<TalkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenTalkAndSpeaker>;
};


/** Record of type 👩‍🏫 Speaker (speaker) */
export type SpeakerRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 👩‍🏫 Speaker (speaker) */
export type SpeakerRecordJobTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 👩‍🏫 Speaker (speaker) */
export type SpeakerRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 👥 Speaker Section (speaker_section) */
export type SpeakerSectionRecord = RecordInterface & {
  __typename?: 'SpeakerSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOptions: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  showcasedSpeakers: Array<SpeakerRecord>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Block of type 👥 Speaker Section (speaker_section) */
export type SpeakerSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 👥 Speaker Section (speaker_section) */
export type SpeakerSectionRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SpeakersIntroModelIntroductionTextField = {
  __typename?: 'SpeakersIntroModelIntroductionTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type 💁 Speakers Intro (speakers_intro) */
export type SpeakersIntroRecord = RecordInterface & {
  __typename?: 'SpeakersIntroRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  header: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  introductionText?: Maybe<SpeakersIntroModelIntroductionTextField>;
  preHeader?: Maybe<Scalars['String']['output']>;
  subheader?: Maybe<Scalars['String']['output']>;
};


/** Block of type 💁 Speakers Intro (speakers_intro) */
export type SpeakersIntroRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 💁 Speakers Intro (speakers_intro) */
export type SpeakersIntroRecordSubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Linking fields */
export enum StageModelFieldsReferencingTalkModel {
  StageTalk = 'stage_talk'
}

export type StageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<StageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  iframeUrl?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  seoAnalysis?: InputMaybe<JsonFilter>;
  seoTags?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  streamKey?: InputMaybe<StringFilter>;
  talk?: InputMaybe<LinksFilter>;
};

export enum StageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IframeUrlAsc = 'iframeUrl_ASC',
  IframeUrlDesc = 'iframeUrl_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StreamKeyAsc = 'streamKey_ASC',
  StreamKeyDesc = 'streamKey_DESC'
}

/** Record of type 🎥 Stage (stage) */
export type StageRecord = RecordInterface & {
  __typename?: 'StageRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allReferencingTalks: Array<TalkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingTalksMeta: CollectionMetadata;
  _allTalkLocales?: Maybe<Array<TalkRecordListListNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  iframeUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  seoAnalysis?: Maybe<Scalars['JsonField']['output']>;
  seoTags?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  streamKey?: Maybe<Scalars['String']['output']>;
  talk: Array<TalkRecord>;
};


/** Record of type 🎥 Stage (stage) */
export type StageRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 🎥 Stage (stage) */
export type StageRecord_AllReferencingTalksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TalkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TalkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenTalkAndStage>;
};


/** Record of type 🎥 Stage (stage) */
export type StageRecord_AllReferencingTalksMetaArgs = {
  filter?: InputMaybe<TalkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenTalkAndStage>;
};


/** Record of type 🎥 Stage (stage) */
export type StageRecord_AllTalkLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 🎥 Stage (stage) */
export type StageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🎥 Stage (stage) */
export type StageRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🎥 Stage (stage) */
export type StageRecordTalkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Stage Talks List (stage_scehdule_item) */
export type StageScehduleItemRecord = RecordInterface & {
  __typename?: 'StageScehduleItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  featuredTalksHeading: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  talks: Array<TalkRecord>;
};


/** Block of type Stage Talks List (stage_scehdule_item) */
export type StageScehduleItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📈 Stat (statistic) */
export type StatisticRecord = RecordInterface & {
  __typename?: 'StatisticRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  icon: FileField;
  id: Scalars['ItemId']['output'];
  label: Scalars['String']['output'];
  quantity: Scalars['IntType']['output'];
};


/** Block of type 📈 Stat (statistic) */
export type StatisticRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📈 Stats Section (stats_section) */
export type StatsSectionRecord = RecordInterface & {
  __typename?: 'StatsSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  statistic: Array<StatisticRecord>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Block of type 📈 Stats Section (stats_section) */
export type StatsSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📈 Stats Section (stats_section) */
export type StatsSectionRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Block of type ▶️  Stream Player (stream_player) */
export type StreamPlayerRecord = RecordInterface & {
  __typename?: 'StreamPlayerRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  videoPlayer: Scalars['String']['output'];
};


/** Block of type ▶️  Stream Player (stream_player) */
export type StreamPlayerRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type ▶️  Stream Player (stream_player) */
export type StreamPlayerRecordVideoPlayerArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
  pattern: Scalars['String']['input'];
  regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Scalars['String']['output']>;
};

export type StringNonNullMultiLocaleField = {
  __typename?: 'StringNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Scalars['String']['output'];
};

/** Specifies how to filter Structured Text fields values */
export type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
};

export type TagModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TagModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TagModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  tag?: InputMaybe<StringFilter>;
};

export enum TagModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TagAsc = 'tag_ASC',
  TagDesc = 'tag_DESC'
}

/** Record of type 🏷️ Tag (tag) */
export type TagRecord = RecordInterface & {
  __typename?: 'TagRecord';
  _allReferencingPosts: Array<PostRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPostsMeta: CollectionMetadata;
  _allTagLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slug: Scalars['String']['output'];
  tag: Scalars['String']['output'];
};


/** Record of type 🏷️ Tag (tag) */
export type TagRecord_AllReferencingPostsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PostModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPostAndTag>;
};


/** Record of type 🏷️ Tag (tag) */
export type TagRecord_AllReferencingPostsMetaArgs = {
  filter?: InputMaybe<PostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPostAndTag>;
};


/** Record of type 🏷️ Tag (tag) */
export type TagRecord_AllTagLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 🏷️ Tag (tag) */
export type TagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏷️ Tag (tag) */
export type TagRecordTagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type TalkModelContentBlocksField = AppCtaRecord | CtaButtonWithImageRecord | ImageBlockRecord | NewsletterSubscriptionRecord;

export type TalkModelContentField = {
  __typename?: 'TalkModelContentField';
  blocks: Array<TalkModelContentBlocksField>;
  links: Array<TalkRecord>;
  value: Scalars['JsonField']['output'];
};

export type TalkModelContentFieldNonNullMultiLocaleField = {
  __typename?: 'TalkModelContentFieldNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: TalkModelContentField;
};

/** Linking fields */
export enum TalkModelFieldsReferencingDateTagModel {
  TalkDateTags = 'talk_dateTags'
}

/** Linking fields */
export enum TalkModelFieldsReferencingSpeakerModel {
  TalkSpeaker = 'talk_speaker'
}

/** Linking fields */
export enum TalkModelFieldsReferencingStageModel {
  TalkStage = 'talk_stage'
}

/** Linking fields */
export enum TalkModelFieldsReferencingTalkModel {
  TalkContent = 'talk_content'
}

export type TalkModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TalkModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TalkModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  agendaTag?: InputMaybe<LinksFilter>;
  buttonName?: InputMaybe<StringFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  dateTags?: InputMaybe<LinksFilter>;
  end?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<ItemIdFilter>;
  pageType?: InputMaybe<StringFilter>;
  seoAnalysis?: InputMaybe<JsonFilter>;
  seoTags?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  speaker?: InputMaybe<LinksFilter>;
  stage?: InputMaybe<LinkFilter>;
  start?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum TalkModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  ButtonNameAsc = 'buttonName_ASC',
  ButtonNameDesc = 'buttonName_DESC',
  EndAsc = 'end_ASC',
  EndDesc = 'end_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PageTypeAsc = 'pageType_ASC',
  PageTypeDesc = 'pageType_DESC',
  StartAsc = 'start_ASC',
  StartDesc = 'start_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TalkModelStageField = PageRecord | StageRecord;

/** Record of type 🕟 Talk (talk) */
export type TalkRecord = RecordInterface & {
  __typename?: 'TalkRecord';
  _allContentLocales?: Maybe<Array<TalkModelContentFieldNonNullMultiLocaleField>>;
  _allReferencingAgendaTabs: Array<AgendaTabRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAgendaTabsMeta: CollectionMetadata;
  _allReferencingSpeakers: Array<SpeakerRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSpeakersMeta: CollectionMetadata;
  _allReferencingStages: Array<StageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingStagesMeta: CollectionMetadata;
  _allReferencingTalks: Array<TalkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingTalksMeta: CollectionMetadata;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  agendaTag: Array<AgendaTabRecord>;
  buttonName: Scalars['String']['output'];
  content: TalkModelContentField;
  dateTags: Array<DateTagRecord>;
  end?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ItemId']['output'];
  pageType: Scalars['String']['output'];
  seoAnalysis?: Maybe<Scalars['JsonField']['output']>;
  seoTags?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  speaker: Array<SpeakerRecord>;
  stage: TalkModelStageField;
  start: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
};


/** Record of type 🕟 Talk (talk) */
export type TalkRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 🕟 Talk (talk) */
export type TalkRecord_AllReferencingAgendaTabsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AgendaTabModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AgendaTabModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAgendaTabAndTalk>;
};


/** Record of type 🕟 Talk (talk) */
export type TalkRecord_AllReferencingAgendaTabsMetaArgs = {
  filter?: InputMaybe<AgendaTabModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAgendaTabAndTalk>;
};


/** Record of type 🕟 Talk (talk) */
export type TalkRecord_AllReferencingSpeakersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SpeakerModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SpeakerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSpeakerAndTalk>;
};


/** Record of type 🕟 Talk (talk) */
export type TalkRecord_AllReferencingSpeakersMetaArgs = {
  filter?: InputMaybe<SpeakerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSpeakerAndTalk>;
};


/** Record of type 🕟 Talk (talk) */
export type TalkRecord_AllReferencingStagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenStageAndTalk>;
};


/** Record of type 🕟 Talk (talk) */
export type TalkRecord_AllReferencingStagesMetaArgs = {
  filter?: InputMaybe<StageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenStageAndTalk>;
};


/** Record of type 🕟 Talk (talk) */
export type TalkRecord_AllReferencingTalksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TalkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TalkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenTalkAndTalk>;
};


/** Record of type 🕟 Talk (talk) */
export type TalkRecord_AllReferencingTalksMetaArgs = {
  filter?: InputMaybe<TalkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenTalkAndTalk>;
};


/** Record of type 🕟 Talk (talk) */
export type TalkRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 🕟 Talk (talk) */
export type TalkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🕟 Talk (talk) */
export type TalkRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🕟 Talk (talk) */
export type TalkRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type TalkRecordListListNonNullMultiLocaleField = {
  __typename?: 'TalkRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<TalkRecord>;
};

/** Block of type 👥 Team Section (team_section) */
export type TeamSectionRecord = RecordInterface & {
  __typename?: 'TeamSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOptions: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  showcasedMembers: Array<AuthorRecord>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Block of type 👥 Team Section (team_section) */
export type TeamSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 👥 Team Section (team_section) */
export type TeamSectionRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestimonialModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestimonialModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  rating?: InputMaybe<IntegerFilter>;
  review?: InputMaybe<StructuredTextFilter>;
  reviewerName?: InputMaybe<StringFilter>;
  reviewerPicture?: InputMaybe<FileFilter>;
  reviewerTitle?: InputMaybe<StringFilter>;
};

export enum TestimonialModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  ReviewerNameAsc = 'reviewerName_ASC',
  ReviewerNameDesc = 'reviewerName_DESC',
  ReviewerTitleAsc = 'reviewerTitle_ASC',
  ReviewerTitleDesc = 'reviewerTitle_DESC'
}

export type TestimonialModelReviewField = {
  __typename?: 'TestimonialModelReviewField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

export type TestimonialModelReviewFieldNonNullMultiLocaleField = {
  __typename?: 'TestimonialModelReviewFieldNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: TestimonialModelReviewField;
};

/** Record of type ⭐️ Testimonial (testimonial) */
export type TestimonialRecord = RecordInterface & {
  __typename?: 'TestimonialRecord';
  _allReviewLocales?: Maybe<Array<TestimonialModelReviewFieldNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  rating: Scalars['IntType']['output'];
  review: TestimonialModelReviewField;
  reviewerName: Scalars['String']['output'];
  reviewerPicture: ImageFileField;
  reviewerTitle?: Maybe<Scalars['String']['output']>;
};


/** Record of type ⭐️ Testimonial (testimonial) */
export type TestimonialRecord_AllReviewLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type ⭐️ Testimonial (testimonial) */
export type TestimonialRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type ⭐️ Testimonial (testimonial) */
export type TestimonialRecordReviewArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC'
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square'
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video'
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadVideoField = {
  __typename?: 'UploadVideoField';
  alt?: Maybe<Scalars['String']['output']>;
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  height: Scalars['IntType']['output'];
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbhash?: Maybe<Scalars['String']['output']>;
  thumbnailUrl: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  width: Scalars['IntType']['output'];
};


export type UploadVideoFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type UploadVideoFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};


export type UploadVideoFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Block of type Video Block (video_block) */
export type VideoBlockRecord = RecordInterface & {
  __typename?: 'VideoBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  videoIframeUrl: Scalars['String']['output'];
};


/** Block of type Video Block (video_block) */
export type VideoBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type VideoField = {
  __typename?: 'VideoField';
  height: Scalars['IntType']['output'];
  provider: Scalars['String']['output'];
  providerUid: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

/** Block of type 📹 Video Section (video_section) */
export type VideoSectionRecord = RecordInterface & {
  __typename?: 'VideoSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  video: VideoField;
  videoHeader: Scalars['String']['output'];
  videoSubheader?: Maybe<Scalars['String']['output']>;
  videoThumbnail: ImageFileField;
};


/** Block of type 📹 Video Section (video_section) */
export type VideoSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📹 Video Section (video_section) */
export type VideoSectionRecordVideoSubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FocalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType']['output'];
  y: Scalars['FloatType']['output'];
};

export type AboutQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type AboutQuery = { __typename?: 'Query', page?: { __typename?: 'PageRecord', sections: Array<{ __typename?: 'AboutIntroRecord', id: string, _modelApiKey: string, preHeader?: string | null, header: string, subheader?: string | null, introductionText?: { __typename?: 'AboutIntroModelIntroductionTextField', value: unknown } | null, images: Array<{ __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } }> } | { __typename?: 'AllAgendaTabsSectionRecord' } | { __typename?: 'AllCategoryAwardsSectionRecord' } | { __typename?: 'BannerBlockRecord' } | { __typename?: 'BrandSectionRecord' } | { __typename?: 'ChangelogSectionRecord' } | { __typename?: 'DetailSectionRecord' } | { __typename?: 'EmptyHeroSectionRecord' } | { __typename?: 'FaqSectionRecord', _modelApiKey: string, displayOptions: string, id: string, title: string, subtitle?: string | null, questions: Array<{ __typename?: 'QuestionRecord', question: string, id: string, answer: { __typename?: 'QuestionModelAnswerField', value: unknown } }> } | { __typename?: 'FeatureListSectionRecord' } | { __typename?: 'FeaturedAcategorySectionRecord' } | { __typename?: 'FeaturedPostsSectionRecord' } | { __typename?: 'HeroSectionRecord' } | { __typename?: 'IframeBlockRecord' } | { __typename?: 'IvsLiveStageRecord' } | { __typename?: 'MuxLiveStreamRecord' } | { __typename?: 'PricingSectionRecord' } | { __typename?: 'RedirectSectionRecord' } | { __typename?: 'ReviewSectionRecord' } | { __typename?: 'SpacerRecord' } | { __typename?: 'SpeakerSectionRecord' } | { __typename?: 'SpeakersIntroRecord' } | { __typename?: 'StatsSectionRecord', _modelApiKey: string, id: string, title: string, subtitle?: string | null, statistic: Array<{ __typename?: 'StatisticRecord', id: string, label: string, quantity: number, icon: { __typename?: 'FileField', url: string } }> } | { __typename?: 'TeamSectionRecord', _modelApiKey: string, id: string, displayOptions: string, title: string, subtitle?: string | null, showcasedMembers: Array<{ __typename?: 'AuthorRecord', name: string, id: string, slug: string, bio: string, description: string, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } } }> } | { __typename?: 'VideoBlockRecord' } | { __typename?: 'VideoSectionRecord' }> } | null };

export type AgendaTabQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  first?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type AgendaTabQuery = { __typename?: 'Query', allAgendaTabs: Array<{ __typename?: 'AgendaTabRecord', _publishedAt?: string | null, date: string, title: string, id: string, talk: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, content: { __typename?: 'TalkModelContentField', value: unknown, links: Array<{ __typename: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, dateTags: Array<{ __typename?: 'DateTagRecord', eventDate: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, biography: { __typename?: 'SpeakerModelBiographyField', value: unknown, links: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }> }>, _allAgendaTabsMeta: { __typename?: 'CollectionMetadata', count: number } };

export type AuthorQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type AuthorQuery = { __typename?: 'Query', author?: { __typename?: 'AuthorRecord', name: string, bio: string, description: string, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } }, _allReferencingPosts: Array<{ __typename?: 'PostRecord', _publishedAt?: string | null, slug: string, id: string, title: string, tags: Array<{ __typename?: 'TagRecord', tag: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, author?: { __typename?: 'AuthorRecord', name: string, bio: string, slug: string, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } } } | null }>, _allReferencingPostsMeta: { __typename?: 'CollectionMetadata', count: number } } | null };

export type AwardQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type AwardQuery = { __typename?: 'Query', award?: { __typename?: 'AwardRecord', _publishedAt?: string | null, title: string, jobTitle?: string | null, iframe?: string | null, acategory?: { __typename?: 'AcategoryRecord', name: string, bio?: string | null, slug: string, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } } } | null, atags: Array<{ __typename?: 'AtagRecord', id: string, atag: string, slug: string }>, biography: { __typename?: 'AwardModelBiographyField', value: unknown, links: Array<{ __typename: 'AwardRecord', _publishedAt?: string | null, slug: string, id: string, title: string, atags: Array<{ __typename?: 'AtagRecord', atag: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, acategory?: { __typename?: 'AcategoryRecord', name: string, bio?: string | null, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } } } | null }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'GalleryRecord', id: string, imageGallery: Array<{ __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } }> } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, content: { __typename?: 'AwardModelContentField', value: unknown, links: Array<{ __typename: 'AwardRecord', _publishedAt?: string | null, slug: string, id: string, title: string, atags: Array<{ __typename?: 'AtagRecord', atag: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, acategory?: { __typename?: 'AcategoryRecord', name: string, bio?: string | null, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } } } | null }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'GalleryRecord', id: string, imageGallery: Array<{ __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } }> } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'MuxVideoRecord', id: string, streamType: string, playbackId: string, placeholderUrl?: string | null } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> } } | null, allAtags: Array<{ __typename?: 'AtagRecord', id: string, atag: string, slug: string }> };

export type AwardCategoryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type AwardCategoryQuery = { __typename?: 'Query', acategory?: { __typename?: 'AcategoryRecord', name: string, bio?: string | null, description: string, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } }, _allReferencingAwards: Array<{ __typename?: 'AwardRecord', _publishedAt?: string | null, slug: string, id: string, title: string, jobTitle?: string | null, atags: Array<{ __typename?: 'AtagRecord', atag: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, acategory?: { __typename?: 'AcategoryRecord', name: string, bio?: string | null, slug: string, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } } } | null }>, _allReferencingAwardsMeta: { __typename?: 'CollectionMetadata', count: number } } | null };

export type AwardsQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type AwardsQuery = { __typename?: 'Query', allAwards: Array<{ __typename?: 'AwardRecord', _publishedAt?: string | null, slug: string, id: string, title: string, jobTitle?: string | null, atags: Array<{ __typename?: 'AtagRecord', atag: string, slug: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, acategory?: { __typename?: 'AcategoryRecord', name: string, slug: string, bio?: string | null, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } } } | null }>, _allAwardsMeta: { __typename?: 'CollectionMetadata', count: number } };

export type AwardTagQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type AwardTagQuery = { __typename?: 'Query', atag?: { __typename?: 'AtagRecord', atag: string, _allReferencingAwards: Array<{ __typename?: 'AwardRecord', _publishedAt?: string | null, slug: string, id: string, title: string, jobTitle?: string | null, atags: Array<{ __typename?: 'AtagRecord', atag: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, acategory?: { __typename?: 'AcategoryRecord', name: string, bio?: string | null, slug: string, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } } } | null }>, _allReferencingAwardsMeta: { __typename?: 'CollectionMetadata', count: number } } | null };

export type CategoryAwardQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type CategoryAwardQuery = { __typename?: 'Query', allCategoryAwards: Array<{ __typename?: 'CategoryAwardRecord', _publishedAt?: string | null, title: string, id: string, category?: { __typename?: 'AcategoryRecord', name: string, slug: string, bio?: string | null, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } } } | null, award: Array<{ __typename?: 'AwardRecord', _publishedAt?: string | null, slug: string, id: string, title: string, jobTitle?: string | null, atags: Array<{ __typename?: 'AtagRecord', atag: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, acategory?: { __typename?: 'AcategoryRecord', name: string, slug: string, bio?: string | null, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } } } | null }> }>, _allCategoryAwardsMeta: { __typename?: 'CollectionMetadata', count: number } };

export type ChangelogQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type ChangelogQuery = { __typename?: 'Query', changeLog?: { __typename?: 'ChangeLogRecord', timeOfRelease: string, versionName: string, slug: string, content: { __typename?: 'ChangeLogModelContentField', value: unknown } } | null };

export type CustomColorQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomColorQuery = { __typename?: 'Query', layout?: { __typename?: 'LayoutRecord', mainColor: { __typename?: 'ColorField', red: number, blue: number, green: number } } | null };

export type DatetagQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type DatetagQuery = { __typename?: 'Query', dateTag?: { __typename?: 'DateTagRecord', eventDate: string, _allReferencingTalks: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, dateTags: Array<{ __typename?: 'DateTagRecord', eventDate: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, biography: { __typename?: 'SpeakerModelBiographyField', value: unknown, links: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, _allReferencingTalksMeta: { __typename?: 'CollectionMetadata', count: number } } | null };

export type DocumentationHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type DocumentationHomePageQuery = { __typename?: 'Query', documentationHome?: { __typename?: 'DocumentationHomeRecord', title: string, subheader?: string | null, _modelApiKey: string, id: string, featuredPages: Array<{ __typename?: 'DocumentationPageRecord', id: string, _modelApiKey: string, title: string, subtitle?: string | null, slug: string }> } | null };

export type DocumentationPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type DocumentationPageQuery = { __typename?: 'Query', documentationPage?: { __typename?: 'DocumentationPageRecord', title: string, _modelApiKey: string, id: string, content: { __typename?: 'DocumentationPageModelContentField', value: unknown } } | null };

export type DocumentationSidebarQueryVariables = Exact<{ [key: string]: never; }>;


export type DocumentationSidebarQuery = { __typename?: 'Query', allDocumentationPages: Array<{ __typename?: 'DocumentationPageRecord', title: string, subtitle?: string | null, slug: string, id: string, _modelApiKey: string, children: Array<{ __typename?: 'DocumentationPageRecord', title: string, subtitle?: string | null, slug: string, id: string, _modelApiKey: string, content: { __typename?: 'DocumentationPageModelContentField', value: unknown }, children: Array<{ __typename?: 'DocumentationPageRecord', title: string, subtitle?: string | null, slug: string, id: string, _modelApiKey: string, content: { __typename?: 'DocumentationPageModelContentField', value: unknown }, children: Array<{ __typename?: 'DocumentationPageRecord', title: string, subtitle?: string | null, slug: string, id: string, _modelApiKey: string, content: { __typename?: 'DocumentationPageModelContentField', value: unknown }, children: Array<{ __typename?: 'DocumentationPageRecord', title: string, subtitle?: string | null, slug: string, id: string, _modelApiKey: string, content: { __typename?: 'DocumentationPageModelContentField', value: unknown } }> }> }> }> }>, documentationHome?: { __typename?: 'DocumentationHomeRecord', footerText?: string | null, logo: { __typename?: 'FileField', url: string, width?: number | null, height?: number | null } } | null };

export type FooterQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type FooterQuery = { __typename?: 'Query', layout?: { __typename?: 'LayoutRecord', footerSubtitle?: string | null, footerLogo?: { __typename?: 'FileField', url: string, height?: number | null, width?: number | null } | null, socialMediaLinks: Array<{ __typename?: 'SocialMediaIconRecord', url: string, name?: string | null, id: string, icon: { __typename?: 'FileField', url: string, height?: number | null, width?: number | null } }>, footerLinks: Array<{ __typename?: 'LegalPageRecord', id: string, slug: string, title: string }> } | null };

export type LegalQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type LegalQuery = { __typename?: 'Query', legalPage?: { __typename?: 'LegalPageRecord', content: { __typename?: 'LegalPageModelContentField', value: unknown } } | null };

export type LocalesQueryVariables = Exact<{ [key: string]: never; }>;


export type LocalesQuery = { __typename?: 'Query', _site: { __typename?: 'Site', locales: Array<SiteLocale> } };

export type MemberQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type MemberQuery = { __typename?: 'Query', member?: { __typename?: 'MemberRecord', _publishedAt?: string | null, iframeUrl?: string | null } | null };

export type MenuQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type MenuQuery = { __typename?: 'Query', layout?: { __typename?: 'LayoutRecord', logo: { __typename?: 'FileField', url: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } | null }, menu: Array<{ __typename?: 'CircleMenuItemRecord', id: string, _modelApiKey: string, title: string, redirectUrl: string } | { __typename?: 'MenuDropdownRecord', id: string, title: string, _modelApiKey: string, items: Array<{ __typename?: 'MenuItemRecord', id: string, title: string, _modelApiKey: string, page: { __typename?: 'PageRecord', slug: string } }> } | { __typename?: 'MenuItemRecord', id: string, title: string, _modelApiKey: string, page: { __typename?: 'PageRecord', slug: string } }>, notification?: { __typename?: 'LayoutModelNotificationField', value: unknown } | null } | null, _site: { __typename?: 'Site', locales: Array<SiteLocale> } };

export type DatoImage_ResponsiveImageFragment = { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null };

export type PageQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type PageQuery = { __typename?: 'Query', page?: { __typename?: 'PageRecord', id: string, label: string, _modelApiKey: string, sections: Array<{ __typename?: 'AboutIntroRecord', id: string, _modelApiKey: string, preHeader?: string | null, header: string, subheader?: string | null, introductionText?: { __typename?: 'AboutIntroModelIntroductionTextField', value: unknown } | null, images: Array<{ __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', webpSrcSet: string, src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } }> } | { __typename?: 'AllAgendaTabsSectionRecord' } | { __typename?: 'AllCategoryAwardsSectionRecord' } | { __typename?: 'BannerBlockRecord', _modelApiKey: string, id: string, objectFit: string, layout: string, height: string, width: string, minHeight: string, minHeightDimensionUnit: string, widthDimensionUnit: string, heightDimensionUnit: string, bannerUrl: string, bannerImage: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', webpSrcSet: string, src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } } | { __typename?: 'BrandSectionRecord', _modelApiKey: string, id: string, displayOptions: string, brand: Array<{ __typename?: 'BrandRecord', _modelApiKey: string, brandName: string, brandUrl?: string | null, id: string, brandLogo: { __typename?: 'FileField', url: string } }> } | { __typename?: 'ChangelogSectionRecord', id: string, _modelApiKey: string, subtitle?: string | null, title: string, featuredVersions: Array<{ __typename?: 'ChangeLogRecord', timeOfRelease: string, versionName: string, slug: string, id: string, _modelApiKey: string }> } | { __typename?: 'DetailSectionRecord', _modelApiKey: string, id: string, imagePosition?: boolean | null, details: { __typename?: 'DetailSectionModelDetailsField', value: unknown }, image: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', webpSrcSet: string, src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } } | { __typename?: 'EmptyHeroSectionRecord', _modelApiKey: string, id: string, displayOptions: string, bannerImageDesktop: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', webpSrcSet: string, src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } }, bannerImageTablet: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', webpSrcSet: string, src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } }, bannerImageMobile: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', webpSrcSet: string, src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } } | { __typename?: 'FaqSectionRecord', _modelApiKey: string, displayOptions: string, id: string, title: string, subtitle?: string | null, questions: Array<{ __typename?: 'QuestionRecord', question: string, id: string, answer: { __typename?: 'QuestionModelAnswerField', value: unknown } }> } | { __typename?: 'FeatureListSectionRecord', _modelApiKey: string, id: string, featuresHeader: string, featuresSubheader?: string | null, displayOption: string, feature: Array<{ __typename?: 'FeatureRecord', _modelApiKey: string, id: string, link?: string | null, featureTitle: string, featureDescription: string, featureIcon: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', webpSrcSet: string, src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> } | { __typename?: 'FeaturedAcategorySectionRecord', _modelApiKey: string, id: string, featuredAcategoryHeader: string, featuredAcategorySubheader?: string | null, displayOption: string, featuredAcategory: Array<{ __typename?: 'AcategoryRecord', name: string, slug: string, description: string, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', webpSrcSet: string, src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> } | { __typename?: 'FeaturedPostsSectionRecord', _modelApiKey: string, id: string, featuredPostsHeader: string, featuredPostsSubheader?: string | null, displayOptions: string, featuredPosts: Array<{ __typename?: 'PostRecord', _publishedAt?: string | null, slug: string, id: string, title: string, tags: Array<{ __typename?: 'TagRecord', tag: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', webpSrcSet: string, src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } | null } | null } | null, author?: { __typename?: 'AuthorRecord', name: string, bio: string, slug: string, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', webpSrcSet: string, src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } } | null }> } | { __typename?: 'HeroSectionRecord', _modelApiKey: string, id: string, heroSubtitle?: string | null, heroTitle: string, displayOptions: string, buttons: Array<{ __typename?: 'ButtonRecord', id: string, label: string, primary?: boolean | null, url?: string | null }>, heroImage?: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', webpSrcSet: string, srcSet: string, sizes: string, src: string, width: number, height: number, base64?: string | null, aspectRatio: number, alt?: string | null, title?: string | null } } | null } | { __typename?: 'IframeBlockRecord', _modelApiKey: string, id: string, iframeUrl: string, height: string, width: string, minHeight: string, minHeightDimensionUnit: string, widthDimensionUnit: string, heightDimensionUnit: string, align: string } | { __typename?: 'IvsLiveStageRecord', _modelApiKey: string, id: string, title: string, rtmpUrl: string, iframeUrl: string, iframeHeight: string, iframeWidth: string, iframeMinHeight: string } | { __typename?: 'MuxLiveStreamRecord', _modelApiKey: string, id: string, title: string, playbackId: string, placeholderUrl: string, streamType: string, iframeUrl: string, iframeHeight: string, iframeWidth: string, iframeMinHeight: string } | { __typename?: 'PricingSectionRecord', _modelApiKey: string, id: string, pricingSectionHeader: string, pricingSectionSubheader?: string | null, displayOption: string, plans: Array<{ __typename?: 'PricingTierRecord', id: string, yearlyPrice: number, monthlyPrice: number, tierName: string, slug: string, planFeatures: string, tierDescription: { __typename?: 'PricingTierModelTierDescriptionField', value: unknown } }> } | { __typename?: 'RedirectSectionRecord', id: string, _modelApiKey: string, slugToRedirectTo: string } | { __typename?: 'ReviewSectionRecord', _modelApiKey: string, id: string, reviewSectionHeader: string, reviewSectionSubheader?: string | null, displayOptions: string, reviews: Array<{ __typename?: 'TestimonialRecord', id: string, rating: number, reviewerName: string, reviewerTitle?: string | null, review: { __typename?: 'TestimonialModelReviewField', value: unknown, links: Array<string>, blocks: Array<string> }, reviewerPicture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', webpSrcSet: string, src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> } | { __typename?: 'SpacerRecord', id: string, _modelApiKey: string, space: string, extraMargin?: string | null } | { __typename?: 'SpeakerSectionRecord', _modelApiKey: string, id: string, displayOptions: string, title: string, subtitle?: string | null, showcasedSpeakers: Array<{ __typename?: 'SpeakerRecord', name: string, id: string, slug: string, jobTitle: string, biography: { __typename?: 'SpeakerModelBiographyField', value: unknown, links: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', webpSrcSet: string, src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } | null } }> } | { __typename?: 'SpeakersIntroRecord', id: string, _modelApiKey: string, preHeader?: string | null, header: string, subheader?: string | null, introductionText?: { __typename?: 'SpeakersIntroModelIntroductionTextField', value: unknown } | null } | { __typename?: 'StatsSectionRecord', _modelApiKey: string, id: string, title: string, subtitle?: string | null, statistic: Array<{ __typename?: 'StatisticRecord', id: string, label: string, quantity: number, icon: { __typename?: 'FileField', url: string } }> } | { __typename?: 'TeamSectionRecord', _modelApiKey: string, id: string, displayOptions: string, title: string, subtitle?: string | null, showcasedMembers: Array<{ __typename?: 'AuthorRecord', name: string, id: string, slug: string, bio: string, description: string, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', webpSrcSet: string, src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> } | { __typename?: 'VideoBlockRecord' } | { __typename?: 'VideoSectionRecord', _modelApiKey: string, id: string, videoHeader: string, videoSubheader?: string | null, video: { __typename?: 'VideoField', providerUid: string, provider: string, thumbnailUrl: string }, videoThumbnail: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', webpSrcSet: string, src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> } | null };

export type PostQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type PostQuery = { __typename?: 'Query', post?: { __typename?: 'PostRecord', _publishedAt?: string | null, title: string, author?: { __typename?: 'AuthorRecord', name: string, bio: string, slug: string, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } } } | null, tags: Array<{ __typename?: 'TagRecord', id: string, tag: string, slug: string }>, content: { __typename?: 'PostModelContentField', value: unknown, links: Array<{ __typename: 'PostRecord', _publishedAt?: string | null, slug: string, id: string, title: string, tags: Array<{ __typename?: 'TagRecord', tag: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, author?: { __typename?: 'AuthorRecord', name: string, bio: string, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } } } | null }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> } } | null };

export type PostsQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type PostsQuery = { __typename?: 'Query', allPosts: Array<{ __typename?: 'PostRecord', _publishedAt?: string | null, slug: string, id: string, title: string, tags: Array<{ __typename?: 'TagRecord', tag: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, author?: { __typename?: 'AuthorRecord', name: string, slug: string, bio: string, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } } } | null }>, _allPostsMeta: { __typename?: 'CollectionMetadata', count: number } };

export type SocialFeedQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type SocialFeedQuery = { __typename?: 'Query', socialFeed?: { __typename?: 'SocialFeedRecord', _publishedAt?: string | null, iframe?: string | null } | null };

export type SpeakerQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type SpeakerQuery = { __typename?: 'Query', speaker?: { __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null }, biography: { __typename?: 'SpeakerModelBiographyField', value: unknown, links: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, _allReferencingTalks: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, content: { __typename?: 'TalkModelContentField', value: unknown, links: Array<{ __typename: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, dateTags: Array<{ __typename?: 'DateTagRecord', eventDate: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, biography: { __typename?: 'SpeakerModelBiographyField', value: unknown, links: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, _allReferencingTalksMeta: { __typename?: 'CollectionMetadata', count: number } } | null };

export type SpeakerPageQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type SpeakerPageQuery = { __typename?: 'Query', page?: { __typename?: 'PageRecord', sections: Array<{ __typename?: 'AboutIntroRecord' } | { __typename?: 'AllAgendaTabsSectionRecord' } | { __typename?: 'AllCategoryAwardsSectionRecord' } | { __typename?: 'BannerBlockRecord' } | { __typename?: 'BrandSectionRecord' } | { __typename?: 'ChangelogSectionRecord' } | { __typename?: 'DetailSectionRecord' } | { __typename?: 'EmptyHeroSectionRecord' } | { __typename?: 'FaqSectionRecord', _modelApiKey: string, displayOptions: string, id: string, title: string, subtitle?: string | null, questions: Array<{ __typename?: 'QuestionRecord', question: string, id: string, answer: { __typename?: 'QuestionModelAnswerField', value: unknown } }> } | { __typename?: 'FeatureListSectionRecord' } | { __typename?: 'FeaturedAcategorySectionRecord' } | { __typename?: 'FeaturedPostsSectionRecord' } | { __typename?: 'HeroSectionRecord' } | { __typename?: 'IframeBlockRecord' } | { __typename?: 'IvsLiveStageRecord' } | { __typename?: 'MuxLiveStreamRecord' } | { __typename?: 'PricingSectionRecord' } | { __typename?: 'RedirectSectionRecord' } | { __typename?: 'ReviewSectionRecord' } | { __typename?: 'SpacerRecord' } | { __typename?: 'SpeakerSectionRecord', _modelApiKey: string, id: string, displayOptions: string, title: string, subtitle?: string | null, showcasedSpeakers: Array<{ __typename?: 'SpeakerRecord', name: string, id: string, slug: string, jobTitle: string, biography: { __typename?: 'SpeakerModelBiographyField', value: unknown, links: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> } | { __typename?: 'SpeakersIntroRecord', id: string, _modelApiKey: string, preHeader?: string | null, header: string, subheader?: string | null, introductionText?: { __typename?: 'SpeakersIntroModelIntroductionTextField', value: unknown } | null } | { __typename?: 'StatsSectionRecord', _modelApiKey: string, id: string, title: string, subtitle?: string | null, statistic: Array<{ __typename?: 'StatisticRecord', id: string, label: string, quantity: number, icon: { __typename?: 'FileField', url: string } }> } | { __typename?: 'TeamSectionRecord' } | { __typename?: 'VideoBlockRecord' } | { __typename?: 'VideoSectionRecord' }> } | null };

export type AwardsCategorySlugQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type AwardsCategorySlugQuery = { __typename?: 'Query', allAcategories: Array<{ __typename?: 'AcategoryRecord', _publishedAt?: string | null, slug: string, id: string, name: string }>, _allAcategoriesMeta: { __typename?: 'CollectionMetadata', count: number } };

export type AwardsAtagSlugQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type AwardsAtagSlugQuery = { __typename?: 'Query', allAtags: Array<{ __typename?: 'AtagRecord', _publishedAt?: string | null, slug: string, id: string }>, _allAtagsMeta: { __typename?: 'CollectionMetadata', count: number } };

export type AuthorsSlugQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type AuthorsSlugQuery = { __typename?: 'Query', allAuthors: Array<{ __typename?: 'AuthorRecord', slug: string }> };

export type AwardsSlugQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type AwardsSlugQuery = { __typename?: 'Query', allAwards: Array<{ __typename?: 'AwardRecord', _publishedAt?: string | null, slug: string, id: string, title: string }>, _allAwardsMeta: { __typename?: 'CollectionMetadata', count: number } };

export type ChangeLogSlugQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type ChangeLogSlugQuery = { __typename?: 'Query', allChangeLogs: Array<{ __typename?: 'ChangeLogRecord', slug: string }> };

export type DocumentationSlugQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type DocumentationSlugQuery = { __typename?: 'Query', allDocumentationPages: Array<{ __typename?: 'DocumentationPageRecord', title: string, slug: string }> };

export type PageSlugQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type PageSlugQuery = { __typename?: 'Query', allPages: Array<{ __typename?: 'PageRecord', slug: string }> };

export type PostsSlugQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type PostsSlugQuery = { __typename?: 'Query', allPosts: Array<{ __typename?: 'PostRecord', _publishedAt?: string | null, slug: string }> };

export type SpeakerSlugQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type SpeakerSlugQuery = { __typename?: 'Query', allSpeakers: Array<{ __typename?: 'SpeakerRecord', slug: string }> };

export type StageSlugQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type StageSlugQuery = { __typename?: 'Query', allStages: Array<{ __typename?: 'StageRecord', slug: string }> };

export type TagsSlugQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type TagsSlugQuery = { __typename?: 'Query', allTags: Array<{ __typename?: 'TagRecord', slug: string }> };

export type TalkSlugQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type TalkSlugQuery = { __typename?: 'Query', allTalks: Array<{ __typename?: 'TalkRecord', slug: string }> };

export type StageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type StageQuery = { __typename?: 'Query', stage?: { __typename?: 'StageRecord', _publishedAt?: string | null, name: string, streamKey?: string | null, iframeUrl?: string | null, talk: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, content: { __typename?: 'TalkModelContentField', value: unknown, links: Array<{ __typename: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, dateTags: Array<{ __typename?: 'DateTagRecord', eventDate: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, biography: { __typename?: 'SpeakerModelBiographyField', value: unknown, links: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, biography: { __typename?: 'SpeakerModelBiographyField', value: unknown, links: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }> } | null };

export type StagesQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type StagesQuery = { __typename?: 'Query', allStages: Array<{ __typename?: 'StageRecord', _publishedAt?: string | null, slug: string, id: string, name: string, streamKey?: string | null, iframeUrl?: string | null, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null }>, _allStagesMeta: { __typename?: 'CollectionMetadata', count: number } };

export type TagQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type TagQuery = { __typename?: 'Query', tag?: { __typename?: 'TagRecord', tag: string, _allReferencingPosts: Array<{ __typename?: 'PostRecord', _publishedAt?: string | null, slug: string, id: string, title: string, tags: Array<{ __typename?: 'TagRecord', tag: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, author?: { __typename?: 'AuthorRecord', name: string, bio: string, slug: string, picture: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } } } | null }>, _allReferencingPostsMeta: { __typename?: 'CollectionMetadata', count: number } } | null };

export type TalkQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type TalkQuery = { __typename?: 'Query', talk?: { __typename?: 'TalkRecord', _publishedAt?: string | null, title: string, start: string, end?: string | null, pageType: string, buttonName: string, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, slug: string, id: string, biography: { __typename?: 'SpeakerModelBiographyField', value: unknown, links: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }>, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, content: { __typename?: 'TalkModelContentField', value: unknown, links: Array<{ __typename: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, dateTags: Array<{ __typename?: 'DateTagRecord', eventDate: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, biography: { __typename?: 'SpeakerModelBiographyField', value: unknown, links: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> } } | null };

export type TalksQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type TalksQuery = { __typename?: 'Query', allTalks: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, content: { __typename?: 'TalkModelContentField', value: unknown, links: Array<{ __typename: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, dateTags: Array<{ __typename?: 'DateTagRecord', eventDate: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, biography: { __typename?: 'SpeakerModelBiographyField', value: unknown, links: Array<{ __typename?: 'TalkRecord', _publishedAt?: string | null, slug: string, id: string, title: string, start: string, end?: string | null, pageType: string, buttonName: string, dateTags: Array<{ __typename?: 'DateTagRecord', id: string, eventDate: string, slug: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, id: string, slug: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, blocks: Array<{ __typename: 'AppCtaRecord', id: string, text?: string | null, title: string, googlePlayUrl?: string | null, appstoreUrl?: string | null } | { __typename: 'CtaButtonWithImageRecord', id: string, title: string, subtitle: string, buttonLabel: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'NewsletterSubscriptionRecord', id: string, buttonLabel: string, subtitle: string, title: string }> }, dateTags: Array<{ __typename?: 'DateTagRecord', eventDate: string }>, stage: { __typename?: 'PageRecord', id: string, slug: string } | { __typename?: 'StageRecord', id: string, name: string, slug: string }, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, speaker: Array<{ __typename?: 'SpeakerRecord', name: string, jobTitle: string, slug: string, id: string, picture: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } }> }>, _allTalksMeta: { __typename?: 'CollectionMetadata', count: number } };

export const DatoImage_ResponsiveImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatoImage_responsiveImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<DatoImage_ResponsiveImageFragment, unknown>;
export const AboutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"About"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"About","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AboutIntroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"preHeader"}},{"kind":"Field","name":{"kind":"Name","value":"header"}},{"kind":"Field","name":{"kind":"Name","value":"subheader"}},{"kind":"Field","name":{"kind":"Name","value":"introductionText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StatsSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"statistic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TeamSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showcasedMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FaqSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AboutQuery, AboutQueryVariables>;
export const AgendaTabDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AgendaTab"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAgendaTabs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"date_ASC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"talk"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allAgendaTabsMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<AgendaTabQuery, AgendaTabQueryVariables>;
export const AuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Author"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"_allReferencingPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"_createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"StringValue","value":"100","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allReferencingPostsMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<AuthorQuery, AuthorQueryVariables>;
export const AwardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Award"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"award"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"iframe"}},{"kind":"Field","name":{"kind":"Name","value":"acategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"atags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"atag"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"atags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"atag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"acategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GalleryRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageGallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"atags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"atag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"acategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MuxVideoRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"streamType"}},{"kind":"Field","name":{"kind":"Name","value":"playbackId"}},{"kind":"Field","name":{"kind":"Name","value":"placeholderUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GalleryRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"imageGallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"allAtags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"atag"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<AwardQuery, AwardQueryVariables>;
export const AwardCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AwardCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"_allReferencingAwards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"_createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"StringValue","value":"100","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"atags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"atag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"acategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allReferencingAwardsMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<AwardCategoryQuery, AwardCategoryQueryVariables>;
export const AwardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Awards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAwards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"_createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"StringValue","value":"9","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"atags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"atag"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"acategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allAwardsMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<AwardsQuery, AwardsQueryVariables>;
export const AwardTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AwardTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"atag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"atag"}},{"kind":"Field","name":{"kind":"Name","value":"_allReferencingAwards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"_createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"StringValue","value":"100","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"atags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"atag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"acategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allReferencingAwardsMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<AwardTagQuery, AwardTagQueryVariables>;
export const CategoryAwardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CategoryAward"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCategoryAwards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"StringValue","value":"9","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"award"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"atags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"atag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"acategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allCategoryAwardsMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<CategoryAwardQuery, CategoryAwardQueryVariables>;
export const ChangelogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Changelog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeLog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timeOfRelease"}},{"kind":"Field","name":{"kind":"Name","value":"versionName"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<ChangelogQuery, ChangelogQueryVariables>;
export const CustomColorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CustomColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mainColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"red"}},{"kind":"Field","name":{"kind":"Name","value":"blue"}},{"kind":"Field","name":{"kind":"Name","value":"green"}}]}}]}}]}}]} as unknown as DocumentNode<CustomColorQuery, CustomColorQueryVariables>;
export const DatetagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Datetag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"_allReferencingTalks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"_createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"StringValue","value":"100","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allReferencingTalksMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<DatetagQuery, DatetagQueryVariables>;
export const DocumentationHomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DocumentationHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentationHome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subheader"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<DocumentationHomePageQuery, DocumentationHomePageQueryVariables>;
export const DocumentationPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DocumentationPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentationPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<DocumentationPageQuery, DocumentationPageQueryVariables>;
export const DocumentationSidebarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DocumentationSidebar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDocumentationPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parent"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"exists"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"documentationHome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footerText"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<DocumentationSidebarQuery, DocumentationSidebarQueryVariables>;
export const FooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Footer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footerSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"footerLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialMediaLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"footerLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LegalPageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FooterQuery, FooterQueryVariables>;
export const LegalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Legal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"legalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<LegalQuery, LegalQueryVariables>;
export const LocalesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Locales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_site"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locales"}}]}}]}}]} as unknown as DocumentNode<LocalesQuery, LocalesQueryVariables>;
export const MemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"member"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"member"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"iframeUrl"}}]}}]}}]} as unknown as DocumentNode<MemberQuery, MemberQueryVariables>;
export const MenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Menu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CircleMenuItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuDropdownRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_site"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locales"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatoImage_responsiveImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<MenuQuery, MenuQueryVariables>;
export const PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SpacerRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"space"}},{"kind":"Field","name":{"kind":"Name","value":"extraMargin"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AboutIntroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"preHeader"}},{"kind":"Field","name":{"kind":"Name","value":"header"}},{"kind":"Field","name":{"kind":"Name","value":"subheader"}},{"kind":"Field","name":{"kind":"Name","value":"introductionText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SpeakersIntroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"preHeader"}},{"kind":"Field","name":{"kind":"Name","value":"header"}},{"kind":"Field","name":{"kind":"Name","value":"subheader"}},{"kind":"Field","name":{"kind":"Name","value":"introductionText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChangelogSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"featuredVersions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timeOfRelease"}},{"kind":"Field","name":{"kind":"Name","value":"versionName"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StatsSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"statistic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TeamSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showcasedMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SpeakerSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showcasedSpeakers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FaqSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buttons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heroSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"heroTitle"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}},{"kind":"ObjectField","name":{"kind":"Name","value":"crop"},"value":{"kind":"EnumValue","value":"focalpoint"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmptyHeroSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImageDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}},{"kind":"ObjectField","name":{"kind":"Name","value":"crop"},"value":{"kind":"EnumValue","value":"focalpoint"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bannerImageTablet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}},{"kind":"ObjectField","name":{"kind":"Name","value":"crop"},"value":{"kind":"EnumValue","value":"focalpoint"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bannerImageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}},{"kind":"ObjectField","name":{"kind":"Name","value":"crop"},"value":{"kind":"EnumValue","value":"focalpoint"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"videoHeader"}},{"kind":"Field","name":{"kind":"Name","value":"videoSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"providerUid"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"videoThumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DetailSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imagePosition"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ReviewSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reviewSectionHeader"}},{"kind":"Field","name":{"kind":"Name","value":"reviewSectionSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"review"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviewerName"}},{"kind":"Field","name":{"kind":"Name","value":"reviewerPicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviewerTitle"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PricingSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pricingSectionHeader"}},{"kind":"Field","name":{"kind":"Name","value":"pricingSectionSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"displayOption"}},{"kind":"Field","name":{"kind":"Name","value":"plans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"yearlyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"monthlyPrice"}},{"kind":"Field","name":{"kind":"Name","value":"tierName"}},{"kind":"Field","name":{"kind":"Name","value":"tierDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"planFeatures"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BrandSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"brandName"}},{"kind":"Field","name":{"kind":"Name","value":"brandUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brandLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeaturedPostsSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPostsHeader"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPostsSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeaturedAcategorySectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAcategoryHeader"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAcategorySubheader"}},{"kind":"Field","name":{"kind":"Name","value":"displayOption"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAcategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IvsLiveStageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"rtmpUrl"}},{"kind":"Field","name":{"kind":"Name","value":"iframeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"iframeHeight"}},{"kind":"Field","name":{"kind":"Name","value":"iframeWidth"}},{"kind":"Field","name":{"kind":"Name","value":"iframeMinHeight"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IframeBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"iframeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"minHeight"}},{"kind":"Field","name":{"kind":"Name","value":"minHeightDimensionUnit"}},{"kind":"Field","name":{"kind":"Name","value":"widthDimensionUnit"}},{"kind":"Field","name":{"kind":"Name","value":"heightDimensionUnit"}},{"kind":"Field","name":{"kind":"Name","value":"align"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"objectFit"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"minHeight"}},{"kind":"Field","name":{"kind":"Name","value":"minHeightDimensionUnit"}},{"kind":"Field","name":{"kind":"Name","value":"widthDimensionUnit"}},{"kind":"Field","name":{"kind":"Name","value":"heightDimensionUnit"}},{"kind":"Field","name":{"kind":"Name","value":"bannerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MuxLiveStreamRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"playbackId"}},{"kind":"Field","name":{"kind":"Name","value":"placeholderUrl"}},{"kind":"Field","name":{"kind":"Name","value":"streamType"}},{"kind":"Field","name":{"kind":"Name","value":"iframeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"iframeHeight"}},{"kind":"Field","name":{"kind":"Name","value":"iframeWidth"}},{"kind":"Field","name":{"kind":"Name","value":"iframeMinHeight"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureListSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuresHeader"}},{"kind":"Field","name":{"kind":"Name","value":"featuresSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"displayOption"}},{"kind":"Field","name":{"kind":"Name","value":"feature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"featureTitle"}},{"kind":"Field","name":{"kind":"Name","value":"featureDescription"}},{"kind":"Field","name":{"kind":"Name","value":"featureIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RedirectSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"slugToRedirectTo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatoImage_responsiveImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
export const PostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Post"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PostQuery, PostQueryVariables>;
export const PostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Posts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"_createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"StringValue","value":"9","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allPostsMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<PostsQuery, PostsQueryVariables>;
export const SocialFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"socialFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"socialFeed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"iframe"}}]}}]}}]} as unknown as DocumentNode<SocialFeedQuery, SocialFeedQueryVariables>;
export const SpeakerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Speaker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"speaker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allReferencingTalks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"_createdAt_ASC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"StringValue","value":"100","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allReferencingTalksMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<SpeakerQuery, SpeakerQueryVariables>;
export const SpeakerPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SpeakerPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"Speakers","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SpeakersIntroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"preHeader"}},{"kind":"Field","name":{"kind":"Name","value":"header"}},{"kind":"Field","name":{"kind":"Name","value":"subheader"}},{"kind":"Field","name":{"kind":"Name","value":"introductionText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StatsSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"statistic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SpeakerSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showcasedSpeakers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FaqSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SpeakerPageQuery, SpeakerPageQueryVariables>;
export const AwardsCategorySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AwardsCategorySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAcategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allAcategoriesMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<AwardsCategorySlugQuery, AwardsCategorySlugQueryVariables>;
export const AwardsAtagSlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AwardsAtagSlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAtags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allAtagsMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"atag"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<AwardsAtagSlugQuery, AwardsAtagSlugQueryVariables>;
export const AuthorsSlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthorsSlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAuthors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<AuthorsSlugQuery, AuthorsSlugQueryVariables>;
export const AwardsSlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AwardsSlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAwards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"_createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allAwardsMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<AwardsSlugQuery, AwardsSlugQueryVariables>;
export const ChangeLogSlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ChangeLogSlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allChangeLogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<ChangeLogSlugQuery, ChangeLogSlugQueryVariables>;
export const DocumentationSlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DocumentationSlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDocumentationPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<DocumentationSlugQuery, DocumentationSlugQueryVariables>;
export const PageSlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageSlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<PageSlugQuery, PageSlugQueryVariables>;
export const PostsSlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostsSlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<PostsSlugQuery, PostsSlugQueryVariables>;
export const SpeakerSlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SpeakerSlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allSpeakers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<SpeakerSlugQuery, SpeakerSlugQueryVariables>;
export const StageSlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StageSlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allStages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<StageSlugQuery, StageSlugQueryVariables>;
export const TagsSlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TagsSlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<TagsSlugQuery, TagsSlugQueryVariables>;
export const TalkSlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TalkSlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allTalks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<TalkSlugQuery, TalkSlugQueryVariables>;
export const StageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Stage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"streamKey"}},{"kind":"Field","name":{"kind":"Name","value":"iframeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"talk"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<StageQuery, StageQueryVariables>;
export const StagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Stages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allStages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"_createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"StringValue","value":"9","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"streamKey"}},{"kind":"Field","name":{"kind":"Name","value":"iframeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allStagesMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<StagesQuery, StagesQueryVariables>;
export const TagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"_allReferencingPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"_createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"StringValue","value":"100","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allReferencingPostsMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<TagQuery, TagQueryVariables>;
export const TalkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Talk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"talk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<TalkQuery, TalkQueryVariables>;
export const TalksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Talks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allTalks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"_createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"StringValue","value":"9","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"googlePlayUrl"}},{"kind":"Field","name":{"kind":"Name","value":"appstoreUrl"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CtaButtonWithImageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLabel"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"buttonName"}},{"kind":"Field","name":{"kind":"Name","value":"stage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"64","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allTalksMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<TalksQuery, TalksQueryVariables>;