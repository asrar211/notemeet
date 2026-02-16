export default function Spinner() {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="border-b border-blue-100 rounded-full p-2 w-5 border-t h-5 animate-spin">
                    <div className="bg-blue-100 w-1 h-1 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 animate-pulse"></div>
            </div>
        </div>
    )
};
