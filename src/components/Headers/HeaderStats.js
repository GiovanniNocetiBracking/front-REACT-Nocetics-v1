import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import CO from "components/Firebase/Co";
import GLP from "components/Firebase/Glp";
import SMOKE from "components/Firebase/Smoke";

export default function HeaderStats() {
  const co = <CO />;
  const glp = <GLP />;
  const smoke = <SMOKE />;
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="GAS LICUADO DE PETROLEO"
                  statTitle={glp}
                  statIconName="fas fa-dumpster-fire"
                  statIconColor="bg-black"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="MONOXIDO DE CARBONO"
                  statTitle={co}
                  statIconName="fas fa-skull-crossbones"
                  statIconColor="bg-black"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="HUMO"
                  statTitle={smoke}
                  statIconName="fas fa-cloud-meatball"
                  statIconColor="bg-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
