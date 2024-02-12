import { Box, Container, Grid } from "@radix-ui/themes";

const App = () => {
  return (
    <>
      <Container>
        <Grid columns={{ xs: "1", sm: "2", md: "3" }}>
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Grid>
      </Container>
    </>
  );
};

export default App;
