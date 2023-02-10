import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import {Col, Row} from "react-bootstrap";

const Bureau = () => {
    return (<Layout>
        <PageTitle title="Conseil d'administration ENSIIE ALUMNI"/>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">
                                Le Bureau de l&apos;A3IE - ENSIIE Alumni a pour mission de mener à bien les actions
                                entreprises par l&apos;association. Il assure le suivi des affaires courantes,
                                entretient les contacts avec les entreprises, les anciens, les étudiants de
                                l&apos;IIE/ENSIIE et l&apos;administration. Il propose et organise de nouvelles
                                manifestations afin de rapprocher les ingénieurs de l&apos;IIE/ENSIIE. <br/><br/>
                                Les membres du Conseil d&apos;Administration ont été élus au cours de
                                l&apos;Assemblée Générale du 30 juin 2020, le document de l&apos;AG sera bientôt
                                consultable ICI. <br/><br/>
                                Le Conseil a procédé lors de sa réunion du 16 juillet 2020 à l&apos;élection du
                                bureau : <br/><br/>
                            </p>
                            <Row className="justify-content-center">
                                <Col md={6}>
                                    <p className="card-text">
                                        Composition du bureau :<br/>
                                        <ul>
                                            <li>Président : Sylvain Maret (2019)</li>
                                            <li>Vice-Président : Jérôme Gautier (1986)</li>
                                            <li>Trésorier : Denis Clavier (2018)</li>
                                            <li>Vice-Trésorier : François Ducoin (1976)</li>
                                            <li>Secrétaire Général : Alan Le Montagner (2018)</li>
                                            <li>Vice-Secrétaire : David Mazaltarim (2000)</li>
                                        </ul>
                                        Autres administrateurs :<br/>
                                        <ul>
                                            <li>Alain Bonnot</li>
                                            <li>Alexis Damiens (2017)</li>
                                            <li>Louis Favrie (2018)</li>
                                            <li>André Galliano</li>
                                            <li>Alice Glémarec (2018)</li>
                                            <li>Valentin Guyonneau (2020)</li>
                                            <li>Amélie Ledein (2020)</li>
                                            <li>Laurent Prével (1982)</li>
                                            <li>Patrick Viscaino (1985)</li>
                                        </ul>
                                        Autres contributeurs non membres du CA :
                                        <ul>
                                            <li>Thibault Dubuisson (2012)</li>
                                            <li>lorian Dufour-Rives (2018)</li>
                                            <li>Inès Mabrouk (2011)</li>
                                            <li>Luc Pernet (1993)</li>
                                        </ul>
                                    </p>
                                </Col>
                                <Col md={6}>
                                    <p className="card-text">
                                        Commissions :<br/>
                                        <ul>
                                            <li>Web : Loris Tichadou et Alexis Damiens</li>
                                            <li>Communication : Alan Le Montagner</li>
                                            <li>Enquêtes et statistiques</li>
                                            <li>Annuaire</li>
                                            <li>Club A3IE : Patrick Viscaino</li>
                                        </ul>
                                        Groupes : <br/>
                                        <ul>
                                            <li>Club Toulouse Midi-Pyrénées :</li>
                                            <li>Club PACA : Luc Pernet (1993)</li>
                                            <li>Club Rhône Alpes : Luc Arbib (1984)</li>
                                            <li>FinancIIE : Oumaima Benkiran (2016)</li>
                                        </ul>
                                        Membres d&apos;honneur :<br/>
                                        <ul>
                                            <li>Alain Cabanes (†)</li>
                                            <li>Madeleine Dewez (†)</li>
                                            <li>Patrick Castera (1981)</li>
                                            <li>Jean-Luc Kors (1982)</li>
                                            <li>Laurent Prével (1982)</li>
                                        </ul>
                                    </p>
                                </Col>

                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Layout>)
}
export default Bureau;