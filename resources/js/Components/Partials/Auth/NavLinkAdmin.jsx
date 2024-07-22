import React from "react";
import { Link } from "@inertiajs/react";
import {
    IconBook2,
    IconHome,
    IconList,
    IconNumber,
    IconPencil,
    IconPencilCheck,
    IconPencilCode,
    IconRegistered,
    IconUsers,
    IconWashTumbleDry,
} from "@tabler/icons-react";

export default function NavLinkAdmin() {
    return (
        <ul className="navbar-nav">
            <li
                className={`nav-item ${
                    route().current("dashboard") && "active"
                }`}
            >
                <Link className="nav-link" href={route("dashboard")}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <IconHome className="icon" />
                    </span>
                    <span className="nav-link-title">Home</span>
                </Link>
            </li>
            <li
                className={`nav-item ${
                    route().current("mahasiswa*") && "active"
                }`}
            >
                <Link className="nav-link" href={route("mahasiswa.index")}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <IconHome className="icon" />
                    </span>
                    <span className="nav-link-title">Mahasiswa</span>
                </Link>
            </li>
        </ul>
    );
}
