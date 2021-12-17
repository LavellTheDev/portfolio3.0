import "./topbar.scss"
import {Person , Mail} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">lavellwesley.</a>
                    <div className="itemContainer">
                        <Person className = "icon" />
                        <span>+1(111)-111-1111</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className = "icon" />
                        <span>lavellthedev@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">

                </div>
            </div>
        </div>
    )
}
