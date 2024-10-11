import { headerNav } from "@/constants/nav"
import { Menu } from "antd"
import { useNavigate } from "react-router-dom"

const HeaderBar = () => {
    const navigator = useNavigate()
    const onMenuClick = (e: any) => {
        console.log(e)
        navigator(e.path)
    }
    return (
        <Menu mode="horizontal" onClick={onMenuClick} items={headerNav} />
    )
}

export default HeaderBar