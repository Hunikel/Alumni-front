import Sidebar from "@/components/Sidebar/Sidebar";
import AdminHeader from "@/components/Header/AdminHeader";
import Container from "@/components/Container/Container";
import "src/styles/Home.module.css";
import "tailwindcss/tailwind.css";
const admin = () => {
    return (
        <div>
            <div className="flex w-screen h-screen" >
                <Sidebar />
                <div className="w-screen ">
                    <AdminHeader />
                    <Container />
                </div>
            </div>

        </div>
    );
}

export default admin;