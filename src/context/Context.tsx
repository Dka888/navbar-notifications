import React from 'react';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { notificationsData } from "../data/data";
import { Notification, typeFiltered } from '../types/types';


export interface ContextInterface {
    notifications: Notification[],
    handleUnreadedNotifications: () => void,
    allNotifications: () => void,
    handleAllReadNotifications: () => void,
    shownNotifications:  Notification[],
    handleReadNotification: (id: number) => void
}

export const ContextData = createContext<ContextInterface>({
    notifications: [],
    handleUnreadedNotifications: () => {},
    allNotifications: () => {},
    handleAllReadNotifications: () => {},
    shownNotifications: [],
    handleReadNotification: () => {},
})

export const ContextDataProvider = ({children}: {children: React.ReactNode}) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [filtered, setFiltered] = useState<typeFiltered>(typeFiltered.all);

   useEffect(() => {
        if(!localStorage.getItem('notifications')) {
            localStorage.setItem('notifications', JSON.stringify(notificationsData));
        }

        const notificationsLocalStorage = localStorage.getItem('notifications');

        if(notificationsLocalStorage) {
            setNotifications(JSON.parse(notificationsLocalStorage).sort((a: Notification, b: Notification) => {
                const dateA = new Date(a.date).toISOString()
                const dateB = new Date(b.date).toISOString()

                return dateB.localeCompare(dateA);
            }));
        }
    }, [])

    const handleUnreadedNotifications = useCallback(() => {
        setFiltered(typeFiltered.unread);
    }, []);

    const allNotifications = useCallback(() => {
       setFiltered(typeFiltered.all);
    }, [])

    const handleReadNotification = useCallback((id: number) => {
        const localNotes = localStorage.getItem('notifications');

        if(localNotes) {
            const newNotifications = JSON.parse(localNotes).map((note: Notification )=> {
                if(note.id === id) {
                    note.isRead = true;
                }
                return note;
            })

            setNotifications(newNotifications);
        }
    }, [])

    const handleAllReadNotifications = useCallback(() => {
       const newNotifications = notifications.map(note => { 
            if(!note.isRead) note.isRead = true;
            return note;
        });

        localStorage.clear();
        localStorage.setItem('notifications', JSON.stringify(newNotifications));
        setNotifications(newNotifications);
    }, [notifications])

    const shownNotifications = useMemo(() => {
        let Notes = notifications;
        if(filtered === typeFiltered.unread) {
            Notes = Notes.filter(note => !note.isRead)
        }

        return Notes;
    }, [filtered, notifications])
    
    return (
        <ContextData.Provider value={{
            notifications,
            handleReadNotification,
            handleUnreadedNotifications,
            allNotifications,
            handleAllReadNotifications,
            shownNotifications
        }}>
            {children}
        </ContextData.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useContextData = () => useContext(ContextData);