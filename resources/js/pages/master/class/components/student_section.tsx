import { Column, DataTable } from "@/components/data-table"
import { Button, Modal } from "@/components/ui"
import { Base } from "@/types/base"
import axios from "axios"
import { IconPlus } from "justd-icons"
import { useState } from "react"

type ClassStudentSectionProps = {
    payload: any,
}

export const ClassStudentSection = ({ payload }: ClassStudentSectionProps) => {

    const [filters, setFilters] = useState({ class_room_id: payload.id });

    const columns: Column<any>[] = [
        {
            id: 'id',
            header: 'ID',
            cell: (item) => item.id,
            sortable: false,
            isRowHeader: true,
        },
    ];

    const fetchData = async (params: Record<string, any>) => {
        const response = await axios.get<Base<any[]>>(
            route('backoffice.master.class.fetchStudent', payload.id),
            {
                params: {
                    'filter[class_room_id]': payload.id,
                    ...params,
                }
            }
        );
        return response.data;
    };

    return (
        <>
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Student Section</h1>
                    <p className="text-sm text-gray-600">Master Data Student Section</p>
                </div>
                <Modal>
                    <Button intent="outline" >
                        <IconPlus />
                        Add Student
                    </Button>
                    <Modal.Content>
                        <Modal.Header>
                            <Modal.Title>Nice! Let's beef up your account.</Modal.Title>
                            <Modal.Description>
                                2FA beefs up your account's defense. Pop in your password to keep going.
                            </Modal.Description>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Hello</p>
                        </Modal.Body>
                    </Modal.Content>
                </Modal>
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