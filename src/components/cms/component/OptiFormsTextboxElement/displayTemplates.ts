//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type autoText0FTPJSONStyles from "./autoText0FTPJSON.opti-style.json"

export type autoText0FTPJSONProps = LayoutProps<typeof autoText0FTPJSONStyles>
export type autoText0FTPJSONComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: autoText0FTPJSONProps | undefined
} & JSX.IntrinsicElements['div']
export type autoText0FTPJSONComponent<DT extends Record<string, any> = Record<string, any>> = (props: autoText0FTPJSONComponentProps<DT>) => ReactNode


export type OptiFormsTextboxElementLayoutProps = autoText0FTPJSONProps
export type OptiFormsTextboxElementComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends OptiFormsTextboxElementLayoutProps = OptiFormsTextboxElementLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type OptiFormsTextboxElementComponent<DT extends Record<string, any> = Record<string, any>, LP extends OptiFormsTextboxElementLayoutProps = OptiFormsTextboxElementLayoutProps> = (props: OptiFormsTextboxElementComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: OptiFormsTextboxElementLayoutProps | null) : props is autoText0FTPJSONProps
{
    return props?.template == "autoText0FTPJSON"
}

export function isautoText0FTPJSONProps(props?: OptiFormsTextboxElementLayoutProps | null) : props is autoText0FTPJSONProps
{
    return props?.template == "autoText0FTPJSON"
}