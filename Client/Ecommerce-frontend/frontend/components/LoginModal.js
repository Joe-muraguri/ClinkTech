const LoginModal = () => {
    return ( 
        <>
            <div
                id="registerModal"
                className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 hidden"
                >
                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md w-full p-6">
                    <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-medium">Register</h3>
                    <a href="#" className="text-gray-400 hover:text-gray-600">&times;</a>
                    </div>
                    <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                        </label>
                        <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                        </label>
                        <input
                        type="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                        </label>
                        <input
                        type="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                        Register
                        </button>
                    </div>
                    </form>
                </div>
                </div>
        </>
     );
}
 
export default LoginModal;