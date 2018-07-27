import React, { Component } from "react";

import ReactShowHideComponent from "react-showhide-component";

const arr = [1, 2, 3, 4, 5];

const text =
  "Vindice nubes diffundi fecit militis. Ardentior lacusque adspirate toto umentia mundi quisque vultus. Suis quinta dispositam solum erat moles pace vis norant. Corpora proxima nullus. Cingebant pendebat melioris origo tractu discordia. Quem dicere? Neu praebebat triones pendebat naturae habentem formaeque animalibus melioris scythiam.Silvas nitidis magni traxit. Dissociata locis spisso formaeque dixere partim. Erat haec. Dei ubi auroram flamma. Eodem ultima nec prima melior coercuit deorum ora. Duae et? Perveniunt satus quicquam lapidosos ille sublime cornua sublime. Ora passim ab tepescunt lumina adspirate dixere induit congeriem.Terras primaque induit. Natura nunc ardentior ardentior subsidere utramque. Orbis possedit sectamque litem fontes. Onus orba triones terrarum naturae. Caelumque naturae gentes crescendo! Effervescere caeca membra! Otia tellure secrevit pro fontes unus flamma. Austro gentes moles primaque fuit vindice ante dextra locavit pulsant.";

export default class App extends Component {
  render() {
    const listHtml = arr.map((elem, i) => {
      return (
        <div
          key={i}
          style={{
            padding: "10px",
            border: "1px solid",
            margin: "10px"
          }}
        >
          {elem}
        </div>
      );
    });
    return (
      <div>
        <ReactShowHideComponent
          items={listHtml}
          minItems={2}
          viewMoreButton={
            <div
              key={`view-more-${Math.random() * 1000}`}
              style={{
                padding: "10px",
                border: "1px solid",
                margin: "10px"
              }}
            >
              View More
            </div>
          }
          viewLessButton={
            <div
              key={`view-less-${Math.random() * 1000}`}
              style={{
                padding: "10px",
                border: "1px solid",
                margin: "10px"
              }}
            >
              View Less
            </div>
          }
        />

        <br />
        <br />

        <div
          style={{
            padding: "10px",
            border: "1px solid",
            margin: "10px"
          }}
        >
          <ReactShowHideComponent
            mode="string"
            items={text}
            minItems={2}
            viewMoreButton={
              <span
                key={`view-more-${Math.random() * 1000}`}
                style={{
                  "text-decoration": "underline",
                  cursor: "pointer",
                  color: "#cb3837",
                  marginLeft: "5px"
                }}
              >
                ...View More
              </span>
            }
            viewLessButton={
              <span
                key={`view-less-${Math.random() * 1000}`}
                style={{
                  "text-decoration": "underline",
                  cursor: "pointer",
                  color: "#cb3837",
                  marginLeft: "10px"
                }}
              >
                {"<<<"} View Less
              </span>
            }
          />
        </div>
      </div>
    );
  }
}
