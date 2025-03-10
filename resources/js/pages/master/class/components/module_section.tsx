import { CustomSelect } from "@/components/custom-select";
import { Column, DataTable } from "@/components/data-table";
import { Button, Modal } from "@/components/ui";
import { Base } from "@/types/base";
import { FormResponse } from "@/utils/constant";
import { fetchModule } from "@/utils/fetch";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import { IconFloppyDisk, IconPlus, IconUpload } from "justd-icons";
import { useState } from "react";

type ClassModuleSectionProps = {
    payload: any,
}

export const ClassModuleSection = ({ payload }: ClassModuleSectionProps) => {

    const [filters, setFilters] = useState({ class_room_id: payload.id });
    const { data, setData, put, processing } = useForm();

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
            cell: (item) => item?.student?.name ?? '-',
            sortable: false,
        },
    ];

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        data['class_room_id'] = payload.id;
        put(route('backoffice.master.class.module', payload.id), FormResponse);
    };

    const fetchData = async (params: Record<string, any>) => {
        const response = await axios.get<Base<any[]>>(
            route('backoffice.master.class.module', payload.id),
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
                <div className="flex flex-row gap-4" >
                    <Button intent="outline" >
                        <IconUpload />
                        Import Student
                    </Button>
                    <Modal>
                        <Button intent="outline" >
                            <IconPlus />
                            Add Student
                        </Button>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Add Student</Modal.Title>
                                <Modal.Description>
                                    You can add student by selecting the student first
                                </Modal.Description>
                            </Modal.Header>
                            <Modal.Footer>
                                <form onSubmit={onSubmit} className="w-full grid grid-cols-12 gap-4" >
                                    <div className="col-span-12" >
                                        <CustomSelect
                                            label="Module"
                                            name="module"
                                            placeholder="Select Module"
                                            defaultValue={null}
                                            onChange={(value) => {
                                                setData("module_id", value?.value);
                                            }}
                                            loadOptions={fetchModule}
                                            isRequired
                                        />
                                    </div>
                                    <div className="col-span-12" >
                                        <Button type="submit" isDisabled={processing} >
                                            <IconFloppyDisk />
                                            {processing ? "Processing..." : "Save"}
                                        </Button>
                                    </div>
                                </form>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>
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