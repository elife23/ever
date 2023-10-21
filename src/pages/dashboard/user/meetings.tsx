import dashboardPaths from '@/utils/routes/dashboard_routes'
import { JaaSMeeting, JitsiMeeting } from '@jitsi/react-sdk'
import { Button, Link } from '@nextui-org/react'
import React, { useState } from 'react'

type Props = {}

function MyVisioconference({ }: Props) {


    return (
        <>
            <div className="flex flex-col py-1 px-1">
                <div className="navbar bg-white mb-2 rounded-md">

                    <div className="navbar-end">
                        {/* Meeting navbar */}
                        <div>
                            <Button
                                href={dashboardPaths.meeting}
                                as={Link}
                                color="primary"
                                showAnchorIcon
                                variant="solid"
                            >
                                Lancer une visio
                            </Button>            </div>
                        {/* <button className="btn bg-primary text-white hover:bg-primary" onClick={() => document.getElementById("meet_modal").showModal()}>open modal</button>
            <dialog id="meet_modal" className="modal backdrop-blur-sm">
              <div className="modal-box h-screen w-screen">
                

              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog> */}
                    </div>
                </div>
            </div>
        </>
    )
}



export default MyVisioconference