import { useEffect, useRef } from 'react';
import VideoInfo from '../../types/VideoInfo';
import styles from './VideoPlayer.module.scss';

const VideoPlayer: React.FC<{videoInfo: VideoInfo}> = ({videoInfo}) => {
    const youtubeFrame = useRef<HTMLIFrameElement>(null);
    useEffect(() => {
        //нихуя не работает
        //SecurityError: Blocked a frame with origin "http://localhost:3000" from accessing a cross-origin frame.
        
        // youtubeFrame.current?.addEventListener("load", () => {
        //     console.log('load start');
        //     const videoEl = youtubeFrame.current?.contentWindow?.document.getElementsByTagName("video")[0];
        //     console.log(videoEl);
        //     if(videoEl !== null && typeof(videoEl) !== 'undefined') {
        //         console.log('videoEl find');
        //         videoEl.addEventListener('play', (ev:Event) => {
        //             const $this = ev.target as HTMLVideoElement;
        //             (function loop() {
        //                 if (!$this.paused && !$this.ended) {
        //                     console.log('test');
        //                     setTimeout(loop, 10000); // drawing at 30fps
        //                 }
        //             })();
        //         });
        //     }
        // });
        console.log('useEffect');
    })
    return (
        <div className={styles.component}>
            <iframe ref={youtubeFrame} className={styles.player} 
                title="videoPlayer"
                src={videoInfo.url}>
            </iframe>
        </div>
    );
}

export default VideoPlayer;