import {Notification, typeAction, typeProject} from '../types/types';

export const notificationsData: Notification[] = [
    {
        id: 0,
        isRead: false,
        date: "25 Jun 2024",
        user: 'Jan Nowak',
        company: "MindPal",
        project: "Minddev",
        type: typeProject.request,
        title: 'Mindocument',
        action: typeAction.request
    },

    {
        id: 1,
        isRead: true,
        date: "26 Jun 2024",
        user: 'Nicolas Stephans',
        company: "MindPal",
        project: "SFxGliwie",
        type: typeProject.statusChange,
        action: typeAction.put
    },
    {
        id: 2,
        isRead: false,
        date: "24 Jun 2024",
        user: 'Gregory Jones',
        company: "MindPal",
        project: "Project 123",
        type: typeProject.statusChange,
        action: typeAction.delete
    },
    {
        id: 3,
        isRead: false,
        date: "25 Jun 2024",
        user: 'Lucy Gale',
        company: "MindPal",
        project: "Gliwice",
        type: typeProject.request,
        action: typeAction.request
    },
    {
        id: 4,
        isRead: false,
        date: "26 Jun 2024",
        company: "MindPal",
        type: typeProject.feature,
        title: 'AI Assistant',
        action: typeAction.tool
    },
    {
        id: 5,
        isRead: true,
        date: "31 Dec 2023",
        company: "MindPal",
        type: typeProject.feature,
        title: 'We have launched new product!',
        action: typeAction.launch
    },
]
