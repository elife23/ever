// import dashboardPaths from '@/utils/routes/dashboard_routes';
// import { JaaSMeeting, JitsiMeeting } from '@jitsi/react-sdk'
// import { redirect } from 'next/navigation';
// import React, { useEffect, useState } from 'react'

// type Props = {}

// function Meeting({ }: Props) {
//     const [roomName, setRoomName] = useState("");

//     function handleReadyToClose() {
//         redirect(dashboardPaths.userMeetings);
//     }

//     function generateRoomValue() {
//         // Get the current timestamp in milliseconds
//         const timestamp = new Date().getTime();

//         // Generate a random number between 0 and 9999
//         const random = Math.floor(Math.random() * 10000);

//         // Combine the timestamp and random number
//         const uniqueValue = `${timestamp}${random}`;

//         // Generate a hash using a simple hashing function
//         let hash = 0;
//         for (let i = 0; i < uniqueValue.length; i++) {
//             const char = uniqueValue.charCodeAt(i);
//             hash = ((hash << 5) - hash) + char;
//             hash |= 0; // Convert to 32bit integer
//         }

//         return hash;
//     }

//     useEffect(() => {
//         setRoomName(`${generateRoomValue()}`);
//     }, [])
//     return (
//         <>
//             <div className='h-[90%]'>
//                 <JaaSMeeting
//                     onReadyToClose={handleReadyToClose}
//                     appId={`${process.env.JITSI_APP_ID}`}
//                     roomName={roomName}
//                     // jwt={`${process.env.JITSI_JWT}`}
//                     configOverwrite={{
//                         // disableThirdPartyRequests: false,
//                         // disableLocalVideoFlip: true,

//                         backgroundAlpha: 0.5,
//                         toolbarButtons: ['hangup', 'microphone', 'camera', 'fullscreen', 'chat', 'settings', 'profile', 'participants-pane', 'raisehand','mute-everyone','desktop','download','embedmeeting','etherpad','filmstrip','livestreaming','recording','security','shareaudio','sharedvideo','tileview','grant-moderator','pinToStage','whiteboard', 'mute-video-everyone'],
//                     }}
//                     interfaceConfigOverwrite={{
//                         VIDEO_LAYOUT_FIT: 'nocrop',
//                         MOBILE_APP_PROMO: false,
//                         TILE_VIEW_MAX_COLUMNS: 4
//                     }}
//                     getIFrameRef={ref => {
//                         ref.style.border = "10px solid #3d3d3d"
//                         ref.style.height = "100%";
//                     }}
//                     lang='fr'
//                 />
//             </div>
//         </>
//     )
// }

// export default Meeting

import { useRouter } from 'next/router';
import * as React from 'react';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { ZegoSuperBoardManager } from "zego-superboard-web";

function randomID(len: number) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
        maxPos = chars.length,
        i;
    len = len || 5;
    for (i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
}

// export function getUrlParams(
//     url = window.location.href
// ) {
//     let urlStr = url.split('?')[1];
//     return new URLSearchParams(urlStr);
// }

function Meeting() {

    const router = useRouter();
    function getUrlParams(
        url = router.asPath
    ) {
        let urlStr = url.split('?')[1];
        return new URLSearchParams(urlStr);
    }

    const roomID = getUrlParams().get('roomID') || randomID(5);
    let myMeeting = async (element: any) => {
        // generate Kit Token
        const appID = 1004442819;
        const serverSecret = "3678ec765fd61bad23c0b688c7cb5ff9";
        // const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));


        // Create instance object from Kit Token.
        const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");
        const { ZegoSuperBoardManager } = await import("zego-superboard-web");
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), "user.firstname");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // Init the whiteboard
        zp.addPlugins({ZegoSuperBoardManager});
        // const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            showTurnOffRemoteCameraButton: false,
            showTurnOffRemoteMicrophoneButton: false,
            showRemoveUserButton: false,
            showInviteToCohostButton: true,
            preJoinViewConfig: {
                title: 'Rejoindre la réunion',
            },
            container: element,
            sharedLinks: [
                {
                    name: '',
                    // url:
                    //     window.location.protocol + '//' +
                    //     window.location.host + router.asPath +
                    //     '?roomID=' +
                    //     roomID,
                    url:
                        window.location.protocol + '//' +
                        window.location.host + router.asPath +
                        '?roomID=' +
                        roomID,
                },
            ],
            scenario: {
                
                mode: ZegoUIKitPrebuilt.VideoConference, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
            
            whiteboardConfig: {
                showAddImageButton: true,
                showCreateAndCloseButton: true,
            }
        });
    };


    return (
        <div
            className="myCallContainer h-[90%] text-primary"
            ref={myMeeting}
        ></div>
    )
}

export default Meeting