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
            enableUserSearch: true,
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
        <div className="bg-tertiary bg-[url(/images/backgrounds/meetingRoom.png)] bg-no-repeat bg-cover bg-center h-[90vh] flex items-center justify-center">
            <div
                className={`myCallContainer text-primary h-full w-screen shadow-none meeting-parent`}
                ref={myMeeting}
            ></div>
        </div>
    )
}

export default Meeting