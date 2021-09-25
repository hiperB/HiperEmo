import Wrapper from "../../layouts/Wrapper";
import LicenseInfo from "../../LicenseInfo";
import Loader from "../../Loader";
import MainInfo from "../../MainInfo";

const MainPage: React.FC = () => (
    <Wrapper>
        <MainInfo></MainInfo>
        <Loader></Loader>
        <LicenseInfo></LicenseInfo>
    </Wrapper>
);

export default MainPage;