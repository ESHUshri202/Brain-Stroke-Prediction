import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-[#dddd]/20 p-12">
        <div>
          <div>
            <h1 className="text-center text-5xl font-bold font-sherif">
              About the Stroke
            </h1>
            <div className="flex justify-center gap-4">
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-xl italic p-10">
                A brain stroke occurs when blood flow to a part of the brain is
                disrupted, leading to brain cell damage. Strokes can be
                categorized into ischemic strokes (caused by blocked arteries)
                and hemorrhagic strokes (caused by bleeding in the brain).
                Several factors contribute to the risk of stroke, including
                medical conditions, lifestyle choices, and genetic
                predispositions.
              </h3>
            </div>
          </div>
          <div>
            <h1 className="text-4xl italic text-center font-bold">
              Types Of Stroke
            </h1>
            <div className="flex justify-center gap-4">
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
            </div>
          </div>
          <ul className="p-12 gap-12 list-disc">
            <li className="pb-4">
              <h2 className="font-bold">
                Ischemic Stroke (Most Common – 87% of Cases)
              </h2>
              <p>
                This type occurs when a blood clot or plaque buildup blocks
                blood flow to the brain. It is further divided into: Thrombotic
                Stroke: A blood clot forms inside an artery supplying blood to
                the brain. Embolic Stroke: A clot or debris from another part of
                the body (usually the heart) travels to the brain and blocks
                blood flow.
              </p>
            </li>
            <li className="pt-4">
              <h2 className="font-bold">
                Hemorrhagic Stroke (Less Common but More Severe)
              </h2>
              <p>
                This occurs when a blood vessel in the brain bursts, leading to
                bleeding in or around the brain. It is further classified into:
                Intracerebral Hemorrhage (ICH): Bleeding directly into the brain
                tissue. Subarachnoid Hemorrhage (SAH): Bleeding into the space
                between the brain and its protective covering, often caused by a
                ruptured aneurysm.
              </p>
            </li>
            <li className="pt-4">
              <h2 className="font-bold">
                Transient Ischemic Attack (TIA) – "Mini-Stroke"
              </h2>
              <p>
                A temporary blockage of blood flow to the brain that resolves
                within 24 hours without permanent damage. It serves as a warning
                sign for future strokes.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-4xl italic text-center font-bold">
            Causes Of Stroke
          </h1>
          <div className="flex justify-center gap-4">
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
          </div>
          <ul className="list-disc p-12 gap-12">
            <li className="pb-4">
              <h1 className="font-bold">
                Blockages in Blood Vessels (Ischemic Stroke Causes)
              </h1>
              <p>
                Atherosclerosis (Plaque Buildup): Fatty deposits narrow arteries
                and restrict blood flow.
                <br />
                Blood Clots: Form due to irregular heart rhythms (like atrial
                fibrillation) or deep vein thrombosis (DVT).
                <br />
                Carotid Artery Disease: Narrowing of the carotid arteries
                supplying blood to the brain.
              </p>
            </li>
            <li className="pb-4">
              <h1 className="font-bold">
                Blood Vessel Ruptures (Hemorrhagic Stroke Causes)
              </h1>
              <p>
                High Blood Pressure (Hypertension): Weakens blood vessel walls,
                increasing rupture risk.
                <br />
                Aneurysms: Bulging weak spots in arteries that may burst.
                <br />
                Arteriovenous Malformations (AVMs): Abnormal blood vessel
                connections that may rupture.
                <br />
                Head Trauma: Severe injury leading to bleeding in the brain.
              </p>
            </li>
            <li>
              <h1 className="font-bold">Other Causes</h1>
              <p>
                Heart Disease & Atrial Fibrillation: Increases clot formation.
                <br />
                Diabetes: Damages blood vessels over time.
                <br />
                Obesity & Poor Diet: Contributes to high cholesterol,
                hypertension, and diabetes.
                <br />
                Smoking & Alcohol: Damages blood vessels and raises blood
                pressure.
                <br />
                Genetic Factors: Family history of stroke or cardiovascular
                disease.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
