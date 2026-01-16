import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const CompositionNodeDataFragmentDoc = gql`
    fragment CompositionNodeData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
}
    `;
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  type
  base
  default
}
    `;
export const IContentInfoFragmentDoc = gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IComponent {
  ...IContentData
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IComponent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IComponent {
  ...IElementData
}
    `;
export const OptiFormsChoiceElementDataFragmentDoc = gql`
    fragment OptiFormsChoiceElementData on OptiFormsChoiceElement {
  Label
  Tooltip
  Options
  AllowMultiSelect
  Validators
}
    `;
export const OptiFormsConditionDataFragmentDoc = gql`
    fragment OptiFormsConditionData on OptiFormsCondition {
  ComparisonOperator
  ComparisonValue
}
    `;
export const OptiFormsConditionPropertyDataFragmentDoc = gql`
    fragment OptiFormsConditionPropertyData on OptiFormsConditionProperty {
  ComparisonOperator
  ComparisonValue
}
    `;
export const OptiFormsDependencyRuleDataFragmentDoc = gql`
    fragment OptiFormsDependencyRuleData on OptiFormsDependencyRule {
  SatisfiedAction
  ConditionCombination
  Conditions {
    ...OptiFormsConditionPropertyData
  }
}
    `;
export const OptiFormsNumberElementDataFragmentDoc = gql`
    fragment OptiFormsNumberElementData on OptiFormsNumberElement {
  Label
  Placeholder
  Tooltip
  PredefinedValue
  Validators
  AutoComplete
}
    `;
export const OptiFormsRangeElementDataFragmentDoc = gql`
    fragment OptiFormsRangeElementData on OptiFormsRangeElement {
  Label
  Tooltip
  PredefinedValue
  Min
  Max
  Increment
}
    `;
export const OptiFormsResetElementDataFragmentDoc = gql`
    fragment OptiFormsResetElementData on OptiFormsResetElement {
  Label
  Tooltip
}
    `;
export const OptiFormsSelectionElementDataFragmentDoc = gql`
    fragment OptiFormsSelectionElementData on OptiFormsSelectionElement {
  Label
  Placeholder
  Tooltip
  Options
  AllowMultiSelect
  Validators
  AutoComplete
}
    `;
export const OptiFormsSubmitElementDataFragmentDoc = gql`
    fragment OptiFormsSubmitElementData on OptiFormsSubmitElement {
  Label
  Tooltip
}
    `;
export const OptiFormsTextareaElementDataFragmentDoc = gql`
    fragment OptiFormsTextareaElementData on OptiFormsTextareaElement {
  Label
  Placeholder
  Tooltip
  PredefinedValue
  Validators
  AutoComplete
}
    `;
export const OptiFormsTextboxElementDataFragmentDoc = gql`
    fragment OptiFormsTextboxElementData on OptiFormsTextboxElement {
  Label
  Placeholder
  Tooltip
  PredefinedValue
  Validators
  AutoComplete
}
    `;
export const OptiFormsUrlElementDataFragmentDoc = gql`
    fragment OptiFormsUrlElementData on OptiFormsUrlElement {
  Label
  Placeholder
  Tooltip
  PredefinedValue
  Validators
}
    `;
export const ThuyBlockDataFragmentDoc = gql`
    fragment ThuyBlockData on ThuyBlock {
  empty: _metadata {
    key
  }
}
    `;
export const ThuySectionDataFragmentDoc = gql`
    fragment ThuySectionData on ThuySection {
  Name
  Body {
    json
    html
  }
}
    `;
export const CompositionComponentNodeDataFragmentDoc = gql`
    fragment CompositionComponentNodeData on ICompositionComponentNode {
  component {
    ...BlockData
    ...ElementData
    ...OptiFormsChoiceElementData
    ...OptiFormsConditionData
    ...OptiFormsDependencyRuleData
    ...OptiFormsNumberElementData
    ...OptiFormsRangeElementData
    ...OptiFormsResetElementData
    ...OptiFormsSelectionElementData
    ...OptiFormsSubmitElementData
    ...OptiFormsTextareaElementData
    ...OptiFormsTextboxElementData
    ...OptiFormsUrlElementData
    ...ThuyBlockData
    ...ThuySectionData
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionNodeData
    nodes {
      ...CompositionNodeData
      ... on ICompositionStructureNode {
        nodes {
          ...CompositionNodeData
          ... on ICompositionStructureNode {
            nodes {
              ...CompositionNodeData
              ... on ICompositionStructureNode {
                nodes {
                  ...CompositionNodeData
                  ...CompositionComponentNodeData
                  ... on ICompositionStructureNode {
                    nodes {
                      ...CompositionNodeData
                      ...CompositionComponentNodeData
                    }
                  }
                }
              }
            }
          }
        }
      }
      ...CompositionComponentNodeData
    }
  }
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  ...ExperienceData
}
    `;
