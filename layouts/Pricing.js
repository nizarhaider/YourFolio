import Link from "next/link";
import Cta from "./components/Cta";
import React, { useRef } from "react";



export function Pricing({ data }) {
  // const {
  //   frontmatter: { title, plans, call_to_action },
  // } = data;
  const { title, plans, call_to_action } = data;
  const pricingRef = useRef(null);

  return (
    <>
      <section className="section pb-0" ref={pricingRef}>
        <div className="container">
          <h2 className="text-center">{title}</h2>
          <div className="section row -mt-10 justify-center md:mt-0">
            {plans.map((plan, index) => (
              <div
                className={`col-12 md:col-4 ${
                  !plan.recommended ? "lg:px-0" : "col-recommended"
                }`}
                key={plan.title + index}
              >
                <div className="card text-center rounded-2xl">
                  <h4>{plan.title}</h4>
                  <div className="mt-5">
                    <span className="text-5xl text-dark">RM{plan.price}</span>
                    <span> {plan.type}</span>
                  </div>
                  <h5 className="mt-2 font-normal text-text">
                    {plan.subtitle}
                  </h5>
                  <ul className="mt-5">
                    {plan.features.map((feature, index) => (
                      <li className="mb-[10px] leading-5" key={index}>
                        <span className="inline-block mr-2 h-3 w-3">
                          <img src="/images/checkmark-circle.svg"/>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className={`btn mt-5 ${
                      plan.recommended ? "btn-primary" : "btn-outline-primary"
                    }`}
                    href={plan.button.link}
                    rel={plan.button.rel}
                  >
                    {plan.button.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Cta cta={call_to_action} /> */}
    </>
  );
}

export default Pricing;
