function Modal({ handleClose, isClose, children }) {
    return (
        <div onClick={handleClose} className={`backdrop-blur-sm  fixed inset-0 bg-black/40 z-30 h-screen grid place-items-center ${isClose && 'transition-all hidden'}`}>
            {children}
        </div>
    )
}

export default Modal

