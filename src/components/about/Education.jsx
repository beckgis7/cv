import React from "react";

const educationContent = [
  {
    year: "2014",
    degree: "Higher National Diploma in Computer Science (HND)",
    // institute: "Koforidua Technical University",
    // details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
    //     adipisicing elit`,
  },
  {
    year: "2009",
    degree: "West African Senior Secondary Certificate Examination (WASSCE)",
    // institute: "",
    // details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
    //     elit, tempor incididunt`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-book"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
