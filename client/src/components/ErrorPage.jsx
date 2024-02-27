import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <div className="h-full flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 to-cyan-200">
                <div className="mb-8 text-3xl text-center">Oops..</div>
                <div className="mb-3 text-2xl text-center">Username Exists</div>
                <Link to="/">
                    <button className="py-2 px-4 bg-slate-800 text-white rounded-md">
                        Return
                    </button>
                </Link>
            </div>
        </>
    );
}

export default ErrorPage;
