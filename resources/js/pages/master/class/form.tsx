import { CustomSelect } from "@/components/custom-select";
import { Button, TextField } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { FormResponse } from "@/utils/constant";
import { fetchTeacher } from "@/utils/fetch";
import { useForm } from "@inertiajs/react";
import { IconCircleQuestionmark } from "justd-icons";

export default function ClassForm() {

    const { data, setData, errors, processing, post } = useForm<any>();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("backoffice.master.class.store"), FormResponse);
    };

    return (
        <>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Class</h1>
                    <p className="text-sm text-gray-600">Master Data Class</p>
                </div>
                <div className="flex gap-4">
                    <Button intent="outline">
                        <IconCircleQuestionmark />
                    </Button>
                </div>
            </div>
            <form onSubmit={onSubmit} className="grid grid-cols-12 gap-4 my-4">
                <CustomSelect
                    className="col-span-6"
                    label="teacher"
                    name="teacher"
                    placeholder="Select teacher"
                    defaultValue={{ value: data?.teacher_id, label: data?.teacher_name }}
                    onChange={(value) => {
                        setData("teacher_id", value?.value);
                        setData("teacher_name", value?.label);
                    }}
                    loadOptions={fetchTeacher}
                    isRequired
                />
                <TextField
                    className="col-span-6"
                    label="Name"
                    name="name"
                    value={data.name}
                    autoComplete="one-time-code"
                    onChange={(v) => setData("name", v)}
                    errorMessage={errors?.name}
                    isRequired
                />
                <TextField
                    className="col-span-6"
                    label="Grade"
                    name="grade"
                    value={data.grade}
                    autoComplete="one-time-code"
                    onChange={(v) => setData("grade", v)}
                    errorMessage={errors?.grade}
                />
                <TextField
                    className="col-span-6"
                    label="Code"
                    name="code"
                    value={data.code}
                    autoComplete="one-time-code"
                    onChange={(v) => setData("code", v)}
                    errorMessage={errors?.code}
                />
                <div className="col-span-12 my-3">
                    <Button isDisabled={processing} type="submit">
                        {processing ? "Processing..." : "Submit"}
                    </Button>
                </div>
            </form>
        </>
    )
}

ClassForm.layout = (page: React.ReactNode) => <AppLayout children={page} />;