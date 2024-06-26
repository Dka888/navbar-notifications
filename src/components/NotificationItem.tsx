import React from 'react';
import { takeIcon } from "../data/services"
import { typeProject, Notification } from "../types/types"

interface NotificationProps {
    notification: Notification,
}

export const NotificationItem = ({ notification }: NotificationProps) => {
    const {type, action, title, company, user, project, date, isRead} = notification;
    return (
        <>
           <div className='flex flex-row justify-between'>
                <div className="flex w-2/3">
                    <div>
                        {takeIcon(action)}
                    </div>
                <div className="flex-start text-sm">
                    {type === typeProject.request && (
                        <p>
                            <span className="font-semibold">{user}</span> from <span className="font-semibold">{company}</span> {' '}
                            has {`a ${action} ${title} for`} their {project}
                        </p>
                    )}

                    {type === typeProject.statusChange && (
                         <p>
                         <span className="font-semibold">{user}</span> from <span className="font-semibold">{company}</span> {' '}
                         has {action} their {project}
                     </p>
                    )}

                    {type === typeProject.feature && (
                        <p className="font-semibold">New MindToolFeature: {title}</p>
                    )}
                        <p className="text-xs my-4">{date.toString()}</p>
                    </div>
                </div>
                { !isRead && <div className="w-4 h-4 rounded-3xl bg-blue-700 mr-4"></div>}
            </div> 
        </>
    )
}