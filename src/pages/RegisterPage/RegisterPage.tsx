const RegisterPage = () => {
    return (
        <div id="background-register">
            <div>
                <div>
                    <form method="post" action='/register'>
                        <label>
                            Username:
                            <input type="text" name="username" placeholder="Username" />
                        </label>
                        <label>
                            Email:
                            <input type="text" name="email" placeholder="demoEmail@gmail.com" />
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" placeholder="***********" />
                        </label>
                        <label>
                            Confirm Password:
                            <input type="password" name="cPassword" placeholder="***********" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;