import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { autoSection0RSSSMSProps } from "../displayTemplates";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

export const autoSection0RSSSMS : CmsLayoutComponent<autoSection0RSSSMSProps> = ({ layoutProps, children, editProps }) => {
    const layout = extractSettings(layoutProps);
    return (<CmsEditable className="vb:section vb:section:autoSection0RSSSMS" { ...editProps }>{ children }</CmsEditable>);
}

export default autoSection0RSSSMS;