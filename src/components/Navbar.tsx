import Badge from "@mui/material/Badge"
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal/Modal";
import { Box, Typography } from "@mui/material";
import { Button } from "./Button";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useContextData } from "../context/Context";
import { Notifications } from "./Notifications";
import { Notification } from "../types/types";

export const Navbar = () => {
    const [bandge, setBadge] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    const {notifications, handleUnreadedNotifications, allNotifications, handleAllReadNotifications} = useContextData();

    useEffect(() => {
        const countBandge: number = notifications.reduce((acc: number, curr: Notification) => {
            if(!curr.isRead) {
               return acc += 1; 
            }
            return acc;
        }, 0)
        setBadge(countBandge);
    },[notifications]);

    const handleClose = () => {
        setOpen(false);
    }

    return (
    <>
    <nav className="w-full h-20 shadow flex gap-4 justify-end items-center px-12">
        <div className="text-2xl cursor-pointer" data-testid="HomeIcon">
            <HomeIcon />
        </div>
        <div 
            className="text-2xl cursor-pointer" 
            onClick={() => setOpen(true)} 
            data-testid="NotificationsIcon"
        >
            <Badge badgeContent={bandge} color="primary">
                <NotificationsIcon />
            </Badge>
        </div>
    
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='w-[700px] ml-auto max-h-[90vh] p-4 mt-12 mr-1 rounded overflow-hidden'
        >
        <Box 
            className='m-auto bg-white p-4 border-white rounded h-full overflow-scroll scroll-auto'
        >
            <Typography id="modal-modal-title" variant="h6" component="h2">
                <Badge badgeContent={bandge} color="warning">
                    <h1 className="w-32 font-semibold">Notifications</h1>
                </Badge>
            </Typography>
            <Typography id="modal-modal-nav" sx={{m: 4}} className="flex flex-row justify-between items-center">
                <Button title="All Notifications" style='border-black border-2' handleClick={allNotifications}/>
                <Button title="Unread Notifications" style='bg-gray-200' handleClick={handleUnreadedNotifications} />
                <div 
                    className="text-sm text-blue-700 text-center cursor-pointer" 
                    onClick={handleAllReadNotifications}
                >
                    <DoneAllIcon color="primary"/>
                    {' '}
                    Mark all as read
                </div>
                <div 
                    onClick={() => {}}
                >
                    <SettingsOutlinedIcon data-testid="SettingsOutlinedIcon"/>
                </div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Notifications />
            </Typography>
        </Box>
    </Modal>
    </nav>
    </>
    
    )
}