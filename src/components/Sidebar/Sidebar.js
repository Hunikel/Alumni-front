import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import LayersIcon from '@material-ui/icons/Layers';
import LockIcon from '@material-ui/icons/Lock';
import EcoIcon from '@material-ui/icons/Eco';
import SearchIcon from "@/components/Header/SearchIcon";
import {Announcement, Money} from "@material-ui/icons";
const Sidebar = () => {
    return (
        <div className="md:w-3/12 w-6/12 h-screen shadow-2xl">
            <div className=" border-b py-3 mt-1 flex justify-around ">
                <p className="text-xl  font-semibold">Alumni Dashboard</p>

            </div>
            <div className="p-4 space-y-14">
                <div className="space-y-4">
                    <h1 className="text-gray-400">Menu</h1>
                    <div className="">
                        <div
                            className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <DonutLargeIcon className=" text-gray-300"/>
                            <p className=" ">Dashbord</p>
                        </div>
                    </div>
                    <div className="">
                        <div
                            className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <SearchIcon className="text-gray-300"/>
                            <p className="text-gray-600">Recherche</p>
                        </div>
                    </div>
                    <div className="">
                        <div
                            className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <Money className="text-gray-300"/>
                            <p className="text-gray-600  ">Cotisation</p>
                        </div>
                    </div>
                    <div className="">
                        <div
                            className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <Money className="text-gray-300"/>
                            <p className="text-gray-600  ">Articles</p>
                        </div>
                    </div>
                    <div className="">
                        <div
                            className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <Announcement className="text-gray-300"/>
                            <p className="text-gray-600  ">Annonce</p>
                        </div>
                    </div>
                    <div className="">
                        <div
                            className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <Announcement className="text-gray-300"/>
                            <p className="text-gray-600  ">Profile</p>
                        </div>
                    </div>
                    <div
                        className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                        <LayersIcon className="text-gray-300"/>
                        <p className="text-gray-600  ">Déconnexion</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Sidebar
