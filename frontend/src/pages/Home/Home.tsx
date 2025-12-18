import { StyledContainer } from "./home.styles";
import type { HomeComponent } from "./home.types";
import QueryForm from "../../features/query/components/QueryForm/QueryForm";
import Header from "../../layouts/Header/Header";

const Home: HomeComponent = () => {
    return (
        <StyledContainer>
            <Header/>
            <QueryForm/>
        </StyledContainer>
    )
}

export default Home