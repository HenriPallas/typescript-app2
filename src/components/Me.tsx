import { Box, List, ListItem, Stack, TextField, Button } from "@mui/material";
import { Typography } from "@mui/material";

const hobbiesInterests = [
    { title: 'Video Games', isHobby: true, isInterest: true, id:1},
    { title: 'Anime', isHobby: true, isInterest: true, id:2},
    { title: 'Manga', isHobby: true, isInterest: true, id:3},
    { title: 'Cooking', isHobby: true, isInterest: true, id:4},
    { title: 'Baking', isHobby: true, isInterest: true, id:5},
    { title: 'Computers', isHobby: false, isInterest: true, id:6},
    { title: 'Programming', isHobby: false, isInterest: true, id:7},
];

export default function Me(){

    const arrayItems = hobbiesInterests.map(item =>
        <ListItem>
            <Typography variant="body1">
                	{item.title}
            </Typography>
        </ListItem>
    );


    const MyName = ({ title = "Undefined" }) => {
        return <h1>Hello, my name is {title}</h1>;
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}>
                <Stack gap={5}>
                    <Typography variant="h4">Hello, my name is Henri</Typography>
                    <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    >
                        <Typography variant="h5">My hobbies and interests:</Typography>
                        <List>
                            {arrayItems}
                        </List>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}>
                        <Stack gap={2}>
                            <Typography
                                variant="h5"
                                sx={{ textAlign: "center", textTransform: "uppercase" }}
                            >
                                Contact Me:
                            </Typography>
                            <TextField
                                name="email"
                                label="Email"
                                variant="outlined"
                            />
                            <TextField
                                name="message"
                                label="Your Message"
                                variant="outlined"
                            />
                            <Button variant="contained" type="submit">
                                Send!
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </>
    );
};