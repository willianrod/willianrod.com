interface IHome {
  page: Page;
}

type Maybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  DateTime: any;
  Date: any;
  Upload: any;
  PageSectionsDynamicZoneInput: any;
  I18NLocaleCode: any;
};

type Error = {
  __typename?: "Error";
  code: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
};

type Pagination = {
  __typename?: "Pagination";
  total: Scalars["Int"];
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
  pageCount: Scalars["Int"];
};

type ResponseCollectionMeta = {
  __typename?: "ResponseCollectionMeta";
  pagination: Pagination;
};

enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

type IdFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  or?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  not?: Maybe<IdFilterInput>;
  eq?: Maybe<Scalars["ID"]>;
  ne?: Maybe<Scalars["ID"]>;
  startsWith?: Maybe<Scalars["ID"]>;
  endsWith?: Maybe<Scalars["ID"]>;
  contains?: Maybe<Scalars["ID"]>;
  notContains?: Maybe<Scalars["ID"]>;
  containsi?: Maybe<Scalars["ID"]>;
  notContainsi?: Maybe<Scalars["ID"]>;
  gt?: Maybe<Scalars["ID"]>;
  gte?: Maybe<Scalars["ID"]>;
  lt?: Maybe<Scalars["ID"]>;
  lte?: Maybe<Scalars["ID"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  between?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

type BooleanFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  or?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  not?: Maybe<BooleanFilterInput>;
  eq?: Maybe<Scalars["Boolean"]>;
  ne?: Maybe<Scalars["Boolean"]>;
  startsWith?: Maybe<Scalars["Boolean"]>;
  endsWith?: Maybe<Scalars["Boolean"]>;
  contains?: Maybe<Scalars["Boolean"]>;
  notContains?: Maybe<Scalars["Boolean"]>;
  containsi?: Maybe<Scalars["Boolean"]>;
  notContainsi?: Maybe<Scalars["Boolean"]>;
  gt?: Maybe<Scalars["Boolean"]>;
  gte?: Maybe<Scalars["Boolean"]>;
  lt?: Maybe<Scalars["Boolean"]>;
  lte?: Maybe<Scalars["Boolean"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  between?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

type StringFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["String"]>>>;
  or?: Maybe<Array<Maybe<Scalars["String"]>>>;
  not?: Maybe<StringFilterInput>;
  eq?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  notContains?: Maybe<Scalars["String"]>;
  containsi?: Maybe<Scalars["String"]>;
  notContainsi?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
  between?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

type IntFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  or?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  not?: Maybe<IntFilterInput>;
  eq?: Maybe<Scalars["Int"]>;
  ne?: Maybe<Scalars["Int"]>;
  startsWith?: Maybe<Scalars["Int"]>;
  endsWith?: Maybe<Scalars["Int"]>;
  contains?: Maybe<Scalars["Int"]>;
  notContains?: Maybe<Scalars["Int"]>;
  containsi?: Maybe<Scalars["Int"]>;
  notContainsi?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  between?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

type FloatFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  or?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  not?: Maybe<FloatFilterInput>;
  eq?: Maybe<Scalars["Float"]>;
  ne?: Maybe<Scalars["Float"]>;
  startsWith?: Maybe<Scalars["Float"]>;
  endsWith?: Maybe<Scalars["Float"]>;
  contains?: Maybe<Scalars["Float"]>;
  notContains?: Maybe<Scalars["Float"]>;
  containsi?: Maybe<Scalars["Float"]>;
  notContainsi?: Maybe<Scalars["Float"]>;
  gt?: Maybe<Scalars["Float"]>;
  gte?: Maybe<Scalars["Float"]>;
  lt?: Maybe<Scalars["Float"]>;
  lte?: Maybe<Scalars["Float"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  between?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

type DateFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  or?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  not?: Maybe<DateFilterInput>;
  eq?: Maybe<Scalars["Date"]>;
  ne?: Maybe<Scalars["Date"]>;
  startsWith?: Maybe<Scalars["Date"]>;
  endsWith?: Maybe<Scalars["Date"]>;
  contains?: Maybe<Scalars["Date"]>;
  notContains?: Maybe<Scalars["Date"]>;
  containsi?: Maybe<Scalars["Date"]>;
  notContainsi?: Maybe<Scalars["Date"]>;
  gt?: Maybe<Scalars["Date"]>;
  gte?: Maybe<Scalars["Date"]>;
  lt?: Maybe<Scalars["Date"]>;
  lte?: Maybe<Scalars["Date"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  between?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

type DateTimeFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  or?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  not?: Maybe<DateTimeFilterInput>;
  eq?: Maybe<Scalars["DateTime"]>;
  ne?: Maybe<Scalars["DateTime"]>;
  startsWith?: Maybe<Scalars["DateTime"]>;
  endsWith?: Maybe<Scalars["DateTime"]>;
  contains?: Maybe<Scalars["DateTime"]>;
  notContains?: Maybe<Scalars["DateTime"]>;
  containsi?: Maybe<Scalars["DateTime"]>;
  notContainsi?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  between?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
};

type JsonFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  or?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  not?: Maybe<JsonFilterInput>;
  eq?: Maybe<Scalars["JSON"]>;
  ne?: Maybe<Scalars["JSON"]>;
  startsWith?: Maybe<Scalars["JSON"]>;
  endsWith?: Maybe<Scalars["JSON"]>;
  contains?: Maybe<Scalars["JSON"]>;
  notContains?: Maybe<Scalars["JSON"]>;
  containsi?: Maybe<Scalars["JSON"]>;
  notContainsi?: Maybe<Scalars["JSON"]>;
  gt?: Maybe<Scalars["JSON"]>;
  gte?: Maybe<Scalars["JSON"]>;
  lt?: Maybe<Scalars["JSON"]>;
  lte?: Maybe<Scalars["JSON"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  between?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
};

type ComponentSectionsAboutMe = {
  __typename?: "ComponentSectionsAboutMe";
  id: Scalars["ID"];
  title: Scalars["String"];
  description: Scalars["String"];
  avatar: UploadFileEntityResponse;
  social_media: Array<Maybe<ComponentUtilsSocialMediaItem>>;
  social_media_title?: Maybe<Scalars["String"]>;
};

type ComponentSectionsAboutMeSocial_MediaArgs = {
  filters?: Maybe<ComponentUtilsSocialMediaItemFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

type ComponentSectionsGoals = {
  __typename?: "ComponentSectionsGoals";
  id: Scalars["ID"];
  title: Scalars["String"];
  items: Array<Maybe<ComponentUtilsGoalItem>>;
};

type ComponentSectionsGoalsItemsArgs = {
  filters?: Maybe<ComponentUtilsGoalItemFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

type ComponentSectionsSkills = {
  __typename?: "ComponentSectionsSkills";
  id: Scalars["ID"];
  title: Scalars["String"];
  skills: Array<Maybe<ComponentUtilsSkillItem>>;
};

type ComponentSectionsSkillsItemsArgs = {
  filters?: Maybe<ComponentUtilsSkillItemFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

type ComponentSectionsWelcome = {
  __typename?: "ComponentSectionsWelcome";
  id: Scalars["ID"];
  primary_text: Scalars["String"];
  main_text: Scalars["String"];
  secondary_text: Scalars["String"];
};

type ComponentSectionsWorkExperience = {
  __typename?: "ComponentSectionsWorkExperience";
  id: Scalars["ID"];
  title: Scalars["String"];
  present_label: Scalars["String"];
  items: Array<Maybe<ComponentUtilsWorkExperienceItem>>;
};

type ComponentSectionsWorkExperienceItemsArgs = {
  filters?: Maybe<ComponentUtilsWorkExperienceItemFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

type ComponentUtilsGoalItemFiltersInput = {
  title?: Maybe<StringFilterInput>;
  description?: Maybe<StringFilterInput>;
  and?: Maybe<Array<Maybe<ComponentUtilsGoalItemFiltersInput>>>;
  or?: Maybe<Array<Maybe<ComponentUtilsGoalItemFiltersInput>>>;
  not?: Maybe<ComponentUtilsGoalItemFiltersInput>;
};

type ComponentUtilsGoalItem = {
  __typename?: "ComponentUtilsGoalItem";
  id?: Scalars["ID"];
  title?: Scalars["String"];
  description?: Scalars["String"];
};

type ComponentUtilsSkillItemFiltersInput = {
  name?: Maybe<StringFilterInput>;
  since?: Maybe<DateFilterInput>;
  and?: Maybe<Array<Maybe<ComponentUtilsSkillItemFiltersInput>>>;
  or?: Maybe<Array<Maybe<ComponentUtilsSkillItemFiltersInput>>>;
  not?: Maybe<ComponentUtilsSkillItemFiltersInput>;
};

type ComponentUtilsSkillItem = {
  __typename?: "ComponentUtilsSkillItem";
  id?: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  icon?: UploadFileEntityResponse;
  since?: Scalars["Date"];
};

enum Enum_Componentutilssocialmediaitem_Type {
  Instagram = "instagram",
  Twitter = "twitter",
  Linkedin = "linkedin",
  Github = "github",
  Gitlab = "gitlab",
  Spotify = "spotify",
  Stackoverflow = "stackoverflow",
}

type ComponentUtilsSocialMediaItemFiltersInput = {
  title?: Maybe<StringFilterInput>;
  url?: Maybe<StringFilterInput>;
  and?: Maybe<Array<Maybe<ComponentUtilsSocialMediaItemFiltersInput>>>;
  or?: Maybe<Array<Maybe<ComponentUtilsSocialMediaItemFiltersInput>>>;
  not?: Maybe<ComponentUtilsSocialMediaItemFiltersInput>;
};

type ComponentUtilsSocialMediaItem = {
  __typename?: "ComponentUtilsSocialMediaItem";
  id: Scalars["ID"];
  title: Scalars["String"];
  url: Scalars["String"];
  type: Enum_Componentutilssocialmediaitem_Type;
  icon: UploadFileEntityResponse;
};

type ComponentUtilsWorkExperienceItemFiltersInput = {
  company_name?: Maybe<StringFilterInput>;
  position?: Maybe<StringFilterInput>;
  start_date?: Maybe<DateFilterInput>;
  end_date?: Maybe<DateFilterInput>;
  description?: Maybe<StringFilterInput>;
  and?: Maybe<Array<Maybe<ComponentUtilsWorkExperienceItemFiltersInput>>>;
  or?: Maybe<Array<Maybe<ComponentUtilsWorkExperienceItemFiltersInput>>>;
  not?: Maybe<ComponentUtilsWorkExperienceItemFiltersInput>;
};

type ComponentUtilsWorkExperienceItem = {
  __typename?: "ComponentUtilsWorkExperienceItem";
  id?: Scalars["ID"];
  company_name?: Scalars["String"];
  position?: Scalars["String"];
  start_date?: Scalars["Date"];
  end_date?: Maybe<Scalars["Date"]>;
  description?: Scalars["String"];
  present_label: Scalars["String"];
};

type PageSectionsDynamicZone =
  | ComponentSectionsWelcome
  | ComponentSectionsAboutMe
  | ComponentSectionsWorkExperience
  | ComponentSectionsSkills
  | ComponentSectionsGoals
  | Error;

type PageFiltersInput = {
  id?: Maybe<IdFilterInput>;
  title?: Maybe<StringFilterInput>;
  slug?: Maybe<StringFilterInput>;
  description?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  publishedAt?: Maybe<DateTimeFilterInput>;
  localizations?: Maybe<PageFiltersInput>;
  locale?: Maybe<StringFilterInput>;
  and?: Maybe<Array<Maybe<PageFiltersInput>>>;
  or?: Maybe<Array<Maybe<PageFiltersInput>>>;
  not?: Maybe<PageFiltersInput>;
};

type PageInput = {
  title?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  sections?: Maybe<Array<Scalars["PageSectionsDynamicZoneInput"]>>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
};

type Page = {
  __typename?: "Page";
  title: Scalars["String"];
  slug: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  sections?: Maybe<Array<Maybe<PageSectionsDynamicZone>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  localizations?: Maybe<PageRelationResponseCollection>;
  locale?: Maybe<Scalars["String"]>;
};

type PageLocalizationsArgs = {
  filters?: Maybe<PageFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  publicationState?: Maybe<PublicationState>;
};

type PageEntity = {
  __typename?: "PageEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<Page>;
};

type PageEntityResponse = {
  __typename?: "PageEntityResponse";
  data?: Maybe<PageEntity>;
};

type PageEntityResponseCollection = {
  __typename?: "PageEntityResponseCollection";
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

type PageRelationResponseCollection = {
  __typename?: "PageRelationResponseCollection";
  data: Array<PageEntity>;
};

type UploadFileFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  alternativeText?: Maybe<StringFilterInput>;
  caption?: Maybe<StringFilterInput>;
  width?: Maybe<IntFilterInput>;
  height?: Maybe<IntFilterInput>;
  formats?: Maybe<JsonFilterInput>;
  hash?: Maybe<StringFilterInput>;
  ext?: Maybe<StringFilterInput>;
  mime?: Maybe<StringFilterInput>;
  size?: Maybe<FloatFilterInput>;
  url?: Maybe<StringFilterInput>;
  previewUrl?: Maybe<StringFilterInput>;
  provider?: Maybe<StringFilterInput>;
  provider_metadata?: Maybe<JsonFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UploadFileFiltersInput>>>;
  or?: Maybe<Array<Maybe<UploadFileFiltersInput>>>;
  not?: Maybe<UploadFileFiltersInput>;
};

type UploadFileInput = {
  name?: Maybe<Scalars["String"]>;
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash?: Maybe<Scalars["String"]>;
  ext?: Maybe<Scalars["String"]>;
  mime?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  url?: Maybe<Scalars["String"]>;
  previewUrl?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  provider_metadata?: Maybe<Scalars["JSON"]>;
};

type UploadFile = {
  __typename?: "UploadFile";
  name: Scalars["String"];
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  ext?: Maybe<Scalars["String"]>;
  mime: Scalars["String"];
  size: Scalars["Float"];
  url: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

type UploadFileEntity = {
  __typename?: "UploadFileEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<UploadFile>;
};

type UploadFileEntityResponse = {
  __typename?: "UploadFileEntityResponse";
  data?: Maybe<UploadFileEntity>;
};

type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection";
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

type I18NLocaleFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  code?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<I18NLocaleFiltersInput>>>;
  or?: Maybe<Array<Maybe<I18NLocaleFiltersInput>>>;
  not?: Maybe<I18NLocaleFiltersInput>;
};

type I18NLocale = {
  __typename?: "I18NLocale";
  name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

type I18NLocaleEntity = {
  __typename?: "I18NLocaleEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<I18NLocale>;
};

type I18NLocaleEntityResponse = {
  __typename?: "I18NLocaleEntityResponse";
  data?: Maybe<I18NLocaleEntity>;
};

type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection";
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

type UsersPermissionsPermissionFiltersInput = {
  id?: Maybe<IdFilterInput>;
  action?: Maybe<StringFilterInput>;
  role?: Maybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsPermissionFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsPermissionFiltersInput>>>;
  not?: Maybe<UsersPermissionsPermissionFiltersInput>;
};

type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"];
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

type UsersPermissionsPermissionEntity = {
  __typename?: "UsersPermissionsPermissionEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<UsersPermissionsPermission>;
};

type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  data: Array<UsersPermissionsPermissionEntity>;
};

type UsersPermissionsRoleFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  description?: Maybe<StringFilterInput>;
  type?: Maybe<StringFilterInput>;
  permissions?: Maybe<UsersPermissionsPermissionFiltersInput>;
  users?: Maybe<UsersPermissionsUserFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsRoleFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsRoleFiltersInput>>>;
  not?: Maybe<UsersPermissionsRoleFiltersInput>;
};

type UsersPermissionsRoleInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  permissions?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

type UsersPermissionsRolePermissionsArgs = {
  filters?: Maybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

type UsersPermissionsRoleUsersArgs = {
  filters?: Maybe<UsersPermissionsUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

type UsersPermissionsRoleEntity = {
  __typename?: "UsersPermissionsRoleEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<UsersPermissionsRole>;
};

type UsersPermissionsRoleEntityResponse = {
  __typename?: "UsersPermissionsRoleEntityResponse";
  data?: Maybe<UsersPermissionsRoleEntity>;
};

type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection";
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

type UsersPermissionsUserFiltersInput = {
  id?: Maybe<IdFilterInput>;
  username?: Maybe<StringFilterInput>;
  email?: Maybe<StringFilterInput>;
  provider?: Maybe<StringFilterInput>;
  password?: Maybe<StringFilterInput>;
  resetPasswordToken?: Maybe<StringFilterInput>;
  confirmationToken?: Maybe<StringFilterInput>;
  confirmed?: Maybe<BooleanFilterInput>;
  blocked?: Maybe<BooleanFilterInput>;
  role?: Maybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsUserFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsUserFiltersInput>>>;
  not?: Maybe<UsersPermissionsUserFiltersInput>;
};

type UsersPermissionsUserInput = {
  username?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  resetPasswordToken?: Maybe<Scalars["String"]>;
  confirmationToken?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<Scalars["ID"]>;
};

type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  username: Scalars["String"];
  email: Scalars["String"];
  provider?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

type UsersPermissionsUserEntity = {
  __typename?: "UsersPermissionsUserEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<UsersPermissionsUser>;
};

type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse";
  data?: Maybe<UsersPermissionsUserEntity>;
};

type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
};

type GenericMorph =
  | ComponentSectionsAboutMe
  | ComponentSectionsGoals
  | ComponentSectionsSkills
  | ComponentSectionsWelcome
  | ComponentSectionsWorkExperience
  | ComponentUtilsGoalItem
  | ComponentUtilsSkillItem
  | ComponentUtilsSocialMediaItem
  | ComponentUtilsWorkExperienceItem
  | Page
  | UploadFile
  | I18NLocale
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

type FileInfoInput = {
  name?: Maybe<Scalars["String"]>;
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
};

type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  id: Scalars["ID"];
  username: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<UsersPermissionsMeRole>;
};

type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

type UsersPermissionsRegisterInput = {
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
};

type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: Scalars["String"];
};

type UsersPermissionsPasswordPayload = {
  __typename?: "UsersPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
};

type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

type UsersPermissionsCreateRolePayload = {
  __typename?: "UsersPermissionsCreateRolePayload";
  ok: Scalars["Boolean"];
};

type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload";
  ok: Scalars["Boolean"];
};

type UsersPermissionsDeleteRolePayload = {
  __typename?: "UsersPermissionsDeleteRolePayload";
  ok: Scalars["Boolean"];
};

type PaginationArg = {
  page?: Maybe<Scalars["Int"]>;
  pageSize?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

type Query = {
  __typename?: "Query";
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
};

type QueryPageArgs = {
  id?: Maybe<Scalars["ID"]>;
  locale?: Maybe<Scalars["I18NLocaleCode"]>;
};

type QueryPagesArgs = {
  filters?: Maybe<PageFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars["I18NLocaleCode"]>;
};

type QueryUploadFileArgs = {
  id?: Maybe<Scalars["ID"]>;
};

type QueryUploadFilesArgs = {
  filters?: Maybe<UploadFileFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

type QueryI18NLocaleArgs = {
  id?: Maybe<Scalars["ID"]>;
};

type QueryI18NLocalesArgs = {
  filters?: Maybe<I18NLocaleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

type QueryUsersPermissionsRoleArgs = {
  id?: Maybe<Scalars["ID"]>;
};

type QueryUsersPermissionsRolesArgs = {
  filters?: Maybe<UsersPermissionsRoleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

type QueryUsersPermissionsUserArgs = {
  id?: Maybe<Scalars["ID"]>;
};

type QueryUsersPermissionsUsersArgs = {
  filters?: Maybe<UsersPermissionsUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

type Mutation = {
  __typename?: "Mutation";
  createPage?: Maybe<PageEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  upload: UploadFileEntityResponse;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  updateFileInfo: UploadFileEntityResponse;
  removeFile?: Maybe<UploadFileEntityResponse>;
  createPageLocalization?: Maybe<PageEntityResponse>;
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};

type MutationCreatePageArgs = {
  data: PageInput;
  locale?: Maybe<Scalars["I18NLocaleCode"]>;
};

type MutationUpdatePageArgs = {
  id: Scalars["ID"];
  data: PageInput;
  locale?: Maybe<Scalars["I18NLocaleCode"]>;
};

type MutationDeletePageArgs = {
  id: Scalars["ID"];
  locale?: Maybe<Scalars["I18NLocaleCode"]>;
};

type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

type MutationUpdateUploadFileArgs = {
  id: Scalars["ID"];
  data: UploadFileInput;
};

type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"];
};

type MutationUploadArgs = {
  refId?: Maybe<Scalars["ID"]>;
  ref?: Maybe<Scalars["String"]>;
  field?: Maybe<Scalars["String"]>;
  info?: Maybe<FileInfoInput>;
  file: Scalars["Upload"];
};

type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars["ID"]>;
  ref?: Maybe<Scalars["String"]>;
  field?: Maybe<Scalars["String"]>;
  files: Array<Maybe<Scalars["Upload"]>>;
};

type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"];
  info?: Maybe<FileInfoInput>;
};

type MutationRemoveFileArgs = {
  id: Scalars["ID"];
};

type MutationCreatePageLocalizationArgs = {
  id?: Maybe<Scalars["ID"]>;
  data?: Maybe<PageInput>;
  locale?: Maybe<Scalars["I18NLocaleCode"]>;
};

type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

type MutationUpdateUsersPermissionsRoleArgs = {
  id: Scalars["ID"];
  data: UsersPermissionsRoleInput;
};

type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"];
};

type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

type MutationUpdateUsersPermissionsUserArgs = {
  id: Scalars["ID"];
  data: UsersPermissionsUserInput;
};

type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"];
};

type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

type MutationResetPasswordArgs = {
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
  code: Scalars["String"];
};

type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};
