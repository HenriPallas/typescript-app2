import { Box, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Stack gap={10}>

                    <Box>

                        <Stack gap={10}>

                            <Box                
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Typography variant="h2">
                                    Welcome!
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Typography variant="body1">
                                    This site was created for the "Programming of applications" course at TLU.
                                </Typography>
                                <Typography>
                                    Feel free to look around.
                                </Typography>
                            </Box>

                        </Stack>

                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <Button component={Link} to="/" color="primary" size="large">Home</Button>
                            <Button component={Link} to="/aboutme" color="primary" size="large">About Me</Button>
                            <Button component={Link} to="/form" color="primary" size="large">Login</Button>
                        </Box>

                    </Box>

                </Stack>

            </Box>
        </>
    );
}