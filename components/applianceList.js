// This is used to transform AST (Abstract Syntax Tree) to HTML that react can understand.
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Container, Row, Col } from "react-bootstrap";

function ApplianceList(props) {
  // Access post fields map
  const appliance = props.apps.fields;

  return (
    <section className="fj-hero" style={{ backgroundColor: "antiquewhite" }}>
      <div className="d-flex flex-row">
        {appliance.gadgets.map((app) => (
          <img
            src={app.fields.logo.fields.file.url}
            className="img-responsive img-fit-cover"
            style={{ height: 60 }}
          />
        ))}
      </div>
    </section>
  );
}

export default ApplianceList;
