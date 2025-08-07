import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LocationPinIcon from "@mui/icons-material/LocationPin";

export default function Accordions({
  header,
  detail,
  started,
  ended,
  image,
  location,
  stack,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "73vw",
          }}
        >
          <Typography
            style={{
              fontFamily: "Omnes",
            }}
            variant="h6"
          >
            {header}
          </Typography>
          <Typography
            style={{
              fontFamily: "Omnes",
            }}
            variant="h6"
          >
            {started} - {ended || "present"}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <div
          style={{
            fontFamily: "Omnes elight",
            fontWeight: '500'
          }}
        >
          <img
            style={{
              height: "100px",
              borderRadius: "10px",
            }}
            alt={image}
            src={image}
          ></img>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: "5px",
              marginBottom: "20px",
              marginTop: "10px",
            }}
          >
            <LocationPinIcon></LocationPinIcon>
            <p style={{ fontFamily: "Omnes light italic" }}>
              {location || "Unavailable"}
            </p>
          </div>
          {detail}
          <ul
            style={{
              display: "flex",
              gap: "5px",
              marginTop: "20px",
            }}
          >
            {stack?.map((ele, index) => (
              <li
                style={{
                  listStyle: "none",
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "2vh",
                  padding: "5px 15px",
                  borderRadius: "30px",
                  fontFamily: "Omnes light",
                }}
                key={index}
              >
                {ele}
              </li>
            ))}
          </ul>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
