import Modal from "@/common/modal/Modal"

const Home = () => {
    return (
        <>
            <div>HOME</div>
            <Modal show={true} onClose={() => { console.log("close") }}>
                <div>MODAL</div>
            </Modal>
        </>
    )
}

export default Home