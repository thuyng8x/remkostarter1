import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { Row0SQLAGPProps } from "../displayTemplates";

export const Row0SQLAGP : CmsLayoutComponent<Row0SQLAGPProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:row vb:row:Row0SQLAGP">{ children }</div>);
}

export default Row0SQLAGP;