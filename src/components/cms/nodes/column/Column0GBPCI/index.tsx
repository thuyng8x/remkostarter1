import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { Column0GBPCIProps } from "../displayTemplates";

export const Column0GBPCI : CmsLayoutComponent<Column0GBPCIProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:column vb:column:Column0GBPCI">{ children }</div>);
}

export default Column0GBPCI;