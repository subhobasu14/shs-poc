// This is used to transform AST (Abstract Syntax Tree) to HTML that react can understand.
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Container, Row, Col } from "react-bootstrap";

function ApplianceList(props) {
  // Access post fields map
  const appliance = props.apps.fields;
  return (
    <section className="fj-hero">
      <h3>{appliance.list.length}</h3>
      <div className="d-flex flex-row">
        {appliance.list.map((app, index) => (
          <div className="p-2" key={index}>
            <img
              src={app.fields.file.url}
              className="img-responsive img-fit-cover"
              style={{ height: 60 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ApplianceList;
