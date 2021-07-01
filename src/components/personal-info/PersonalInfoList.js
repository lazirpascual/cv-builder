import React, { useContext } from "react";
import { PersonalInfoContext } from "../../contexts/PersonalInfoContext";

const PersonalInfoList = () => {
  const { personalInfo } = useContext(PersonalInfoContext);

  return (
    <div>
      <li>{personalInfo.name}</li>
      <li>{personalInfo.biography}</li>
      <li>{personalInfo.address}</li>
      <li>{personalInfo.phone}</li>
      <li>{personalInfo.email}</li>
      <li>{personalInfo.linkedIn}</li>
    </div>
  );
};

export default PersonalInfoList;
