import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed and developed by
        <Button
        href="https://soltane-rezaiguia-5b272.web.app/#hero"
        target="_blanc"
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#00a2ff",
          }}
          variant="text"
          color="primary"
        >
          Rezaiguia Soltane
        </Button>
        ©2024
      </Typography>
    </Box>
  );
};

export default Footer;