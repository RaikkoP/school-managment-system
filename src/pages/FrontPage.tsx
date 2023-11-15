import Button from "../components/Button/Button";

const FrontPage = () => {
    return (
        <div className="bg-image">
            <div className="absolute inset-x-0 bottom-20 bg-[#d1d1d1] border-4 border-[#bababa] p-24 ml-4 rounded-tr-[30%] rounded-tl-[10%] rounded-bl-[30%] rounded-br-[10%] mr-[40%]">
                <h1 className="my-10 text-8xl text-black">School Managment System📖</h1>
                <h2 className="mb-12 text-4xl text-black">Manage your school system with ease👍🤯</h2>
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
    )
}

export default FrontPage;