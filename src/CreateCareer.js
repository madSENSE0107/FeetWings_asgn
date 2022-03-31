import React, {  useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

export default function CreateCareer() {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);

  const employment_type = [
    "Full Time",
    "Part Time",
    "Contract",
    "Temporary",
    "Voluntary",
    "Internship",
  ];
  const Job_Section = [
    "Business Systems",
    "Design",
    "Engineering",
    "Finance",
    "Human Resource",
    "Legal",
    "Marketting",
    "Operations",
    "Product",
    "Sales",
    "Security",
    "Support",
  ];
  const workPlace = ["On-site", "Hybrid", "Remote"];
  const options_types = employment_type.map((i) => (
    <option value={i}>{i}</option>
  ));
  const job_types = Job_Section.map((i) => <option value={i}>{i}</option>);
  const workPlace_type = workPlace.map((i) => <option value={i}>{i}</option>);
  return (
    <>
      <h1>Career Dashboard</h1>
      <form>
        <input type="value" placeholder="Title" />
        <select name="Employment Type" placeholder="Title">
          {options_types}
        </select>
        <input type="value" placeholder="Location" />
        <select name="Job Section">{job_types}</select>
        <select name="WorkPlace Options">{workPlace_type}</select>
        <select name="WorkPlace Options">
          <option value="Paid">Paid</option>
          <option value="Gratis">Gratis</option>
        </select>
        <h3>Add a description</h3>
        <div>
          <Slate
            editor={editor}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          >
            <Editable />
          </Slate>
        </div>
      </form>
    </>
  );
}
