import FeedIcon from '@mui/icons-material/Feed';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import KeyboardControlKeySharpIcon from '@mui/icons-material/KeyboardControlKeySharp';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { typeAction } from '../types/types';

export const takeIcon = (type: typeAction) => {
    let Icon;
    switch(type) {
        case typeAction.delete: 
            Icon = (<div className="rounded-[50%] bg-orange-800 text-white py-2 px-3 w-10 h-10 mr-4 flex items-center justify-center">
                <DeleteOutlinedIcon/>
            </div>)
            break;
        case typeAction.request: 
            Icon = (<div className="rounded-[50%] bg-blue-700 text-white py-2 px-3 w-10 h-10 mr-4 flex items-center justify-center">
                <FeedIcon />
                </div>)
        break;
        case typeAction.launch: 
        Icon = (<div className="rounded-[50%] bg-white text-blue-600 py-2 px-3 w-10 h-10 mr-4 flex items-center justify-center border">
                <KeyboardControlKeySharpIcon />
            </div>)
        break;
        case typeAction.put:
            Icon = (<div className="rounded-[50%] bg-yellow-800 text-white py-2 px-3 w-10 h-10 mr-4 flex items-center justify-center">
                <PauseCircleOutlineOutlinedIcon/>
            </div>)
        break;
        case typeAction.tool: 
            Icon = (<div className="rounded-[50%] bg-purple-500 text-white py-2 px-3 w-10 h-10 mr-4 flex items-center justify-center">
                <LocalFireDepartmentIcon/>
            </div>)
        break;
        default: 
            Icon = (<div className="rounded-[50%] bg-blue-700 text-white py-2 px-3 w-10 h-10 mr-4 flex items-center justify-center">
            <FeedIcon />
            </div>)
    }
    return Icon;
}