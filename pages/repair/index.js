import axios from "axios";
import Appliances from "@/components/appliances";
import ApplianceList from "@/components/applianceList";
import Link from "next/link";

async function fetchAppliancesByBrand(slug) {
  const entries = await client.getEntries({
    content_type: "brands",
    "fields.name": slug,
  });

  return entries;
}

const Repair = ({ appliances }) => {
  return (
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="row">
          {portfolios.map((portfolio) => (
            <div key={portfolio._id} className="col-md-4">
              <Link
                href={`/portfolios/[id]`}
                as={`/portfolios/${portfolio._id}`}
              >
                <a className="card-link">
                  <PortfolioCard portfolio={portfolio} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

Portfolios.getInitialProps = async () => {
  const portfolios = await fetchPortfolios();
  return { portfolios };
};

export default Portfolios;
