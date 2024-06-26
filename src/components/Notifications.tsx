import classNames from "classnames";
import { useContextData } from "../context/Context";
import { NotificationItem } from "./NotificationItem";


export const Notifications = () => {

    const { shownNotifications, handleReadNotification } = useContextData();

    return (
        <ul>
              {shownNotifications.map(notification => {

                    return (
                        <li 
                            className={classNames({'bg-gray-100 rounded-lg': !notification.isRead}, 'my-2 py-4 px-4 min-h-8')} 
                            key={notification.id}
                            onClick={() => handleReadNotification(notification.id)}
                        >
                            <NotificationItem notification={notification} /> 
                        </li>
                    )
                })}
        </ul>
    )
}