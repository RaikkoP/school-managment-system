import Button from "../../components/Button/Button";
import "./FrontPage.css"

const FrontPage = () => {
    return (
        <div id="background-main">
            <div className="inline-block first:sm:w-[80vw] lg:w-[55vw] w-[100%] lg:h-[80vh] lg:pt-[6em] pt-[3em]">
                <div className="marker:lg:bottom-[20%] w-[80%] h-[100%] bg-[#d1d1d1] border-4 border-[#bababa] sm:p-20 p-12 sm:ml-8 ml-6 rounded-tr-[30%] rounded-tl-[10%] rounded-bl-[30%] rounded-br-[10%] mr-[40%]">
                    <h1 className="my-10 sm:text-5xl lg:text-8xl text-4xl text-black">School Managment System📖</h1>
                    <h2 className="mb-12 sm:text-3xl lg:text-4xl text-xl text-black">Manage your school system with ease👍🤯</h2>
                    <Button>
                        <b>Login</b>
                    </Button>
                    <Button>
                        <b>Register</b>
                    </Button>
                    <Button>
                        <b>Check Database</b>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FrontPage;