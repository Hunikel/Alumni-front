import "src/styles/Home.module.css";
import "tailwindcss/tailwind.css";
import FullLayout from "../layouts/FullLayout";
import {Dashboard} from "@material-ui/icons";
import Recherche from "@/components/Recherche/Recherche";
import Alerts from "./ui/alerts";
import Badges from "./ui/badges";
import Buttons from "./ui/buttons";
import Grid from "./ui/grid";
const admin = () => {
    return (
        <div>
            <FullLayout>
                <Dashboard/>
                <Alerts />
                <Badges/>
                <Buttons/>
                <Grid/>
            </FullLayout>
        </div>
    );
}

export default admin;