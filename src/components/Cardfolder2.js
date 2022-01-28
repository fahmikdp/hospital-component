import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function MediaControlCard() {
  return (
    <Card
      sx={{
        display: "flex",
        width: "303.01px",
        height: "65.68px",
        borderRadius: "0.429rem",
        bgcolor: "rgba(72, 181, 39, 0.5)",
        boxShadow: " 0px 2px 4px grey",
        mr: 2,
      }}
      style={{ padding: "1.609rem 1.609rem" }}
    >
      <Box sx={{ mt: -2, ml: -2 }}>
        <svg width="6em" height="6em">
          {/* Atur gradient */}
          <linearGradient
            id="green-gradient"
            x1="40%"
            y1="100%"
            x2="40%"
            y2="40%"
          >
            <stop stopColor="#36871D" offset="40%" />
            <stop stopColor="#48B527" offset="100%" />
          </linearGradient>
          {/* Icon */}
          <FolderIcon style={{ fill: "url(#green-gradient)" }} />
        </svg>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ mt: 3 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: "20.59px",
              color: "000",
              fontFamily: "poppins",
              mt: -5,
            }}
            style={{ fontWeight: "600" }}
          >
            Completed Patient
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "15.44px",
              color: "#fff",
              fontFamily: "poppins",
              fontWeight: "600",
              pt: 1,
            }}
          >
            5 Patient
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 22,
              fontSize: "15.44px",
              fontFamily: "poppins",
              color: "#36871D",
              fontWeight: "bold",
              ml: -2,
              mt: -3.6,
            }}
          >
            5%
            <ArrowDropUpIcon fontSize="large" sx={{ color: "#36871D" }} />
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
