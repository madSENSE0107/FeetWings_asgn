import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "./CreateCareer.css";

export default function CreateCareer() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const final_info = [
    {
      employment_type: "",
      Job_Section: "",
      workPlace: "",
      title: "",
      location: "",
      payment: "",
      job_Description: "",
    },
  ];

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

  const [Job_Section_value, setJob_Section_value] = useState("");
  const [employmentTypeValue, setemploymentTypeValue] = useState("");
  const [jobType, setjobType] = useState("");
  const [payment, setPayment] = useState("");
  const [location, setLocation] = useState("");
  const [richText, setRichText] = useState("");
  const [jobSkill, setjobSkill] = useState("");
  const [jobTitleValue, setJobTitleValue] = useState("");

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
        <input type="value" onChange={(e)=>setJobTitleValue(e.target.value)} placeholder="Title" />
        <select
          onChange={(e) => setJob_Section_value(e.target.value)}
          name="Employment Type"
          placeholder="Title"
        >
          {options_types}
        </select>
        <input type="value" placeholder="Location" onChange={(e)=>setLocation(e.target.value)} />
        <select onChange={(e) => setjobType(e.target.value)} name="Job Section">{job_types}</select>
        <select
          onChange={(e) => setemploymentTypeValue(e.target.value)}
          name="WorkPlace Options"
        >
          {workPlace_type}
        </select>
        <select onChange={(e)=>setPayment(e.target.value)} name="WorkPlace Options">
          <option value="Paid">Paid</option>
          <option value="Gratis">Gratis</option>
        </select>
        <h3>Add a description</h3>
        <div className="text_editor">
          <Editor editorState={editorState} onChange={setEditorState} />
        </div>
        <button>Add Skill</button>
        <button>Submit</button>
      </form>
      {Job_Section_value}
      {employmentTypeValue}
      {jobType}
      {setJobTitleValue}
      {Location}
      {payment}
    </>
  );
}
