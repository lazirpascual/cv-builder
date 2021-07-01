import { Grid, Avatar } from "@material-ui/core";
import React, { useContext, useState, useEffect } from "react";
import MainInfo from "./MainInfo";
import SecondaryInfo from "./SecondaryInfo";
import { BuildContext } from "../../contexts/BuildContext";
import { PersonalInfoContext } from "../../contexts/PersonalInfoContext";
import PersonalInfoList from "./PersonalInfoList";

// Material-UI import
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  field: {
    padding: 10,
  },
  spacing: {
    marginBottom: 20,
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    marginTop: 20,
    marginRight: 10,
  },
  switch: {
    marginTop: 20,
    marginLeft: 11,
  },
}));

const PersonalInfo = () => {
  const classes = useStyles();
  const { build } = useContext(BuildContext);
  const { saveInput, personalInfo } = useContext(PersonalInfoContext);
  const [name, setName] = useState(personalInfo.name);
  const [biography, setBiography] = useState(personalInfo.biography);
  const [address, setAddress] = useState(personalInfo.address);
  const [phone, setPhone] = useState(personalInfo.phone);
  const [email, setEmail] = useState(personalInfo.email);
  const [linkedIn, setLinkedIn] = useState(personalInfo.linkedIn);

  useEffect(() => {
    return !build
      ? saveInput(name, biography, address, phone, email, linkedIn)
      : null;
  }, [build]);

  return build ? (
    <Container>
      <Grid container direction="row">
        <Grid item xs="auto" md="auto" lg="auto" className={classes.field}>
          <Avatar className={classes.large}>User</Avatar>
        </Grid>
        <Grid item xs={4} md={4} lg={6} className={classes.field}>
          <MainInfo
            name={name}
            biography={biography}
            setName={setName}
            setBiography={setBiography}
          />
        </Grid>
        <Grid item xs="auto" md="auto" lg="auto" className={classes.field}>
          <SecondaryInfo
            address={address}
            phone={phone}
            email={email}
            linkedIn={linkedIn}
            setPhone={setPhone}
            setAddress={setAddress}
            setEmail={setEmail}
            setLinkedIn={setLinkedIn}
          />
        </Grid>
      </Grid>
    </Container>
  ) : (
    <PersonalInfoList />
  );
};

export default PersonalInfo;
