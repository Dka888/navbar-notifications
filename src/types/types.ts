
export interface Notification {
    id: number,
    isRead: boolean,
    date: Date | string, 
    type: typeProject,
    action: typeAction,
    user?: string,
    company: string,
    project?: string,
    title?: string
}

export enum typeAction {
    launch = 'launch',
    tool = 'tool',
    delete = 'delete',
    put = 'put',
    request = 'request',
}

export enum typeProject {
    request = 'Request',
    statusChange = 'Status change to on hold',
    feature = 'New Feature'
}


export enum typeFiltered {
    read = 'read',
    unread = "unread",
    all = 'all',
}