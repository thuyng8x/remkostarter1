//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type autoSection0RSSSMSStyles from "./autoSection0RSSSMS/autoSection0RSSSMS.opti-style.json"

export type autoSection0RSSSMSProps = LayoutProps<typeof autoSection0RSSSMSStyles>
export type autoSection0RSSSMSComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: autoSection0RSSSMSProps | undefined
} & JSX.IntrinsicElements['div']
export type autoSection0RSSSMSComponent<DT extends Record<string, any> = Record<string, any>> = (props: autoSection0RSSSMSComponentProps<DT>) => ReactNode


export type SectionLayoutProps = autoSection0RSSSMSProps
export type SectionComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends SectionLayoutProps = SectionLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type SectionComponent<DT extends Record<string, any> = Record<string, any>, LP extends SectionLayoutProps = SectionLayoutProps> = (props: SectionComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: SectionLayoutProps | null) : props is autoSection0RSSSMSProps
{
    return props?.template == "autoSection0RSSSMS"
}

export function isautoSection0RSSSMSProps(props?: SectionLayoutProps | null) : props is autoSection0RSSSMSProps
{
    return props?.template == "autoSection0RSSSMS"
}