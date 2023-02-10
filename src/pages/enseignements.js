import Layout from "@/components/Layout/Layout";
import {Image} from "react-bootstrap";
import enseignement from "@/images/enseignement.jpg";

const Enseignements = () => {
    return (
        <Layout>
            <h1 className="pb-100 pt-100">Enseignements</h1>
            <Image src={enseignement.src} alt="enseignement"/>
        </Layout>
    )
}
export default Enseignements;