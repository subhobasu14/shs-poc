// This is used to transform AST (Abstract Syntax Tree) to HTML that react can understand.
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Container, Row, Col } from "react-bootstrap";

function Header(props) {
  // Access post fields map
  const header = props.header.fields;

  return (
    <section className="fj-hero">
      <div className="d-flex flex-row">
        <div className="p-2">
          <img
            src={header.homeIcon.fields.file.url}
            className="img-responsive img-fit-cover"
            style={{ height: 60 }}
          />
        </div>

        <div className="p-2">
          <img
            src={header.lookup.fields.file.url}
            className="img-responsive img-fit-cover"
            style={{ height: 60 }}
          />
          Order Lookup
        </div>
        <div className="p-2">
          <img
            src={header.chat.fields.file.url}
            className="img-responsive img-fit-cover"
            style={{ height: 60 }}
          />
          Chat
        </div>
        <div className="p-2">
          <img
            src={header.zip.fields.file.url}
            className="img-responsive img-fit-cover"
            style={{ height: 60 }}
          />
          Zip Code e.g 98126
        </div>
      </div>
      <div className="d-flex flex-row c">
        <span>{header.repair}</span>
        {"   "}
        <span className="mt-12">{header.improvement}</span>
        <span className="pl-12">{header.maintain}</span>
        <div className="pl-12">{header.warranty}</div>
        <div className="pl-12">{header.blog}</div>
        <div className="c">{header.parts}</div>

        {/*
        <div
          className="pl-12"
          className="space-between-links"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(header.parts),
          }}
        ></div>
        */}
      </div>
    </section>
  );
}

export default Header;