export const ImageMediaDataFragmentDoc = gql`
    fragment ImageMediaData on ImageMedia {
  empty: _metadata {
    key
  }
}
    `;
export const GenericMediaDataFragmentDoc = gql`
    fragment GenericMediaData on GenericMedia {
  empty: _metadata {
    key
  }
}
    `;
export const OptiFormsDependencyRulePropertyDataFragmentDoc = gql`
    fragment OptiFormsDependencyRulePropertyData on OptiFormsDependencyRuleProperty {
  SatisfiedAction
  ConditionCombination
  Conditions {
    ...OptiFormsConditionPropertyData
  }
}
    `;
export const OptiFormsContainerDataDataFragmentDoc = gql`
    fragment OptiFormsContainerDataData on OptiFormsContainerData {
  DependencyRules {
    ...OptiFormsDependencyRulePropertyData
  }
  Title
  Description
  ShowSummaryMessageAfterSubmission
  SubmitConfirmationMessage
  ResetConfirmationMessage
  SubmitUrl {
    ...LinkData
  }
}
    `;
export const VideoMediaDataFragmentDoc = gql`
    fragment VideoMediaData on VideoMedia {
  empty: _metadata {
    key
  }
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    `;
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {
  content: _Content(
    variation: {include: ALL}
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...BlockData
      ...PageData
      ...OptiFormsChoiceElementData
      ...OptiFormsConditionData
      ...OptiFormsDependencyRuleData
      ...OptiFormsNumberElementData
      ...OptiFormsRangeElementData
      ...OptiFormsResetElementData
      ...OptiFormsSelectionElementData
      ...OptiFormsSubmitElementData
      ...OptiFormsTextareaElementData
      ...OptiFormsTextboxElementData
      ...OptiFormsUrlElementData
      ...ThuyBlockData
      ...ThuySectionData
      ...BlankExperienceData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlockDataFragmentDoc}
${PageDataFragmentDoc}
${OptiFormsChoiceElementDataFragmentDoc}
${OptiFormsConditionDataFragmentDoc}
${OptiFormsDependencyRuleDataFragmentDoc}
${OptiFormsConditionPropertyDataFragmentDoc}
${OptiFormsNumberElementDataFragmentDoc}
${OptiFormsRangeElementDataFragmentDoc}
${OptiFormsResetElementDataFragmentDoc}
${OptiFormsSelectionElementDataFragmentDoc}
${OptiFormsSubmitElementDataFragmentDoc}
${OptiFormsTextareaElementDataFragmentDoc}
${OptiFormsTextboxElementDataFragmentDoc}
${OptiFormsUrlElementDataFragmentDoc}
${ThuyBlockDataFragmentDoc}
${ThuySectionDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}, changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...PageData
      ...BlankExperienceData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${BlockDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${OptiFormsChoiceElementDataFragmentDoc}
${OptiFormsConditionDataFragmentDoc}
${OptiFormsDependencyRuleDataFragmentDoc}
${OptiFormsConditionPropertyDataFragmentDoc}
${OptiFormsNumberElementDataFragmentDoc}
${OptiFormsRangeElementDataFragmentDoc}
${OptiFormsResetElementDataFragmentDoc}
${OptiFormsSelectionElementDataFragmentDoc}
${OptiFormsSubmitElementDataFragmentDoc}
${OptiFormsTextareaElementDataFragmentDoc}
${OptiFormsTextboxElementDataFragmentDoc}
${OptiFormsUrlElementDataFragmentDoc}
${ThuyBlockDataFragmentDoc}
${ThuySectionDataFragmentDoc}`;
export const getContentTypeDocument = gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {
  content: _Content(
    variation: {include: ALL}
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      _metadata {
        types
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>({ document: getContentByIdDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>({ document: getContentByPathDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>({ document: getContentTypeDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;