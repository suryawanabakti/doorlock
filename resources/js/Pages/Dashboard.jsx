import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    IconBook2,
    IconList,
    IconPencil,
    IconUsers,
} from "@tabler/icons-react";

export default function Dashboard({ auth }) {
    const header = (
        <div className="row g-2 align-items-center">
            <div className="col">
                {/* Page pre-title */}
                <div className="page-pretitle">Overview</div>
                <h2 className="page-title">Dashboard</h2>
            </div>
            {/* Page title actions */}
            <div className="col-auto ms-auto d-print-none">
                <div className="btn-list"></div>
            </div>
        </div>
    );

    return (
        <AuthenticatedLayout user={auth.user} header={header}>
            <Head title="Dashboard" />
            <div className="row row-cards">
                <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="bg-primary text-white avatar">
                                        {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                                        <IconUsers className="icon" />
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="font-weight-medium">
                                        132 Mahasiswa
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
