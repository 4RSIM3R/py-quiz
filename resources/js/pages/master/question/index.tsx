import { BaseAction } from "@/components/base-action";
import { Column, DataTable } from "@/components/data-table";
import { DeleteDialog } from "@/components/delete-dialog";
import { Button } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { Base } from "@/types/base";
import { FormResponse } from "@/utils/constant";
import { Link, useForm } from "@inertiajs/react";
import axios from "axios";
import { IconFilter, IconPlus, IconUpload } from "justd-icons";
import { useState } from "react";

export default function QuestionIndex() {

    const [filters, setFilters] = useState({ name: '' });
    const [id, setId] = useState<any>();
    const { delete: destroy } = useForm();

    const onDelete = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        destroy(route('backoffice.master.question.destroy', id), FormResponse);
    };

    const columns: Column<any>[] = [
        {
            id: 'id',
            header: 'ID',
            cell: (item) => item.id,
            sortable: false,
            isRowHeader: true,
        },
        {
            id: 'name',
            header: 'Name',
            cell: (item) => item.name,
        },
        {
            id: 'nip',
            header: 'NIP',
            cell: (item) => item.nip,
        },
        {
            id: 'actions',
            header: 'Actions',
            cell: (item) => (
                <BaseAction
                    url="backoffice.master.question.show"
                    id={item.id}
                    setId={setId}
                    onDelete={onDelete}
                />
            ),
            sortable: false
        }
    ];

    const fetchData = async (params: Record<string, any>) => {
        const response = await axios.get<Base<any[]>>(
            route('backoffice.master.question.fetch', params)
        );
        return response.data;
    };

    return (
        <>
            <DeleteDialog id={id} onDelete={onDelete} onOpenChange={setId} />
            <div className="flex justify-between" >
                <div>
                    <h1 className="text-xl font-semibold" >question</h1>
                    <p className="text-sm text-gray-600" >Master Data question</p>
                </div>
                <div className="flex gap-2.5" >
                    <Button intent="outline" >
                        <IconFilter />
                    </Button>
                    <Button intent="outline" >
                        <IconUpload />
                        Import Data
                    </Button>
                    <Link href={route('backoffice.master.question.create')} >
                        <Button>
                            <IconPlus />
                            Add Data
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="my-4 flex flex-col gap-2" >
                <DataTable
                    columns={columns}
                    fetchData={fetchData}
                    filters={filters}
                />
            </div>
        </>
    )

}

QuestionIndex.layout = (page: React.ReactNode) => <AppLayout children={page} />;