import { useState } from "react"
import "./modal.less"

const Modal = ({ show, children, onClose }) => {
    const [isShow, setIsSHow] = useState(show)
    const handleClose = () => {
        setIsSHow(false)
        onClose()
    }
    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation() // 阻止事件冒泡导致 modal 关闭
        console.log("handleContentClick")
    }

    if (!isShow) return null

    return (
        <div className="modal-mask" onClick={handleClose}>
            <div className="modal-content" onClick={handleContentClick}>
                {children}
            </div>
        </div>
    )
}

export default Modal