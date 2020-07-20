// This is used to transform AST (Abstract Syntax Tree) to HTML that react can understand.
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

function Banner(props) {
  // Access post fields map
  const banner = props.banner.fields;
  const shldRender = () => {
    banner.toBeRendered;
  };
  return (
    <div className="container" style={{ width: "100%" }}>
      <div className="card-header">
        <div
          className="card-subtitle text-black"
          style={{ backgroundColor: "lightblue" }}
        >
          {banner.message}
        </div>
      </div>
    </div>
  );
}

export default Banner;
