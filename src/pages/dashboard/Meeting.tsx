import dashboardPaths from '@/utils/routes/dashboard_routes';
import { JaaSMeeting, JitsiMeeting } from '@jitsi/react-sdk'
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type Props = {}

function Meeting({ }: Props) {
    const [roomName, setRoomName] = useState("");

    function handleReadyToClose() {
        redirect(dashboardPaths.userMeetings);
    }

    function generateRoomValue() {
        // Get the current timestamp in milliseconds
        const timestamp = new Date().getTime();

        // Generate a random number between 0 and 9999
        const random = Math.floor(Math.random() * 10000);

        // Combine the timestamp and random number
        const uniqueValue = `${timestamp}${random}`;

        // Generate a hash using a simple hashing function
        let hash = 0;
        for (let i = 0; i < uniqueValue.length; i++) {
            const char = uniqueValue.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Convert to 32bit integer
        }

        return hash;
    }

    useEffect(() => {
        setRoomName(`${generateRoomValue()}`);
    }, [])
    return (
        <>
            <div className='h-[90%]'>
                <JitsiMeeting
                    onReadyToClose={handleReadyToClose}
                    // appId={`${process.env.JITSI_APP_ID}`}
                    roomName={roomName}
                    // jwt={`${process.env.JITSI_JWT}`}
                    configOverwrite={{
                        // disableThirdPartyRequests: false,
                        // disableLocalVideoFlip: true,

                        backgroundAlpha: 0.5,
                        // toolbarButtons: ['hangup', 'microphone', 'camera', 'fullscreen', 'chat', 'settings', 'profile', 'participants-pane', 'i'],
                    }}
                    interfaceConfigOverwrite={{
                        VIDEO_LAYOUT_FIT: 'nocrop',
                        MOBILE_APP_PROMO: false,
                        TILE_VIEW_MAX_COLUMNS: 4
                    }}
                    getIFrameRef={ref => {
                        ref.style.border = "10px solid #3d3d3d"
                        ref.style.height = "100%";
                    }}
                    lang='fr'
                />
            </div>
        </>
    )
}

export default Meeting