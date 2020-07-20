// This is used to transform AST (Abstract Syntax Tree) to HTML that react can understand.
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Container, Row, Col } from "react-bootstrap";

function Appliances(props) {
  // Access post fields map
  const appliance = props.appliance.fields;

  return (
    <section className="fj-hero" style={{ backgroundColor: "coral" }}>
      <div className="d-flex flex-row">
        <div className="p-2">
          <img
            src={appliance.fridge.fields.file.url}
            className="img-responsive img-fit-cover"
            style={{ height: 60 }}
          />
        </div>

        <div className="p-2">
          <img
            src={appliance.oven.fields.file.url}
            className="img-responsive img-fit-cover"
            style={{ height: 60 }}
          />
        </div>
        <div className="p-2">
          <img
            src={appliance.washer.fields.file.url}
            className="img-responsive img-fit-cover"
            style={{ height: 60 }}
          />
        </div>
        <div className="p-2">
          <img
            src={appliance.dryer.fields.file.url}
            className="img-responsive img-fit-cover"
            style={{ height: 60 }}
          />
        </div>
      </div>
    </section>
  );
}

export default Appliances;
