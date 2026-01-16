//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type FStep0IBAGPStyles from "./FStep0IBAGP/FStep0IBAGP.opti-style.json"

export type FStep0IBAGPProps = LayoutProps<typeof FStep0IBAGPStyles>
export type FStep0IBAGPComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: FStep0IBAGPProps | undefined
} & JSX.IntrinsicElements['div']
export type FStep0IBAGPComponent<DT extends Record<string, any> = Record<string, any>> = (props: FStep0IBAGPComponentProps<DT>) => ReactNode


export type StepLayoutProps = FStep0IBAGPProps
export type StepComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends StepLayoutProps = StepLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type StepComponent<DT extends Record<string, any> = Record<string, any>, LP extends StepLayoutProps = StepLayoutProps> = (props: StepComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: StepLayoutProps | null) : props is FStep0IBAGPProps
{
    return props?.template == "FStep0IBAGP"
}

export function isFStep0IBAGPProps(props?: StepLayoutProps | null) : props is FStep0IBAGPProps
{
    return props?.template == "FStep0IBAGP"
}