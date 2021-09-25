import { RouteComponentProps } from "react-router";
import Wrapper from "../../layouts/Wrapper";

const NotFoundPage: React.FC<RouteComponentProps> = () => (
    <Wrapper>
        <h1>Страница не найдена.</h1>
    </Wrapper>
);

export default NotFoundPage;