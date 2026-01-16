//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type Column0GBPCIStyles from "./Column0GBPCI/Column0GBPCI.opti-style.json"

export type Column0GBPCIProps = LayoutProps<typeof Column0GBPCIStyles>
export type Column0GBPCIComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: Column0GBPCIProps | undefined
} & JSX.IntrinsicElements['div']
export type Column0GBPCIComponent<DT extends Record<string, any> = Record<string, any>> = (props: Column0GBPCIComponentProps<DT>) => ReactNode


export type ColumnLayoutProps = Column0GBPCIProps
export type ColumnComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends ColumnLayoutProps = ColumnLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type ColumnComponent<DT extends Record<string, any> = Record<string, any>, LP extends ColumnLayoutProps = ColumnLayoutProps> = (props: ColumnComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: ColumnLayoutProps | null) : props is Column0GBPCIProps
{
    return props?.template == "Column0GBPCI"
}

export function isColumn0GBPCIProps(props?: ColumnLayoutProps | null) : props is Column0GBPCIProps
{
    return props?.template == "Column0GBPCI"
}