import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { FStep0IBAGPProps } from "../displayTemplates";

export const FStep0IBAGP : CmsLayoutComponent<FStep0IBAGPProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:step vb:step:FStep0IBAGP">{ children }</div>);
}

export default FStep0IBAGP;