import { RouteComponentProps } from "react-router-dom";
import WideWrapper from "../../layouts/WideWrapper";
import Statistics from "../../Statistics";
import VideoPlayer from "../../VideoPlayer";

const ReportPage: React.FC<RouteComponentProps<{ videoId: string }>> = ({ match }) => {
    const videoInfo = {
        id: match.params.videoId,
        url: 'https://www.youtube.com/embed/jKKWgokQu5M'
    };
    return (
    <WideWrapper>
        <table>
            <tbody>
                <tr>
                    <td>
                        <VideoPlayer videoInfo={videoInfo}/>
                    </td>
                    <td>
                        <Statistics videoId={match.params.videoId}/>
                    </td>
                </tr>
            </tbody>
        </table>
    </WideWrapper>);
};

export default ReportPage;