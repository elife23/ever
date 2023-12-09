import { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'

type Props = {
    title: string,
    icon: ReactNode,
    subtitle: string,
    body: string,

}

function CollaborationCallCard({ title, icon, subtitle, body }: Props) {
    return (
        <div className="card bg-light w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex items-center gap-x-1">
                    {icon}
                    <h3 className="font-semibold">{subtitle}</h3>
                </div>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default CollaborationCallCard