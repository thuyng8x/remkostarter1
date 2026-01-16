//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type Row0SQLAGPStyles from "./Row0SQLAGP/Row0SQLAGP.opti-style.json"

export type Row0SQLAGPProps = LayoutProps<typeof Row0SQLAGPStyles>
export type Row0SQLAGPComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: Row0SQLAGPProps | undefined
} & JSX.IntrinsicElements['div']
export type Row0SQLAGPComponent<DT extends Record<string, any> = Record<string, any>> = (props: Row0SQLAGPComponentProps<DT>) => ReactNode


export type RowLayoutProps = Row0SQLAGPProps
export type RowComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends RowLayoutProps = RowLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type RowComponent<DT extends Record<string, any> = Record<string, any>, LP extends RowLayoutProps = RowLayoutProps> = (props: RowComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: RowLayoutProps | null) : props is Row0SQLAGPProps
{
    return props?.template == "Row0SQLAGP"
}

export function isRow0SQLAGPProps(props?: RowLayoutProps | null) : props is Row0SQLAGPProps
{
    return props?.template == "Row0SQLAGP"
}