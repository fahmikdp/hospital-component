import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DetailButton from "./Button";
import WarningButton from "./WarningButton";
import jamesRobinson from "../img/james.jpeg";

export default function MediaControlCard() {
  return (
    <Card sx={{ display: "flex", width: 470, boxShadow: "0px 6px 24px grey" }}>
      <Box sx={{ pt: 1, pl: 1, pb: 1 }}>
        <CardMedia
          component="img"
          sx={{ width: 192, height: 133, borderRadius: 3, align: "center" }}
          image={jamesRobinson}
          alt="patient"
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ pl: 24, pt: 1 }}>
          <WarningButton />
        </Box>
        <CardContent sx={{ mt: -5 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: 16, fontFamily: "poppins", fontWeight: "bold" }}
          >
            James Robinson
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: 12, fontFamily: "poppins", fontStyle: "italic" }}
          >
            120 Years Old
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: 12,
              fontFamily: "poppins",
              fontWeight: "bold",
              color: "#3D5A80",
            }}
          >
            Covid
          </Typography>
        </CardContent>

        <Box
          sx={{ display: "flex", alignItems: "center", pl: 4, ml: 15, pt: 3 }}
        >
          <DetailButton />
        </Box>
      </Box>
    </Card>
  );
}
